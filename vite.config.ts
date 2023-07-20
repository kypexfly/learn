/// <reference types="vitest" />

import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
  },
})
