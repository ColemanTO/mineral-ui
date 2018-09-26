/* @flow */
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { MODE, SIZE, VARIANT } from './constants';

export const buttonGroupPropTypes = {
  'aria-label': string.isRequired,
  checked: oneOfType([number, arrayOf(number)]),
  children: node,
  defaultChecked: oneOfType([number, arrayOf(number)]),
  disabled: bool,
  fullWidth: bool,
  mode: oneOf(Object.values(MODE)),
  onChange: func,
  onClick: func,
  size: oneOf(Object.values(SIZE)),
  variant: oneOf(Object.values(VARIANT))
};
