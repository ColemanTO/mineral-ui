/* @flow */
import { PLACEMENT } from './constants';

import type { MenuItems, MenuItemGroups } from '../Menu/types';

type Placement = $Keys<typeof PLACEMENT>;

export type DropdownProps = {
  children: React$Node | DropdownRenderFn,
  data: MenuItems | MenuItemGroups,
  defaultHighlightedIndex?: number,
  defaultIsOpen?: boolean,
  disabled?: boolean,
  highlightedIndex?: number,
  id?: string,
  isOpen?: boolean,
  item?: DropdownRenderFn,
  itemKey?: string,
  menu?: DropdownRenderFn,
  modifiers?: Object,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  placement?: Placement,
  usePortal?: boolean,
  wide?: boolean
};

export type DropdownState = {
  highlightedIndex: ?number,
  isOpen: boolean
};

export type DropdownDefaultProps = {
  itemKey: string,
  placement: Placement
};

type DropdownHelpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

export type DropdownStateAndHelpers = {
  state: DropdownState,
  helpers: DropdownHelpers
};

export type DropdownPropGetter = (props?: Object) => Object;

export type DropdownRenderFn = (props?: DropdownRenderProps) => React$Node;

type DropdownRenderProps = {
  props: Object
} & DropdownStateAndHelpers;

export type DropdownContentProps = {
  children: React$Node,
  id: string,
  modifiers?: Object,
  placement?: Placement,
  wide?: boolean
};
