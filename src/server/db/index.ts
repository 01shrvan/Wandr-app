const { createClient } = require("@libsql/client");
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema"

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, {
  schema,
  logger: true,
  casing: "snake_case",
});