/* @flow */
import { bool, element, func, node, object, oneOf } from 'prop-types';
import { SIZE, VARIANT } from './constants';

export const fauxControlPropTypes = {
  afterItems: node,
  beforeItems: node,
  children: node,
  control: func.isRequired,
  controlProps: object,
  disabled: bool,
  fauxControlRef: func,
  iconStart: element,
  iconEnd: element,
  prefix: node,
  readOnly: bool,
  size: oneOf(Object.values(SIZE)),
  suffix: node,
  variant: oneOf(Object.values(VARIANT))
};
