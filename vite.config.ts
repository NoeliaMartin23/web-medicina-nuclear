import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'web-medicina-nuclear'
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
  // Usar la base del repositorio por defecto para builds dirigidos a GitHub Pages.
  // Esto asegura que los assets se publiquen en /<repo-name>/ cuando se sirvan desde
  // https://<user>.github.io/<repo-name>/ (por ejemplo GitHub Pages).
  base: process.env.VITE_BASE_PATH || ciBase,
})
