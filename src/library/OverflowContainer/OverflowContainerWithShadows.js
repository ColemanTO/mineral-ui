/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import {
  OverflowContainerWithShadows as Root,
  OverflowContainerWithShadowsScroller
} from './styled';

import type {
  OverflowContainerWithShadowsProps,
  OverflowContainerWithShadowsState
} from './types';

export default class OverflowContainerWithShadows extends Component<
  OverflowContainerWithShadowsProps,
  OverflowContainerWithShadowsState
> {
  container: ?HTMLElement;

  setContainerRef = (node: HTMLElement) => {
    this.container = node;
  };

  componentDidMount() {
    this.applyShadows(this.container);
  }

  render() {
    const {
      children,
      hideScrollbars,
      scrollX,
      scrollY,
      ...restProps
    } = this.props;
    const isScrollable = Boolean(
      this.state &&
        Object.keys(this.state).filter((key) => this.state[key]).length
    );
    const rootProps = {
      ...this.state,
      ...restProps
    };
    const scrollerProps = {
      hideScrollbars,
      containerRef: this.setContainerRef,
      onScroll: (scrollX || scrollY) && this.handleScroll,
      scrollX,
      scrollY,
      // Set tabIndex when scrollable so user can scroll with keyboard
      tabIndex: isScrollable ? 0 : undefined
    };

    return (
      <Root {...rootProps}>
        <OverflowContainerWithShadowsScroller {...scrollerProps}>
          {children}
        </OverflowContainerWithShadowsScroller>
      </Root>
    );
  }

  handleScroll = (event: SyntheticEvent<HTMLElement>) => {
    this.applyShadows(event.currentTarget);
  };

  applyShadows = debounce(
    (element: HTMLElement) => {
      const { scrollX, scrollY } = this.props;
      if (scrollX) {
        this.setState({
          hasShadowLeft: element.scrollLeft > 0,
          hasShadowRight:
            element.scrollLeft + element.clientWidth < element.scrollWidth
        });
      }
      if (scrollY) {
        this.setState({
          hasShadowTop: element.scrollTop > 0,
          hasShadowBottom:
            element.scrollTop + element.clientHeight < element.scrollHeight
        });
      }
    },
    100,
    { leading: true }
  );
}
