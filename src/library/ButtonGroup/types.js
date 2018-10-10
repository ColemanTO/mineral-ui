/* @flow */
import { MODE, SIZE, VARIANT } from './constants';

import type {
  ComponentThemeT,
  ComponentThemeFnT,
  ThemeValueT
} from '../themes/types';

export type ButtonGroupPropsT = {
  'aria-label': string,
  checked?: number | Array<number>,
  children: React$Node,
  defaultChecked?: number | Array<number>,
  disabled?: boolean,
  fullWidth?: boolean,
  mode?: $Keys<typeof MODE>,
  onChange?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  size?: $Keys<typeof SIZE>,
  variant?: $Keys<typeof VARIANT>
};

export type ButtonGroupStateT = {
  checked: Set<number>
};

export type ButtonGroupThemeFnT = ComponentThemeFnT<ButtonGroupThemeT>;
export type ButtonGroupThemeT = ComponentThemeT<ButtonGroupThemeKeysT>;
type ButtonGroupThemeKeysT = {|
  ButtonGroupButton_backgroundColor_checkedDisabled: ThemeValueT,
  ButtonGroupButton_border_disabled: ThemeValueT,
  ButtonGroupButton_borderColor_active: ThemeValueT,
  ButtonGroupButton_borderColor_hover: ThemeValueT,
  ButtonGroupButton_borderStartColor: ThemeValueT,
  ButtonGroupButton_borderStartColor_checked: ThemeValueT,
  ButtonGroupButton_color_checkedDisabled: ThemeValueT
|};
