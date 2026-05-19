import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
=======
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'web-medicina-nuclear'
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
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
<<<<<<< HEAD
  // En CI (GitHub Pages), usa el nombre real del repositorio como base.
  base: process.env.CI ? ciBase : '/',
=======
  // Usar la base del repositorio por defecto para builds dirigidos a GitHub Pages.
  // Esto asegura que los assets se publiquen en /<repo-name>/ cuando se sirvan desde
  // https://<user>.github.io/<repo-name>/ (por ejemplo GitHub Pages).
  base: process.env.VITE_BASE_PATH || ciBase,
>>>>>>> f4e9b8f40af0a842a44917bf9954b7ae223df618
})
