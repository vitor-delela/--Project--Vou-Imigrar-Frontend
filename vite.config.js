import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({})
  ],
  build: {
    chunkSizeWarningLimit: 1600
  }
})
