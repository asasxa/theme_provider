import React, { ButtonHTMLAttributes } from 'react';
import { withTheme } from '../hoc/withTheme';
import { THEME_STYLES, ThemeType } from '../types';

export interface ThemedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeType;
  variant?: 'primary' | 'secondary';
}

const ThemedButtonBase: React.FC<ThemedButtonProps> = ({
  theme,
  variant = 'primary',
  children,
  style,
  ...props
}) => {
  const styles = THEME_STYLES[theme];

  const buttonStyle: React.CSSProperties = {
    background: styles.background,
    color: styles.color,
    border: `2px solid ${styles.border}`,
    borderRadius: '8px',
    padding: variant === 'primary' ? '12px 24px' : '10px 20px',
    fontWeight: variant === 'primary' ? 'bold' : 'normal',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    ...style,
  };

  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export const ThemedButton = withTheme(ThemedButtonBase);