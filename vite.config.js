import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    // Help moment-jalaali resolve correctly with Vite
    mainFields: ["browser", "module", "main", "jsnext:main", "jsnext"]
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ["moment", "moment-jalaali"]
  }
});
