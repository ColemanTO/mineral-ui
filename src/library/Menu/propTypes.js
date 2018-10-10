/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  oneOf,
  shape,
  string
} from 'prop-types';
import { VARIANT } from './constants';

export const itemPropType = shape({
  iconEnd: element,
  iconStart: element,
  disabled: bool,
  divider: bool,
  onClick: func,
  render: func,
  secondaryText: node,
  text: node,
  value: string,
  variant: oneOf(Object.values(VARIANT))
});

export const itemGroupPropType = arrayOf(itemPropType);
