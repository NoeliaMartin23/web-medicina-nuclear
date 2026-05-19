import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'web-medicina-nuclear';
const base = process.env.VITE_BASE_PATH || (process.env.CI ? `/${repoName}/` : '/');

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    '@': path.resolve(__dirname, './src'),
  },
  base,
});
