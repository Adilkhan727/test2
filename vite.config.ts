import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    proxy: {
      '/api/crm-form': {
        target: 'https://crm.tennet.kz/api/public/forms/234f09f7-c1b3-4154-8632-ba3fa6134f0d/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/crm-form/, ''),
      },
    },
  },
});
