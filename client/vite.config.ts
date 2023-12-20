import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  server: {
    proxy: {
      '/ws': {
        target: 'ws://127.0.0.1:3000',
        changeOrigin: true,
        ws:true
      },
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        ws:true
      },
      '/img': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        ws:true
      },
    },
  },
});
