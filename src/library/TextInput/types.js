/* @flow */
import { SIZE, TYPE, VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type TextInputProps = {
  className?: string,
  defaultValue?: string,
  disabled?: boolean,
  htmlSize?: number | string,
  iconStart?: React$Element<*>,
  iconEnd?: React$Element<*>,
  inputRef?: (node: ?React$Component<*, *>) => void,
  rootProps?: Object,
  invalid?: boolean,
  onChange?: (event: SyntheticEvent<>) => void,
  prefix?: string | React$Element<*>,
  readOnly?: boolean,
  required?: boolean,
  size?: $Keys<typeof SIZE>,
  suffix?: string | React$Element<*>,
  type?: $Keys<typeof TYPE>,
  value?: string,
  variant?: $Keys<typeof VARIANT>
};

export type TextInputDefaultProps = {
  size: $Keys<typeof SIZE>,
  type: $Keys<typeof TYPE>
};

export type TextInputThemeFn = ComponentThemeFn<TextInputTheme>;
export type TextInputTheme = ComponentTheme<TextInputThemeKeys>;
type TextInputThemeKeys = {|
  TextInput_backgroundColor: ThemeValue,
  TextInput_borderColor: ThemeValue,
  TextInput_borderColor_active: ThemeValue,
  TextInput_borderColor_focus: ThemeValue,
  TextInput_borderColor_hover: ThemeValue,
  TextInput_borderRadius: ThemeValue,
  TextInput_borderWidth: ThemeValue,
  TextInput_boxShadow_active: ThemeValue,
  TextInput_boxShadow_focus: ThemeValue,
  TextInput_color: ThemeValue,
  TextInput_color_placeholder: ThemeValue,
  TextInput_color_readOnly: ThemeValue,
  TextInput_fontSize: ThemeValue,
  TextInput_fontSize_small: ThemeValue,
  TextInput_height_small: ThemeValue,
  TextInput_height_medium: ThemeValue,
  TextInput_height_large: ThemeValue,
  TextInput_height_jumbo: ThemeValue,
  TextInput_paddingHorizontal: ThemeValue,
  TextInput_paddingHorizontal_small: ThemeValue,
  TextInputIcon_color: ThemeValue,
  TextInputIcon_marginHorizontal: ThemeValue
|};
