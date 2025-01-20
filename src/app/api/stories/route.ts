import { travelStoriesInput } from "@/lib/definitions";
import { getUser } from "@/server/auth";
import { db } from "@/server/db";
import { travelStories } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await getUser(request);
    const body: z.infer<typeof travelStoriesInput> = await request.json();
    const validation = travelStoriesInput.safeParse(body);

    if (!validation.success) {
      console.log(validation.error.format());
      return NextResponse.json(
        { error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    await db.insert(travelStories).values({
      image_url: body.imageUrl,
      story: body.story,
      title: body.title,
      visited_location: body.visitedLocation,
      visited_date: new Date(body.visitedDate),
      user_id: userId,
    });

    return NextResponse.json({
      error: false,
      message: "Story added successfully.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: true, message: "Failed to add story." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = await getUser(request);
    const { searchParams } = new URL(request.url);

    let query =
      "SELECT * FROM travel_stories WHERE userId = ? ORDER BY isFavorite DESC";
    let params = [userId];

    const search = searchParams.get("search");
    if (search) {
      query = `
        SELECT * FROM travel_stories 
        WHERE userId = ? 
        AND (
          title LIKE ? OR 
          story LIKE ? OR 
          visitedLocation LIKE ?
        )
        ORDER BY isFavorite DESC
      `;
      const searchPattern = `%${search}%`;
      params = [userId, searchPattern, searchPattern, searchPattern];
    }

    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    if (startDate && endDate) {
      query = `
        SELECT * FROM travel_stories 
        WHERE userId = ? 
        AND visitedDate BETWEEN ? AND ?
        ORDER BY isFavorite DESC
      `;
      params = [
        userId,
        new Date(parseInt(startDate)).toISOString(),
        new Date(parseInt(endDate)).toISOString(),
      ];
    }

    const stories = await db.query.travelStories.findMany({
      where: eq(travelStories.user_id, userId),
    });

    return NextResponse.json({ stories });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch stories." },
      { status: 500 }
    );
  }
}
