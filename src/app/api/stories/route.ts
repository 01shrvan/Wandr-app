import { getUser } from "@/lib/auth";
import { executeQuery } from "@/lib/db";
import { db } from "@/server/db";
import { travelStories } from "@/server/db/schema";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await getUser(request);
    const { title, story, visitedLocation, imageUrl, visitedDate } =
      await request.json();

    if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
      return NextResponse.json(
        { error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    const id = nanoid();
    const visitedLocationJson = JSON.stringify(visitedLocation);

    // await executeQuery(
    //   `INSERT INTO travel_stories
    //    (id, title, story, visitedLocation, imageUrl, visitedDate, userId)
    //    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    //   [id, title, story, visitedLocationJson, imageUrl, new Date(parseInt(visitedDate)).toISOString(), userId]
    // )

    return NextResponse.json({
      error: false,
      message: "Story added successfully.",
    });
  } catch (error) {
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

    const result = await executeQuery(query, params);
    const stories = result.rows.map((story) => ({
      ...story,
      visitedLocation: JSON.parse(story.visitedLocation as string),
    }));

    return NextResponse.json({ stories });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch stories." },
      { status: 500 }
    );
  }
}
