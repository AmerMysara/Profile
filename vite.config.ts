import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, `base` must match the repo name.
// Override at build-time: VITE_BASE=/my-repo/ npm run build
const base = process.env.VITE_BASE ?? '/Profile/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
