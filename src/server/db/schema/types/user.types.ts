// user
import { user } from "../user.schema";

export type SelectUser = typeof user.$inferSelect;
export type InsertUser = typeof user.$inferInsert;
export type UpdateUser = Partial<Omit<InsertUser, "id">>;
