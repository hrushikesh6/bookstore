import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api":"https://pillai-buzz-goo4.vercel.app/"
      "/user": "http://localhost:6700/",
      "/book": "http://localhost:6700/"
      // "/api": "https://pillai-buzz.onrender.com/"
    },
  },
  plugins: [react()],
})
