import { resolve, join } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "es",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es"],
    },
    outDir: join(__dirname, "build"),
  },
  esbuild: {
    minify: false,
    keepNames: true,
  },
});
