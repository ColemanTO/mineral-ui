/* @flow */
import { SPACING_SIZE, INSET_SPACING_SIZE } from './constants';

export type BoxProps = {
  breakpoints?: Array<number | string>,
  element?: string,
  height?: HeightOrWidthProp,
  inline?: boolean | Array<boolean | null>,
  margin?: SpacingProp,
  marginBottom?: SpacingProp,
  marginEnd?: SpacingProp,
  marginHorizontal?: SpacingProp,
  marginLeft?: SpacingProp,
  marginRight?: SpacingProp,
  marginStart?: SpacingProp,
  marginTop?: SpacingProp,
  marginVertical?: SpacingProp,
  padding?: InsetSpacingProp,
  paddingBottom?: SpacingProp,
  padddingEnd?: SpacingProp,
  paddingHorizontal?: SpacingProp,
  paddingLeft?: SpacingProp,
  paddingRight?: SpacingProp,
  padddingStart?: SpacingProp,
  paddingTop?: SpacingProp,
  paddingVertical?: SpacingProp,
  width?: HeightOrWidthProp
};

export type BoxDefaultProps = {
  element: string
};

export type SpacingStyles = {
  [string]: Array<SpacingValue> | SpacingValue
};

export type SpacingValue =
  | boolean
  | null
  | number
  | string
  | $Keys<typeof SPACING_SIZE>;

type HeightOrWidthProp = number | string | Array<number | string | null>;

type SpacingProp =
  | number
  | string
  | $Keys<typeof SPACING_SIZE>
  | Array<null | number | string | $Keys<typeof SPACING_SIZE>>;

type InsetSpacingProp =
  | number
  | string
  | $Keys<typeof INSET_SPACING_SIZE>
  | Array<null | number | string | $Keys<typeof INSET_SPACING_SIZE>>;
