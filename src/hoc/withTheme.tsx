import React, { ComponentType, forwardRef } from 'react';
import type { ThemeType } from '../types';

/** Пропсы, добавляемые HOC */
export interface WithThemeProps {
  theme: ThemeType;
}

/**
 * Higher-Order Component для передачи темы
 *
 * @param Component - Компонент для обёртывания
 * @returns Компонент с пропом theme
 */
export function withTheme<P extends object>(
  Component: ComponentType<P & WithThemeProps>
) {
  const WithThemeComponent = forwardRef<HTMLElement, P & { theme?: ThemeType }>(
    ({ theme = 'light', ...props }, ref) => {
      return (
        <Component
          {...(props as P)}
          theme={theme as ThemeType}
          ref={ref}
        />
      );
    }
  );

  const displayName = Component.displayName || Component.name || 'Component';
  WithThemeComponent.displayName = `withTheme(${displayName})`;

  return WithThemeComponent;
}
}