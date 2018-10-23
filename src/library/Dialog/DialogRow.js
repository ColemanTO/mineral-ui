/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createDialogRowRootNode as createRootNode } from './styled';

import type { DialogRowDefaultProps, DialogRowProps } from './types';

export default class DialogRow extends Component<DialogRowProps> {
  static defaultProps: DialogRowDefaultProps = {
    element: 'div'
  };

  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: DialogRowProps, prevProps: DialogRowProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
