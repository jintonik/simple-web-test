import { defineConfig } from 'vite';

export default defineConfig({
	base: 'simple-web-app',
  // Отключаем точку входа — работаем с index.html напрямую
  appType: 'mpa', // Multi-Page Application — для статики
  build: {
    rollupOptions: {
      input: './index.html' // ← единственный вход
    }
  }
});