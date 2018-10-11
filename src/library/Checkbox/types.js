/* @flow */
import { SIZE, LABEL_POSITION } from './constants';

export type CheckboxProps = {
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
  labelPosition?: $Keys<typeof LABEL_POSITION>,
  name?: string,
  onChange?: (event: SyntheticInputEvent<>) => void,
  onClick?: (event: SyntheticInputEvent<>) => void,
  required?: boolean,
  rootProps?: Object,
  size?: $Keys<typeof SIZE>,
  value?: string
};

export type CheckboxDefaultProps = {
  labelPosition: $Keys<typeof LABEL_POSITION>,
  size: $Keys<typeof SIZE>
};

export type CheckboxGroupProps = {
  checked?: Array<string>,
  children?: React$Node,
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  defaultChecked?: Array<string>,
  inline?: boolean,
  name: string,
  onChange?: (event: SyntheticEvent<>) => void,
  rootProps?: Object
};
