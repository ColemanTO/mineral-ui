/* @flow */
import { MODE, SIZE, VARIANT } from './constants';

export type ButtonGroupPropsT = {
  'aria-label': string,
  checked?: number | Array<number>,
  children: React$Node,
  defaultChecked?: number | Array<number>,
  disabled?: boolean,
  fullWidth?: boolean,
  mode?: $Values<typeof MODE>,
  onChange?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  size?: $Values<typeof SIZE>,
  variant?: $Values<typeof VARIANT>
};

export type ButtonGroupStateT = {
  checked: Set<number>
};
