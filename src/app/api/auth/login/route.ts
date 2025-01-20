import { signToken } from "@/server/auth";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { compare } from "bcryptjs";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    const userData = await db.query.user.findFirst({
      where: eq(user.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { error: true, message: "User does not exist." },
        { status: 400 }
      );
    }

    const isPasswordValid = await compare(password, userData.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: true, message: "Invalid credentials." },
        { status: 400 }
      );
    }

    const accessToken = await signToken({ userId: userData.id });

    return NextResponse.json({
      error: false,
      message: "Login successful.",
      user: { fullName: userData.fullName, email: userData.email },
      accessToken,
    });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Login failed." },
      { status: 500 }
    );
  }
}
