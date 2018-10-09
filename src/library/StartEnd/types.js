/* @flow */
import { DIRECTION, PRIORITY } from './constants';

export type StartEndPropsT = {
  breakpoints?: Array<number | string>,
  children: React$Node,
  direction?:
    | $Values<typeof DIRECTION>
    | Array<$Values<typeof DIRECTION> | null>,
  justifyContent?: any,
  priority?: $Values<typeof PRIORITY>,
  wrap?: any
};
