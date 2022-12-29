import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/play-osu/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
          target: 'http://localhost:6001',
          changeOrigin: true,
          secure: false,      
          ws: true,
      }
    }
  }
})
