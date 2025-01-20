import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { user } from "./schema";

export const id = () =>
  text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID());

export const timestamp_now = () =>
  integer({ mode: "timestamp_ms" })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull();

export const user_id = () =>
  text()
    .references(() => user.id)
    .notNull();
