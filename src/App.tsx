import { useState } from 'react';
import type { ThemeType } from './types';
import { ThemedButton } from './components/ThemedButton';
import { THEME_STYLES } from './types';

const getAppContainerStyles = (theme: ThemeType) => ({
  minHeight: '100vh',
  padding: '20px',
  background: THEME_STYLES[theme].background,
  color: THEME_STYLES[theme].color,
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '20px',
});

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleButtonClick = () => {
    alert(`Кнопка нажата! Текущая тема: ${theme}`);
  };

  return (
    <div style={getAppContainerStyles(theme)}>
      <header style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1>🎨 HOC withTheme Demo</h1>
        <p>Текущая тема: <strong>{theme}</strong></p>
      </header>

      <div style={{ marginBottom: '30px' }}>
        <ThemedButton
          theme={theme}
          variant="secondary"
          onClick={toggleTheme}
          aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
        >
          {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
        </ThemedButton>
      </div>

      <footer style={{ marginTop: 'auto', paddingTop: '20px', opacity: 0.7 }}>
        <small>HOC withTheme • React + TypeScript</small>
      </footer>
    </div>
  );
};

export default App;
