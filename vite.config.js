import { defineConfig } from 'vite';

export default defineConfig({
  // Отключаем точку входа — работаем с index.html напрямую
  appType: 'mpa', // Multi-Page Application — для статики
  build: {
    rollupOptions: {
      input: './index.html' // ← ваш единственный вход
    }
  }
});