import { defineConfig } from 'vite'
import { resolve } from 'node:path'

/* Multi-page build: every .html entry listed here is emitted, keeping its path
   under dist/ — so impact/index.html is served at /impact/. */
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        products: resolve(import.meta.dirname, 'products/index.html'),
        impact: resolve(import.meta.dirname, 'impact/index.html'),
      },
    },
  },
})
