/* @flow */
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

type StringOrArrayOfStringsT<T> = $Keys<T> | Array<$Keys<T> | null>;

type AlignItemsT = StringOrArrayOfStringsT<typeof ALIGN_ITEMS>;
type GutterWidthT = $Keys<typeof GUTTER_WIDTH> | number | string;

export type GridPropsT = {
  alignItems?: AlignItemsT,
  breakpoints?: Array<number | string>,
  children: React$Node,
  columns?: number,
  gutterWidth?: GutterWidthT
};

export type GridDefaultPropsT = {
  alignItems: AlignItemsT,
  columns: number,
  gutterWidth: $Keys<typeof GUTTER_WIDTH> | number | string
};

export type GridItemPropsT = {
  span?: number | Array<number | null>
};
