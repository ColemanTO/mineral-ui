/* @flow */
import React, { Component } from 'react';
import { DropdownContent as Root } from './styled';

import { dropdownContentPropTypes } from './propTypes';
import type { DropdownContentPropsT } from './types';

export default class DropdownContent extends Component<DropdownContentPropsT> {
  static propTypes = dropdownContentPropTypes;

  render() {
    const { children, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };

          return <div {...wrapperProps}>{children}</div>;
        }}
      </Root>
    );
  }
}
