/* @flow */
import { VARIANT } from './constants';

export type FormFieldProps = {
  caption?: string | React$Element<*>,
  children?: React$Node,
  className?: string,
  hideLabel?: boolean,
  id?: string,
  input?: React$ComponentType<*>,
  rootProps?: Object,
  label: string | React$Element<*>,
  required?: boolean,
  requiredText?: string | React$Element<*>,
  secondaryText?: string | React$Element<*>,
  variant?: $Keys<typeof VARIANT>
};

export type FormFieldDefaultProps = {
  requiredText: string | React$Element<*>
};

export type FormFieldDividerProps = Object;

export type FormFieldsetProps = {
  children?: React$Node,
  disabled?: boolean,
  legend?: string | React$Element<*>
};
