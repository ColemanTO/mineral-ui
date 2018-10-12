/* @flow */
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type DialogProps = {
  actions?: Array<{
    text: string,
    size?: $Keys<typeof ACTIONS_SIZE>
  }>,
  appSelector?: string,
  'aria-label'?: string,
  children?: React$Node,
  closeButtonLabel?: string,
  closeOnClickOutside?: boolean,
  closeOnEscape?: boolean,
  disableFocusOnOpen?: boolean,
  disableFocusTrap?: boolean,
  hideOverlay?: boolean,
  id?: string,
  isOpen?: boolean,
  modeless?: boolean,
  onClose?: () => void,
  onOpen?: () => void,
  preventCloseButtonClose?: boolean,
  showCloseButton?: boolean,
  size?: $Keys<typeof SIZE>,
  title?: string | React$Element<*>,
  usePortal?: boolean,
  variant?: $Keys<typeof VARIANT>
};

export type DialogDefaultProps = {
  closeButtonLabel: string,
  closeOnClickOutside: boolean,
  closeOnEscape: boolean,
  size: $Keys<typeof SIZE>,
  usePortal: boolean
};

export type DialogState = {
  isExited: boolean,
  isExiting: boolean
};

export type DialogActionsProps = {
  children?: React$Element<*> | Array<React$Element<*>>,
  variant?: $Keys<typeof VARIANT>
};

export type DialogBodyProps = {
  children?: React$Node
};

export type DialogFooterProps = {
  children?: React$Node
};

export type DialogHeaderProps = {
  children?: React$Node,
  closeButton?: React$Node,
  titleProps?: Object
};

export type DialogTitleProps = {
  appearance?: $Keys<typeof APPEARANCE>,
  children: React$Node,
  element?: $Keys<typeof ELEMENT>,
  id?: string,
  theme: Object,
  variant?: $Keys<typeof VARIANT>
};

export type DialogTitleDefaultProps = {
  appearance: $Keys<typeof APPEARANCE>,
  element: $Keys<typeof ELEMENT>
};

export type DialogThemeFn = ComponentThemeFn<DialogTheme>;
export type DialogTheme = ComponentTheme<DialogThemeKeys>;
type DialogThemeKeys = {|
  Dialog_transitionDuration: ThemeValue,
  Dialog_zIndex: ThemeValue,
  DialogCloseButton_margin: ThemeValue,
  DialogContent_backgroundColor: ThemeValue,
  DialogContent_borderColor: ThemeValue,
  DialogContent_borderRadius: ThemeValue,
  DialogContent_boxShadow: ThemeValue,
  DialogContent_maxHeight: ThemeValue,
  DialogContent_maxHeight_small: ThemeValue,
  DialogContent_maxHeight_medium: ThemeValue,
  DialogContent_maxHeight_large: ThemeValue,
  DialogContent_maxWidth_small: ThemeValue,
  DialogContent_maxWidth_medium: ThemeValue,
  DialogContent_maxWidth_large: ThemeValue,
  DialogContent_minWidth: ThemeValue,
  DialogContent_offsetVertical: ThemeValue,
  DialogContent_width_small: ThemeValue,
  DialogContent_width_medium: ThemeValue,
  DialogContent_width_large: ThemeValue,
  DialogOverlay_backgroundColor: ThemeValue,
  DialogRow_fontSize: ThemeValue,
  DialogRow_paddingHorizontal: ThemeValue,
  DialogRow_marginVertical: ThemeValue
|};

export type DialogActionsThemeFn = ComponentThemeFn<DialogActionsTheme>;
export type DialogActionsTheme = ComponentTheme<DialogActionsThemeKeys>;
type DialogActionsThemeKeys = {|
  DialogActionsItem_margin: ThemeValue
|};

export type DialogBodyThemeFn = ComponentThemeFn<DialogBodyTheme>;
export type DialogBodyTheme = ComponentTheme<DialogBodyThemeKeys>;
type DialogBodyThemeKeys = {|
  DialogBody_outline_focus: ThemeValue,
  DialogBody_boxShadowBottom: ThemeValue,
  DialogBody_boxShadowLeft: ThemeValue,
  DialogBody_boxShadowRight: ThemeValue,
  DialogBody_boxShadowTop: ThemeValue
|};

export type DialogRowThemeFn = ComponentThemeFn<DialogRowTheme>;
export type DialogRowTheme = ComponentTheme<DialogRowThemeKeys>;
type DialogRowThemeKeys = {|
  DialogRow_fontSize: ThemeValue,
  DialogRow_paddingHorizontal: ThemeValue,
  DialogRow_marginVertical: ThemeValue
|};

export type DialogTitleThemeFn = ComponentThemeFn<DialogTitleTheme>;
export type DialogTitleTheme = ComponentTheme<DialogTitleThemeKeys>;
type DialogTitleThemeKeys = {|
  DialogTitle_color: ThemeValue,
  DialogTitle_fontSize: ThemeValue,
  DialogTitle_fontWeight: ThemeValue,
  DialogTitleIcon_margin: ThemeValue,
  DialogTitleIcon_size: ThemeValue
|};
