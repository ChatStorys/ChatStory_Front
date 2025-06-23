import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ 이거 꼭 필요!
  plugins: [react()],
});
