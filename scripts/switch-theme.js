// ===== Логика переключения темы =====
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Проверяем сохранённую тему или системную настройку
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-theme');
  toggle.checked = true;
}

// 2. Обработчик клика
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// 3. (Опционально) Слушаем системные изменения
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const isDark = e.matches;
  const saved = localStorage.getItem('theme');
  // Меняем ТОЛЬКО если пользователь не выбрал явно
  if (!saved) {
    if (isDark) {
      body.classList.add('dark-theme');
      toggle.checked = true;
    } else {
      body.classList.remove('dark-theme');
      toggle.checked = false;
    }
  }
});