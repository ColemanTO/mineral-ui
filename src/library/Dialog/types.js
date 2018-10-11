/* @flow */
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

export type DialogPropsT = {
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

export type DialogDefaultPropsT = {
  closeButtonLabel: string,
  closeOnClickOutside: boolean,
  closeOnEscape: boolean,
  size: $Keys<typeof SIZE>,
  usePortal: boolean
};

export type DialogStateT = {
  isExited: boolean,
  isExiting: boolean
};

export type DialogActionsPropsT = {
  /** Rendered [Button(s)](/components/button) */
  children?: React$Element<*> | Array<React$Element<*>>,
  /** Available variants */
  variant?: $Keys<typeof VARIANT>
};

export type DialogBodyPropsT = {
  /** Rendered DialogBody content */
  children?: React$Node
};

export type DialogFooterPropsT = {
  /** Rendered DialogFooter content */
  children?: React$Node
};

export type DialogHeaderPropsT = {
  /**
   * Rendered Dialog title; use of [DialogTitle](/components/dialog-title) is
   * recommended
   */
  children?: React$Node,
  /** Rendered close button */
  closeButton?: React$Node,
  /** @Private */
  titleProps?: Object
};

export type DialogTitlePropsT = {
  /** Available styles */
  appearance?: $Keys<typeof APPEARANCE>,
  /** Rendered DialogTitle content */
  children: React$Node,
  /** Available HTML elements; styles can be overridden with `appearance` */
  element?: $Keys<typeof ELEMENT>,
  /** Id of the DialogTitle */
  id?: string,
  /** @Private App theme; see [Theming](/theming) */
  theme: Object,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export type DialogTitleDefaultPropsT = {
  appearance: $Keys<typeof APPEARANCE>,
  element: $Keys<typeof ELEMENT>
};
