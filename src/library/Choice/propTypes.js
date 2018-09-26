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
import { LABEL_POSITION, SIZE, TYPE } from './constants';

export const choicePropTypes = {
  checked: bool,
  className: string,
  labelPosition: oneOf(Object.values(LABEL_POSITION)),
  defaultChecked: bool,
  disabled: bool,
  justify: bool,
  iconChecked: element.isRequired,
  inputRef: func,
  rootProps: object,
  hideLabel: bool,
  invalid: bool,
  label: oneOfType([string, element]).isRequired,
  name: string,
  onChange: func,
  required: bool,
  size: oneOf(Object.values(SIZE)),
  type: oneOf(Object.values(TYPE)).isRequired,
  value: string
};

export const choiceGroupPropTypes = {
  checked: oneOfType([string, arrayOf(string)]),
  children: node,
  data: arrayOf(
    shape({
      label: oneOfType([string, element]),
      value: string
    })
  ),
  defaultChecked: oneOfType([string, arrayOf(string)]),
  inline: bool,
  input: func,
  invalid: bool,
  name: string.isRequired,
  onChange: func,
  required: bool,
  role: string,
  rootProps: object,
  size: oneOf(Object.values(SIZE)),
  type: oneOf(Object.values(TYPE)).isRequired
};
