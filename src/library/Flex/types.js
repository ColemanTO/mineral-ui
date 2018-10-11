/* @flow */
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from './constants';

type StringOrArrayOfStringsT<T> = $Keys<T> | Array<$Keys<T> | null>;

type AlignItemsT = StringOrArrayOfStringsT<typeof ALIGN_ITEMS>;
type DirectionT = StringOrArrayOfStringsT<typeof DIRECTION>;
type GutterWidthT = $Keys<typeof GUTTER_WIDTH> | number | string;
type JustifyContentT = StringOrArrayOfStringsT<typeof JUSTIFY_CONTENT>;

export type FlexPropsT = {
  alignItems?: AlignItemsT,
  breakpoints?: Array<number | string>,
  children: React$Node,
  direction?: DirectionT,
  gutterWidth?: GutterWidthT,
  justifyContent?: JustifyContentT,
  wrap?: boolean | Array<boolean | null>
};

export type FlexDefaultPropsT = {
  alignItems: AlignItemsT,
  direction: DirectionT,
  gutterWidth: $Keys<typeof GUTTER_WIDTH> | number | string,
  justifyContent: JustifyContentT
};

type GrowOrShrinkT = 0 | 1 | number | Array<0 | 1 | number | null>;

export type FlexItemPropsT = {
  alignSelf?: StringOrArrayOfStringsT<typeof ALIGN_SELF>,
  breakpoints?: Array<number | string>,
  flex?: boolean,
  grow?: GrowOrShrinkT,
  shrink?: GrowOrShrinkT
};

export type FlexItemDefaultPropsT = {
  grow: GrowOrShrinkT,
  shrink: GrowOrShrinkT
};

export type StyleValueT = boolean | null | number | string;
