import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Asegúrate que el base coincida con tu repositorio GitHub
export default defineConfig({
  base: '/mi-cv-web/',
  plugins: [react()],
})
