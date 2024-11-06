import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const buildRoot = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": resolve(buildRoot, "./src"),
      // "@components": resolve(buildRoot, "./src/shared/components"),
      "@features": resolve(buildRoot, "./src/features"),
    },
  },
});
