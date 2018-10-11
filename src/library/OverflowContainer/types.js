/* @flow */
export type OverflowContainerProps = {
  children?: React$Node,
  containerRef?: (node: HTMLElement) => void,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean,
  tabIndex?: number | string
};

export type OverflowContainerState = {
  scrollable: boolean
};

export type OverflowContainerWithShadowsProps = {
  children?: React$Node,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean
};

export type OverflowContainerWithShadowsState = {
  hasShadowBottom: boolean,
  hasShadowLeft: boolean,
  hasShadowRight: boolean,
  hasShadowTop: boolean
};
