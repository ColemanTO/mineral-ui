/* @flow */
import { SHAPE, SIZE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type AvatarProps = {
  abbr?: string,
  background?: string,
  children: React$Node,
  color?: string,
  shape?: $Keys<typeof SHAPE>,
  size?: $Keys<typeof SIZE>
};

export type AvatarDefaultProps = {
  shape: $Keys<typeof SHAPE>,
  size: $Keys<typeof SIZE>
};

export type AvatarThemeFn = ComponentThemeFn<AvatarTheme>;
export type AvatarTheme = ComponentTheme<AvatarThemeKeys>;
type AvatarThemeKeys = {|
  Avatar_fontSize_small: ThemeValue,
  Avatar_fontSize_medium: ThemeValue,
  Avatar_fontSize_large: ThemeValue,
  Avatar_fontSize_jumbo: ThemeValue,
  Avatar_fontWeight: ThemeValue,
  Avatar_size_small: ThemeValue,
  Avatar_size_medium: ThemeValue,
  Avatar_size_large: ThemeValue,
  Avatar_size_jumbo: ThemeValue
|};
