/* @flow */
import { VARIANT } from './constants';

export type MenuProps = {
  children?: React$Node,
  data?: MenuItems | MenuItemGroups,
  highlightedIndex?: number,
  item?: MenuRenderFn,
  itemKey?: string
};

export type MenuItemType = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: MenuRenderFn,
  secondaryText?: React$Node,
  text?: React$Node,
  value?: string,
  variant?: $Keys<typeof VARIANT>
};
export type MenuItems = Array<MenuItemType>;
export type MenuItemGroup = { items: Array<MenuItemType>, title?: React$Node };
export type MenuItemGroups = Array<MenuItemGroup>;

export type MenuPropGetter = (props?: Object) => Object;

export type MenuRenderFn = (props?: MenuRenderProps) => React$Node;

type MenuRenderProps = {
  props: Object
};

export type MenuDividerProps = Object;

export type MenuGroupProps = {
  children?: React$Node,
  title?: React$Node
};

export type MenuGroupTitleProps = Object;

export type MenuItemProps = {
  children?: React$Node,
  disabled?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  index?: number,
  isHighlighted?: boolean,
  item?: MenuItemType,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: MenuItemRenderFn,
  secondaryText?: React$Node,
  variant?: $Keys<typeof VARIANT>
};

export type MenuItemPropGetter = (props?: Object) => Object;

type MenuItemRenderFn = (props?: MenuItemRenderProps) => React$Node;

type MenuItemRenderProps = {
  props: Object
};
