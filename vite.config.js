import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // policy.html and termsOfService.html are extra entries so they serve the same React app
      input: {
        main: resolve(__dirname, 'index.html'),
        policy: resolve(__dirname, 'policy.html'),
        terms: resolve(__dirname, 'termsOfService.html'),
      },
    },
  }
})
