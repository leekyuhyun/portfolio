import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_react/',
  plugins: [react()],
  resolve: {
    alias: {
      // @를 src 폴더로 매핑합니다.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 1130,
  },
});
