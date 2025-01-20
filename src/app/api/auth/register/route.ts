import { db } from "@/server/db";
import { signToken } from "@/server/auth";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { user } from "@/server/db/schema";

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    const { id: userId } = await db.transaction(async (txn) => {
      const existingUser = await txn.query.user.findFirst({
        where: eq(user.email, email),
      });

      if (existingUser) {
        throw new Error("User already exists.");
      }

      const hashedPassword = await hash(password, 10);

      const newUser = await txn
        .insert(user)
        .values({
          email,
          fullName,
          password: hashedPassword,
        })
        .returning();

      return newUser[0];
    });

    const accessToken = await signToken({ userId });

    return NextResponse.json({
      error: false,
      user: { fullName, email },
      accessToken,
      message: "Registration successful.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "User already exists.") {
      return NextResponse.json(
        { error: true, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: true, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
