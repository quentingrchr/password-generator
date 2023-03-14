import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $styles: "/src/styles",
      $components: "/src/lib/components",
      $stores: "/src/lib/stores",
    },
  },
});
