/* @flow */
import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import withTheme from './withTheme';
import ThemeProvider from './ThemeProvider';

import type { ThemeT } from './types';

export default function createThemedComponent(
  WrappedComponent: React$ComponentType<*>,
  theme: ThemeT<>
) {
  const Wrapper = (props, context) => {
    const outTheme =
      typeof theme === 'function' ? theme(props, context) : theme;
    const { theme: ignore, ...outProps } = props;

    return (
      <ThemeProvider theme={outTheme}>
        <WrappedComponent {...outProps} />
      </ThemeProvider>
    );
  };

  Wrapper.propTypes = WrappedComponent.propTypes;

  Wrapper.displayName = wrapDisplayName(WrappedComponent, 'Themed');

  return withTheme(Wrapper);
}
