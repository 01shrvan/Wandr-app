import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

console.log("TURSO_CONNECTION_URL:", process.env.TURSO_CONNECTION_URL);
console.log("TURSO_AUTH_TOKEN exists:", !!process.env.TURSO_AUTH_TOKEN);

if (!process.env.TURSO_CONNECTION_URL) {
  throw new Error("TURSO_CONNECTION_URL is not defined in environment variables");
}

if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_AUTH_TOKEN is not defined in environment variables");
}

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, {
  schema,
  logger: true,
});