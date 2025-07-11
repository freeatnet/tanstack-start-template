import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Add your server-side environment variables here
    // DATABASE_URL: z.string().url(),
  },
  clientPrefix: "VITE_",
  client: {
    // Add your client-side environment variables here (prefixed with VITE_)
    // VITE_API_URL: z.string().url(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
