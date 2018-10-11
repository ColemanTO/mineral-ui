/* @flow */
import { SPACING_SIZE, INSET_SPACING_SIZE } from './constants';

export type BoxPropsT = {
  breakpoints?: Array<number | string>,
  element?: string,
  height?: HeightOrWidthPropT,
  inline?: boolean | Array<boolean | null>,
  margin?: SpacingPropT,
  marginBottom?: SpacingPropT,
  marginEnd?: SpacingPropT,
  marginHorizontal?: SpacingPropT,
  marginLeft?: SpacingPropT,
  marginRight?: SpacingPropT,
  marginStart?: SpacingPropT,
  marginTop?: SpacingPropT,
  marginVertical?: SpacingPropT,
  padding?: InsetSpacingPropT,
  paddingBottom?: SpacingPropT,
  padddingEnd?: SpacingPropT,
  paddingHorizontal?: SpacingPropT,
  paddingLeft?: SpacingPropT,
  paddingRight?: SpacingPropT,
  padddingStart?: SpacingPropT,
  paddingTop?: SpacingPropT,
  paddingVertical?: SpacingPropT,
  width?: HeightOrWidthPropT
};

export type BoxDefaultPropsT = {
  element: string
};

export type SpacingStylesT = {
  [string]: Array<SpacingValueT> | SpacingValueT
};

export type SpacingValueT =
  | boolean
  | null
  | number
  | string
  | $Keys<typeof SPACING_SIZE>;

type HeightOrWidthPropT = number | string | Array<number | string | null>;

type SpacingPropT =
  | number
  | string
  | $Keys<typeof SPACING_SIZE>
  | Array<null | number | string | $Keys<typeof SPACING_SIZE>>;

type InsetSpacingPropT =
  | number
  | string
  | $Keys<typeof INSET_SPACING_SIZE>
  | Array<null | number | string | $Keys<typeof INSET_SPACING_SIZE>>;
