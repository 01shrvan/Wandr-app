import { getUser } from "@/server/auth";
import { db } from "@/server/db";
import { travelStories } from "@/server/db/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await getUser(request);
    const body = await request.json();
    const { title, story, visitedLocation, imageUrl, visitedDate, isFavorite } = body;

    // Check if updating favorite status only
    if (typeof isFavorite === "boolean") {
      await db
        .update(travelStories)
        .set({ is_favorite: isFavorite })
        .where(
          and(
            eq(travelStories.id, params.id),
            eq(travelStories.user_id, userId)
          )
        );

      return NextResponse.json({
        error: false,
        message: "Favorite status updated successfully.",
      });
    }

    // Full story update
    if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
      return NextResponse.json(
        { error: true, message: "All fields are required." },
        { status: 400 }
      );
    }

    await db
      .update(travelStories)
      .set({
        title,
        story,
        visited_location: visitedLocation,
        image_url: imageUrl,
        visited_date: new Date(visitedDate),
      })
      .where(
        and(
          eq(travelStories.id, params.id),
          eq(travelStories.user_id, userId)
        )
      );

    return NextResponse.json({
      error: false,
      message: "Story updated successfully.",
    });
  } catch (error) {
    console.error("Failed to update story:", error);
    return NextResponse.json(
      { error: true, message: "Failed to update story." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await getUser(request);

    await db
      .delete(travelStories)
      .where(
        and(
          eq(travelStories.id, params.id),
          eq(travelStories.user_id, userId)
        )
      );

    return NextResponse.json({
      error: false,
      message: "Story deleted successfully.",
    });
  } catch (error) {
    console.error("Failed to delete story:", error);
    return NextResponse.json(
      { error: true, message: "Failed to delete story." },
      { status: 500 }
    );
  }
}