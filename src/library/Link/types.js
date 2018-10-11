/* @flow */
import { VARIANT } from './constants';

export type LinkProps = {
  children?: React$Node,
  href?: string,
  element?: $FlowFixMe, // Should allow string | React$ComponentType<*>
  variant?: $Keys<typeof VARIANT>
};
