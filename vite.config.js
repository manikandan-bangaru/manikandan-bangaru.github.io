import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Ensures relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Extra entries so /policy.html and /arrows/privacy.html serve the same React app
      input: {
        main: resolve(__dirname, 'index.html'),
        policy: resolve(__dirname, 'policy.html'),
        // Arrows Play Store listing links here: /arrows/privacy.html
        'arrows/privacy': resolve(__dirname, 'arrows/privacy.html'),
      },
    },
  }
})
