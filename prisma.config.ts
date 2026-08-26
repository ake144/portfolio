import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// The CLI (generate / db push / migrate) needs a direct, non-pooled
// connection since transaction-mode pgbouncer doesn't reliably support DDL.
// The running app uses the pooled DATABASE_URL instead, via the adapter in
// lib/prisma.ts.
export default defineConfig({
  datasource: {
    url: env("DIRECT_URL"),
  },
});
