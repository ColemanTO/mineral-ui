/* @flow */
import React, { Component } from 'react';
import {
  TabPanel as Root,
  TabPanelOverflowContainer as OverflowContainer
} from './styled';

import type { TabPanelProps } from './types';

export default class TabPanel extends Component<TabPanelProps> {
  render() {
    const { children, tabId, ...restProps } = this.props;
    const rootProps = {
      'aria-labelledby': tabId,
      ...restProps
    };

    return (
      <Root {...rootProps}>
        <OverflowContainer>{children}</OverflowContainer>
      </Root>
    );
  }
}
