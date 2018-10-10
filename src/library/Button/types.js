/* @flow */
import { SIZE, VARIANT } from './constants';

import type {
  ComponentThemeT,
  ComponentThemeFnT,
  ThemeValueT
} from '../themes/types';

export type ButtonT = React$ComponentType<ButtonPropsT>;

export type ButtonPropsT = {
  children?: React$Node,
  circular?: boolean,
  disabled?: boolean,
  element?: $FlowFixMe, // Should allow string | React$ComponentType<*>
  fullWidth?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  minimal?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  primary?: boolean,
  size?: $Keys<typeof SIZE>,
  type?: string,
  variant?: $Keys<typeof VARIANT>
};

export type ButtonDefaultPropsT = {
  element: $FlowFixMe, // Should allow string | React$ComponentType<*>
  size: $Keys<typeof SIZE>,
  type: string
};

export type ButtonThemeFnT = ComponentThemeFnT<ButtonThemeT>;
export type ButtonThemeT = ComponentThemeT<ButtonThemeKeysT>;
type ButtonThemeKeysT = {|
  Button_backgroundColor: ThemeValueT,
  Button_backgroundColor_active: ThemeValueT,
  Button_backgroundColor_focus: ThemeValueT,
  Button_backgroundColor_hover: ThemeValueT,
  Button_backgroundColor_minimal_active: ThemeValueT,
  Button_backgroundColor_minimal_hover: ThemeValueT,
  Button_backgroundColor_primary: ThemeValueT,
  Button_backgroundColor_primary_active: ThemeValueT,
  Button_backgroundColor_primary_focus: ThemeValueT,
  Button_backgroundColor_primary_hover: ThemeValueT,
  Button_borderColor: ThemeValueT,
  Button_borderColor_active: ThemeValueT,
  Button_borderColor_focus: ThemeValueT,
  Button_borderColor_hover: ThemeValueT,
  Button_borderRadius: ThemeValueT,
  Button_borderWidth: ThemeValueT,
  Button_boxShadow_focus: ThemeValueT,
  Button_color: ThemeValueT,
  Button_color_minimal: ThemeValueT,
  Button_color_primary: ThemeValueT,
  Button_fontWeight: ThemeValueT,
  Button_paddingHorizontal: ThemeValueT,
  Button_paddingIconOnly_small: ThemeValueT,
  Button_paddingIconOnly_medium: ThemeValueT,
  Button_paddingIconOnly_large: ThemeValueT,
  Button_paddingIconOnly_jumbo: ThemeValueT,
  Button_height_small: ThemeValueT,
  Button_height_medium: ThemeValueT,
  Button_height_large: ThemeValueT,
  Button_height_jumbo: ThemeValueT,
  ButtonContent_fontSize: ThemeValueT,
  ButtonContent_fontSize_small: ThemeValueT,
  ButtonIcon_color: ThemeValueT,
  ButtonIcon_margin: ThemeValueT
|};
