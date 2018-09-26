/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createRootNode } from './styled';

import { boxPropTypes } from './propTypes';
import type { BoxDefaultPropsT, BoxPropsT } from './types';

export default class Box extends Component<BoxPropsT> {
  static defaultProps: BoxDefaultPropsT = {
    element: 'div'
  };

  static propTypes = boxPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: BoxPropsT, prevProps: BoxPropsT) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
