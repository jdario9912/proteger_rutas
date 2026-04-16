import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    fs: {
      allow: ["."],
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        storeCatalogo: resolve(__dirname, "src/pages/catalog/catalog.html"),
        storeCart: resolve(__dirname, "src/pages/cart/cart.html"),
      },
    },
  },
  base: "./",
});
