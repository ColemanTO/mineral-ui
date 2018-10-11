/* @flow */
import {
  bool,
  func,
  number,
  node,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { PLACEMENT } from './constants';

import { menuItemsPropType, menuItemGroupsPropType } from '../Menu/propTypes';

export const dropdownPropTypes = {
  children: oneOfType([node, func]).isRequired,
  data: oneOfType([menuItemsPropType, menuItemGroupsPropType]).isRequired,
  defaultHighlightedIndex: number,
  defaultIsOpen: bool,
  disabled: bool,
  highlightedIndex: number,
  id: string,
  isOpen: bool,
  item: func,
  itemKey: string,
  menu: func,
  modifiers: object,
  onClose: func,
  onOpen: func,
  placement: oneOf(Object.keys(PLACEMENT)),
  usePortal: bool,
  wide: bool
};

export const dropdownContentPropTypes = {
  children: node.isRequired,
  id: string.isRequired,
  modifiers: object,
  placement: oneOf(Object.keys(PLACEMENT)),
  wide: bool
};
