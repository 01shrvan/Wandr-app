import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { id, timestamp_now, user_id } from "../column.helper";
import { sql } from "drizzle-orm";

export const travelStories = sqliteTable("travel_stories", {
  id: id(),
  title: text().notNull(),
  story: text().notNull(),
  visited_location: text({ mode: "json" })
    .notNull()
    .$type<string[]>()
    .default(sql`(json_array())`),
  is_favorite: integer({ mode: "boolean" }).notNull().default(false),
  user_id: user_id(),
  image_url: text().notNull(),
  visited_date: integer({ mode: "timestamp_ms" }).notNull(),
  created_at: timestamp_now(),
});
