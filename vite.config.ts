import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const ciBase = process.env.VITE_BASE_PATH || (repoName ? `/${repoName}/` : '/')

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // En CI (GitHub Pages), usa el nombre real del repositorio como base.
  base: process.env.CI ? ciBase : '/',
})
