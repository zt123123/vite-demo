import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"

export default defineConfig({
  publicDir: "./public",
  plugins: [(vuePlugin())],
  base: 'https://zt123123.github.io/vite-demo/'
})