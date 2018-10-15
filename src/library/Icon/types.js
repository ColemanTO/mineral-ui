/* @flow */
import { SIZE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type IconProps = {
  children?: React$Node,
  color?: string,
  rtl?: boolean,
  size?: $Keys<typeof SIZE> | string,
  title?: string
};

export type IconDefaultProps = {
  size: $Keys<typeof SIZE> | string
};

export type IconThemeFn = ComponentThemeFn<IconTheme>;
export type IconTheme = ComponentTheme<IconThemeKeys>;
type IconThemeKeys = {|
  Icon_fill: ThemeValue,
  Icon_size_small: ThemeValue,
  Icon_size_medium: ThemeValue,
  Icon_size_large: ThemeValue
|};
