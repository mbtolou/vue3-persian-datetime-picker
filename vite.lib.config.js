import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        "src/picker/Vue3PersianDatetimePicker.vue"
      ),
      name: "Vue3PersianDatetimePicker",
      fileName: (format) => `vue3-persian-datetime-picker.${format}.js`,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["vue", "moment", "moment-jalaali"],
      output: {
        globals: {
          vue: "Vue",
          moment: "moment",
          "moment-jalaali": "moment"
        },
        exports: "named"
      }
    },
    sourcemap: false,
    // غیرفعال کردن minify
    minify: false
  },
  css: {
    preprocessorOptions: {
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
