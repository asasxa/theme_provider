import React, { useState } from 'react';
import type { ThemeType } from './types';
import { ThemedButton } from './components/ThemedButton';
import { THEME_STYLES } from './types';

/** Стили для контейнера в зависимости от темы */
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

const App: React.FC = () => {
  // Состояние темы в родительском компоненте
  const [theme, setTheme] = useState<ThemeType>('light');

  // Переключатель темы
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Обработчик клика по кнопке
  const handleButtonClick = () => {
    alert(`Кнопка нажата! Текущая тема: ${theme}`);
  };

  return (
    <div style={getAppContainerStyles(theme)}>
      {/* Заголовок */}
      <header style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1>🎨 HOC withTheme Demo</h1>
        <p>Текущая тема: <strong>{theme}</strong></p>
      </header>

      {/* Переключатель темы */}
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

      {/* Примеры кнопок с HOC */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
        <ThemedButton theme={theme} onClick={handleButtonClick}>
          Primary Button
        </ThemedButton>

        <ThemedButton theme={theme} variant="secondary" onClick={handleButtonClick}>
          Secondary Button
        </ThemedButton>

        <ThemedButton theme={theme} disabled style={{ opacity: 0.6 }}>
          Disabled Button
        </ThemedButton>
      </div>

      {/* Демонстрация передачи дополнительных пропсов */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>Кнопка с кастомными пропсами:</p>
        <ThemedButton
          theme={theme}
          onClick={handleButtonClick}
          style={{ width: '200px', fontSize: '14px' }}
          className="custom-class"
          data-testid="theme-button"
        >
          Custom Props
        </ThemedButton>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: 'auto', paddingTop: '20px', opacity: 0.7 }}>
        <small>HOC withTheme • React + TypeScript</small>
      </footer>
    </div>
  );
};

export default App;