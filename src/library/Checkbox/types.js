/* @flow */
import { SIZE, LABEL_POSITION } from './constants';

export type CheckboxPropsT = {
  checked?: boolean,
  className?: string,
  defaultChecked?: boolean,
  defaultIndeterminate?: boolean,
  disabled?: boolean,
  hideLabel?: boolean,
  indeterminate?: boolean,
  inputRef?: (node: ?HTMLInputElement) => void,
  invalid?: boolean,
  justify?: boolean,
  label: string | React$Element<*>,
  labelPosition?: $Values<typeof LABEL_POSITION>,
  name?: string,
  onChange?: (event: SyntheticInputEvent<>) => void,
  onClick?: (event: SyntheticInputEvent<>) => void,
  required?: boolean,
  rootProps?: Object,
  size?: $Values<typeof SIZE>,
  value?: string
};

export type CheckboxDefaultPropsT = {
  labelPosition: string,
  size: $Values<typeof SIZE>
};

export type CheckboxGroupPropsT = {
  checked?: Array<string>,
  children?: React$Node,
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  defaultChecked?: Array<string>,
  inline?: boolean,
  name: string,
  onChange?: (event: SyntheticEvent<>) => void,
  rootProps?: Object
};
