/* @flow */
import { LABEL_POSITION, SIZE, TYPE } from './constants';

export type ChoiceProps = {
  checked?: boolean,
  className?: string,
  labelPosition?: $Keys<typeof LABEL_POSITION>,
  defaultChecked?: boolean,
  disabled?: boolean,
  justify?: boolean,
  iconChecked: React$Element<*>,
  inputRef?: (node: ?HTMLInputElement) => void,
  rootProps?: Object,
  hideLabel?: boolean,
  invalid?: boolean,
  label: string | React$Element<*>,
  name?: string,
  onChange?: (event: SyntheticInputEvent<>) => void,
  required?: boolean,
  size?: $Keys<typeof SIZE>,
  type: $Keys<typeof TYPE>,
  value?: string
};

export type ChoiceDefaultProps = {
  labelPosition: $Keys<typeof LABEL_POSITION>,
  size: $Keys<typeof SIZE>
};

export type ChoiceGroupProps = {
  checked?: string | Array<string>,
  children?: React$Node,
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  defaultChecked?: string | Array<string>,
  inline?: boolean,
  input?: React$ComponentType<*>,
  invalid?: boolean,
  name: string,
  onChange?: (event: SyntheticEvent<>) => void,
  required?: boolean,
  role?: string,
  rootProps?: Object,
  size?: $Keys<typeof SIZE>,
  type: $Keys<typeof TYPE>
};

export type ChoiceGroupDefaultProps = {
  role: string,
  size: $Keys<typeof SIZE>
};
