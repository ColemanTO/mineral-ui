/* @flow */
import { SIZE, VARIANT } from './constants';

export type FauxControlPropsT = {
  afterItems?: React$Node,
  beforeItems?: React$Node,
  children?: React$Node,
  control: React$ComponentType<*>,
  controlProps?: Object,
  disabled?: boolean,
  fauxControlRef?: (node: ?React$Component<*, *>) => void,
  iconStart?: React$Element<*>,
  iconEnd?: React$Element<*>,
  prefix?: React$Node,
  readOnly?: boolean,
  size?: $Values<typeof SIZE>,
  suffix?: React$Node,
  variant?: $Values<typeof VARIANT>
};

export type VariantIconsT = {
  [key: $Values<typeof VARIANT>]: React$Element<*>
};
