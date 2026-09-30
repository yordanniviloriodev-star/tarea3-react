import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rutas relativas: permite publicar la app en GitHub Pages (en una subcarpeta) sin romper imágenes ni scripts.
  base: './',
})
