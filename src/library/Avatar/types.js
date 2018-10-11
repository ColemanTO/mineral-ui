/* @flow */
import { SHAPE, SIZE } from './constants';

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
