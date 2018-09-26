/* @flow */
import { SIZE, VARIANT } from './constants';

export type ButtonPropsT = {
  children?: React$Node,
  circular?: boolean,
  disabled?: boolean,
  element?: $FlowFixMe, // Should allow string | React$ComponentType<*>
  fullWidth?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  minimal?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  primary?: boolean,
  size?: $Values<typeof SIZE>,
  type?: string,
  variant?: $Values<typeof VARIANT>
};

export type ButtonDefaultPropsT = {
  element: $FlowFixMe, // Should allow string | React$ComponentType<*>
  size: $Values<typeof SIZE>,
  type: string
};
