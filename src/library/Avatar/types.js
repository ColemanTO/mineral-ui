/* @flow */
import { SHAPE, SIZE } from './constants';

export type AvatarPropsT = {
  abbr?: string,
  background?: string,
  children: React$Node,
  color?: string,
  shape?: $Keys<typeof SHAPE>,
  size?: $Keys<typeof SIZE>
};

export type AvatarDefaultPropsT = {
  shape: $Keys<typeof SHAPE>,
  size: $Keys<typeof SIZE>
};
