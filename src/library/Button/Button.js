/* @flow */
import React, { Component, cloneElement } from 'react';
import memoizeOne from 'memoize-one';
import { createRootNode, Content, Inner } from './styled';
import { ICON_SIZE, SIZE } from './constants';

import { buttonPropTypes } from './propTypes';
import type { ButtonDefaultPropsT, ButtonPropsT } from './types';

export default class Button extends Component<ButtonPropsT> {
  static defaultProps: ButtonDefaultPropsT = {
    element: 'button',
    size: SIZE.large,
    type: 'button'
  };

  static propTypes = buttonPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: ButtonPropsT, prevProps: ButtonPropsT) =>
      nextProps.element === prevProps.element
  );

  render() {
    const {
      children,
      iconStart,
      iconEnd,
      size = Button.defaultProps.size,
      type = Button.defaultProps.type,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      size,
      text: children,
      type,
      variant,
      ...restProps
    };

    const Root = this.getRootNode(this.props);

    const startIcon = iconStart
      ? cloneElement(iconStart, { size: ICON_SIZE[size], key: 'iconStart' })
      : null;
    const endIcon = iconEnd
      ? cloneElement(iconEnd, { size: ICON_SIZE[size], key: 'iconEnd' })
      : null;

    return (
      <Root {...rootProps}>
        <Inner>
          {startIcon}
          {children && <Content size={size}>{children}</Content>}
          {endIcon}
        </Inner>
      </Root>
    );
  }
}
