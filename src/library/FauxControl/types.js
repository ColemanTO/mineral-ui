/* @flow */
import { SIZE, VARIANT } from './constants';

export type FauxControlProps = {
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
  size?: $Keys<typeof SIZE>,
  suffix?: React$Node,
  variant?: $Keys<typeof VARIANT>
};

export type VariantIcons = {
  [key: $Keys<typeof VARIANT>]: React$Element<*>
};
