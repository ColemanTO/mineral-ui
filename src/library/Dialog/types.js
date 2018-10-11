/* @flow */
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

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
