/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createRootNode } from './styled';
import ElementContext from './ElementContext';

import type { TextProps } from './types';

export default class TextProvider extends Component<TextProps> {
  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: TextProps, prevProps: TextProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);
    const { parentElement: ignoreParentElement, ...rootProps } = this.props;

    return (
      <ElementContext.Provider value={this.props.element}>
        <Root {...rootProps} />
      </ElementContext.Provider>
    );
  }
}
