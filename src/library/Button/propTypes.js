/* @flow */
import {
  bool,
  element,
  func,
  node,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { SIZE, VARIANT } from './constants';

export const buttonPropTypes = {
  children: node,
  circular: bool,
  disabled: bool,
  element: oneOfType([string, func]),
  fullWidth: bool,
  iconEnd: element,
  iconStart: element,
  minimal: bool,
  onClick: func,
  primary: bool,
  size: oneOf(Object.values(SIZE)),
  type: string,
  variant: oneOf(Object.values(VARIANT))
};
