import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      external: ['lucide-react']
    }
  },
  resolve: {
    alias: {
      'parse': 'parse'
    }
  }
});