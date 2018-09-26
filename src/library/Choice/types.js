/* @flow */
import { LABEL_POSITION, SIZE, TYPE } from './constants';

export type ChoicePropsT = {
  checked?: boolean,
  className?: string,
  labelPosition?: $Values<typeof LABEL_POSITION>,
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
  size?: $Values<typeof SIZE>,
  type: $Values<typeof TYPE>,
  value?: string
};

export type ChoiceDefaultPropsT = {
  labelPosition: $Values<typeof LABEL_POSITION>,
  size: $Values<typeof SIZE>
};

export type ChoiceGroupPropsT = {
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
  size?: $Values<typeof SIZE>,
  type: $Values<typeof TYPE>
};

export type ChoiceGroupDefaultPropsT = {
  role: string,
  size: $Values<typeof SIZE>
};
