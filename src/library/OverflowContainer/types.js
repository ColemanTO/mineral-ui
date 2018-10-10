/* @flow */
export type OverflowContainerPropsT = {
  children?: React$Node,
  containerRef?: (node: HTMLElement) => void,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean,
  tabIndex?: number | string
};

export type OverflowContainerStateT = {
  scrollable: boolean
};

export type OverflowContainerWithShadowsPropsT = {
  children?: React$Node,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean
};

export type OverflowContainerWithShadowsStateT = {
  hasShadowBottom: boolean,
  hasShadowLeft: boolean,
  hasShadowRight: boolean,
  hasShadowTop: boolean
};
