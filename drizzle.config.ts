import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema/index.ts",
  out: "./drizzle/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
