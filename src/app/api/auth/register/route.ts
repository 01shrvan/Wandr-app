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

    console.log("Checking for existing user with email:", email);

    const { id: userId } = await db.transaction(async (txn) => {
      // Checking if the user already exists
      const existingUser = await txn
        .select()
        .from(user)
        .where(eq(user.email, email))
        .limit(1);

      console.log("Existing user check result:", existingUser);

      if (existingUser.length > 0) {
        throw new Error("User already exists.");
      }

      // Hashing password
      const hashedPassword = await hash(password, 10);
      console.log("Password hashed successfully.");

      // Creating new user
      const newUser = await txn
        .insert(user)
        .values({
          email,
          fullName,
          password: hashedPassword,
        })
        .returning();

      console.log("New user created:", newUser);

      return newUser[0];
    });

    // Signing access token
    const accessToken = await signToken({ userId });

    return NextResponse.json({
      error: false,
      user: { fullName, email },
      accessToken,
      message: "Registration successful.",
    });
  } catch (error) {
    console.error("Error during registration:", error);

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
