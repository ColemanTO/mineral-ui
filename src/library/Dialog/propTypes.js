/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

export const dialogPropTypes = {
  actions: arrayOf(
    shape({
      text: string.isRequired,
      size: oneOf(Object.values(ACTIONS_SIZE))
    })
  ),
  appSelector: string,
  'aria-label': string,
  children: node,
  closeButtonLabel: string,
  closeOnEscape: bool,
  closeOnClickOutside: bool,
  disableFocusOnOpen: bool,
  disableFocusTrap: bool,
  hideOverlay: bool,
  id: string,
  isOpen: bool,
  modeless: bool,
  onClose: func,
  onOpen: func,
  preventCloseButtonClose: bool,
  showCloseButton: bool,
  size: oneOf(Object.values(SIZE)),
  title: oneOfType([string, element]),
  usePortal: bool,
  variant: oneOf(Object.values(VARIANT))
};

export const dialogActionsPropTypes = {
  children: oneOfType([element, arrayOf(element)]),
  variant: oneOf(Object.values(VARIANT))
};

export const dialogBodyPropTypes = {
  children: node
};

export const dialogFooterPropTypes = {
  children: node
};

export const dialogHeaderPropTypes = {
  children: node,
  closeButton: node
};

export const dialogTitlePropTypes = {
  appearance: oneOf(Object.values(APPEARANCE)),
  children: node.isRequired,
  element: oneOf(Object.values(ELEMENT)),
  id: string,
  variant: oneOf(Object.values(VARIANT))
};
