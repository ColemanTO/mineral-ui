/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createRootNode } from './styled';

import { linkPropTypes } from './propTypes';
import type { LinkPropsT } from './types';

export default class Link extends Component<LinkPropsT> {
  static defaultProps = {
    element: 'a'
  };

  static propTypes = linkPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: LinkPropsT, prevProps: LinkPropsT) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
