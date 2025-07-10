import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const PORT = Number(process.env.PORT ?? 3000);

export default defineConfig({
  server: {
    port: PORT,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    tailwindcss(),
  ],
});
