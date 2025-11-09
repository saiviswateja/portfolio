import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name, e.g. '/sai-portfolio/'
const base = '/saiviswateja'

export default defineConfig({
  plugins: [react()],
  base,
})

