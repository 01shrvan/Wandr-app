import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { id, timestamp_now } from "../column.helper";

export const user = sqliteTable("user", {
    id: id(),
    fullName: text().notNull(),
    email: text().notNull().unique(),
    password: text().notNull(),
    createdOn: timestamp_now()
})