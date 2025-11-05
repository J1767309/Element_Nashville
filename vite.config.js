import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Element_Nashville/',
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    allowedHosts: ['5173-ie8nreaud4vqiaol4es1r-b09ae24b.manusvm.computer'],
  },
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
