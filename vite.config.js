// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TaleRouterDom/', // This must match your repo name on GitHub
  plugins: [react()],
})
