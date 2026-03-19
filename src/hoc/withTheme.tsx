import type { ComponentType } from 'react';
import type { ThemeType } from '../types';

/** Пропсы, добавляемые HOC */
export interface WithThemeProps {
  theme: ThemeType;
}

/**
 * Higher-Order Component для передачи темы через пропсы
 */
export function withTheme<P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P & WithThemeProps>
) {
  return function WithTheme(props: P & { theme?: ThemeType }) {
    const theme: ThemeType = props.theme ?? 'light';
    

    const { theme: themeProp, ...rest } = props;
    
    return <WrappedComponent {...(rest as P)} theme={theme} />;
  };
}