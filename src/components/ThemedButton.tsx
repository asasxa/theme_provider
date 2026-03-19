import React, { ButtonHTMLAttributes } from 'react';
import type { ThemeType } from '../types';
import { withTheme } from '../hoc/withTheme';
import { THEME_STYLES } from '../types';

export interface ThemedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeType;
  variant?: 'primary' | 'secondary';
}

const ThemedButtonBase: React.FC<ThemedButtonProps> = ({
  theme,
  variant = 'primary',
  className = '',
  style,
  children,
  ...restProps
}) => {
  const themeStyles = THEME_STYLES[theme];

  const variantStyles = variant === 'primary'
    ? { fontWeight: 'bold' as const, padding: '10px 20px' }
    : { opacity: 0.9, padding: '8px 16px' };

  const buttonStyle: React.CSSProperties = {
    ...themeStyles,
    ...variantStyles,
    border: `2px solid ${themeStyles.border}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ...style,
  };

  return (
    <button
      className={`themed-button themed-button--${theme} themed-button--${variant} ${className}`}
      style={buttonStyle}
      {...restProps}
    >
      {children}
    </button>
  );
};

export const ThemedButton = withTheme(ThemedButtonBase);