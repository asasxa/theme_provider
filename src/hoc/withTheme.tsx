import React, { ComponentType, ForwardedRef } from 'react';
import { WithThemeProps, ThemeType } from '../types';

export type WithThemeInjected<P> = P & WithThemeProps;

export function withTheme<P extends Record<string, unknown>>(
  Component: ComponentType<WithThemeInjected<P>>
): ComponentType<P & { theme?: ThemeType }> {

  const WithThemeComponent = React.forwardRef(
    (props: P & { theme?: ThemeType }, ref: ForwardedRef<unknown>) => {
      const theme: ThemeType = props.theme ?? 'light';

      const { theme: _, ...restProps } = props as P & { theme?: ThemeType };

      return (
        <Component
          {...(restProps as P)}
          theme={theme}
          ref={ref as unknown as ForwardedRef<ComponentType<WithThemeInjected<P>>>}
        />
      );
    }
  );

  const componentName = Component.displayName || Component.name || 'Component';
  WithThemeComponent.displayName = `withTheme(${componentName})`;

  return WithThemeComponent;
}

export function withThemeStrict<P extends Record<string, unknown>>(
  Component: ComponentType<WithThemeInjected<P>>
) {
  type Props = P & { theme?: ThemeType };

  const WithThemeComponent = React.forwardRef<unknown, Props>(
    ({ theme = 'light', ...rest }, ref) => {
      return (
        <Component
          {...(rest as P)}
          theme={theme as ThemeType}
          ref={ref}
        />
      );
    }
  );

  WithThemeComponent.displayName = `withTheme(${Component.displayName || Component.name || 'Component'})`;

  return WithThemeComponent;
}