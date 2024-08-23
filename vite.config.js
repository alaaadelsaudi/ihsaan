import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // أو ببساطة احذف هذا السطر
  plugins: [react()],
})



