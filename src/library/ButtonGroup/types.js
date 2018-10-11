/* @flow */
import { MODE, SIZE, VARIANT } from './constants';

export type ButtonGroupPropsT = {
  'aria-label': string,
  checked?: number | Array<number>,
  children: React$Node,
  defaultChecked?: number | Array<number>,
  disabled?: boolean,
  fullWidth?: boolean,
  mode?: $Keys<typeof MODE>,
  onChange?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  size?: $Keys<typeof SIZE>,
  variant?: $Keys<typeof VARIANT>
};

export type ButtonGroupStateT = {
  checked: Set<number>
};
