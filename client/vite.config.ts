import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
      },
      '/img': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
      },
    },
  },
});
