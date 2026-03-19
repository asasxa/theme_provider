import React, { ComponentType, ForwardedRef, forwardRef } from 'react';
import type { ThemeType } from '../types';

export interface WithThemeProps {
  theme: ThemeType;
}

export type WithThemeInjected<P> = P & WithThemeProps;

export function withTheme<P extends Record<string, unknown>>(
  Component: ComponentType<WithThemeInjected<P>>
) {
  const WithThemeComponent = forwardRef(function WithThemeComponent(
    props: P & { theme?: ThemeType },
    ref: ForwardedRef<unknown>
  ) {
    const theme: ThemeType = props.theme ?? 'light';

    const { theme: _, ...restProps } = props;

    return (
      <Component
        {...(restProps as P)}
        theme={theme}
        ref={ref as React.ForwardedRef<React.ElementType>}
      />
    );
  });

  const componentName = Component.displayName || Component.name || 'Component';
  WithThemeComponent.displayName = `withTheme(${componentName})`;

  return WithThemeComponent;
}