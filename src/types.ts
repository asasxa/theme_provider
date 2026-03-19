export type ThemeType = 'light' | 'dark';

export interface WithThemeProps {
  theme: ThemeType;
}

export interface ThemeStyles {
  light: {
    background: string;
    color: string;
    border: string;
  };
  dark: {
    background: string;
    color: string;
    border: string;
  };
}

export const THEME_STYLES: ThemeStyles = {
  light: {
    background: '#ffffff',
    color: '#1a1a1a',
    border: '#cccccc',
  },
  dark: {
    background: '#1a1a1a',
    color: '#ffffff',
    border: '#444444',
  },
};