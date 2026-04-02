import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lokkie-bos/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
