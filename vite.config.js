import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://adriangcodes.github.io/oct24-t2w6-interactive-react/"
})
