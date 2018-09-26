/* @flow */
import { SHAPE, SIZE } from './constants';

export type AvatarPropsT = {
  abbr?: string,
  background?: string,
  children: React$Node,
  color?: string,
  shape?: $Values<typeof SHAPE>,
  size?: $Values<typeof SIZE>
};

export type AvatarDefaultPropsT = {
  shape: $Values<typeof SHAPE>,
  size: $Values<typeof SIZE>
};
