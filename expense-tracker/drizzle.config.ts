import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./backend/db/schemas/*",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
