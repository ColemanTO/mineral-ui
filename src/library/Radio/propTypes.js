/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { LABEL_POSITION, SIZE } from './constants';

export const radioPropTypes = {
  checked: bool,
  className: string,
  defaultChecked: bool,
  disabled: bool,
  hideLabel: bool,
  inputRef: func,
  invalid: bool,
  justify: bool,
  label: oneOfType([string, element]),
  labelPosition: oneOf(Object.keys(LABEL_POSITION)),
  name: string,
  onChange: func,
  required: bool,
  rootProps: object,
  size: oneOf(Object.keys(SIZE)),
  value: string
};

export const radioGroupPropTypes = {
  checked: string,
  children: node,
  data: arrayOf(
    shape({
      label: oneOfType([string, element]),
      value: string
    })
  ),
  defaultChecked: string,
  inline: bool,
  name: string,
  onChange: func,
  rootProps: object
};
