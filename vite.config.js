import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"

export default defineConfig({
  publicDir: "./public",
  plugins: [(vuePlugin())]
})