import { travelStoriesInput } from "@/lib/definitions";
import { getUser } from "@/server/auth";
import { db } from "@/server/db";
import { travelStories } from "@/server/db/schema";
import { and, between, eq, like, or } from "drizzle-orm";
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

    // Base query
    let query = eq(travelStories.user_id, userId);
    
    // Search filter
    const search = searchParams.get("search");
    if (search) {
      query = and(
        query,
        or(
          like(travelStories.title, `%${search}%`),
          like(travelStories.story, `%${search}%`)
          // Note: We can't easily search through JSON arrays with SQLite
          // You'd need custom logic for searching through visited_location
        )
      );
    }

    // Date range filter
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    if (startDate && endDate) {
      const start = new Date(parseInt(startDate));
      const end = new Date(parseInt(endDate));
      
      // Add one day to the end date to include the entire end day
      end.setDate(end.getDate() + 1);
      
      query = and(
        query,
        between(travelStories.visited_date, start, end)
      );
    }

    // Get stories with filters
    const stories = await db.query.travelStories.findMany({
      where: query,
      orderBy: (travelStories) => [
        // Order by favorite first, then by date
        travelStories.is_favorite.desc(),
        travelStories.visited_date.desc(),
      ],
    });

    return NextResponse.json({ stories });
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    return NextResponse.json(
      { error: true, message: "Failed to fetch stories." },
      { status: 500 }
    );
  }
}