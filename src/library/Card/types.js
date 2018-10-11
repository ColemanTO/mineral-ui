/* @flow */
import { VARIANT } from './constants';

import type { Items, ItemGroups } from '../Menu/Menu';

export type CardProps = {
  children: React$Node,
  onClick?: (event: SyntheticEvent<>) => void
};

export type CardActionsProps = {
  children: React$Node
};

export type CardBlockProps = {
  children: React$Node
};

export type CardDividerProps = {};

export type CardFooterProps = {
  children?: React$Node,
  defaultIsOpen?: boolean,
  expandable?: boolean,
  isOpen?: boolean,
  onClose?: (event: SyntheticEvent<>) => void,
  onOpen?: (event: SyntheticEvent<>) => void,
  title?: string | React$Element<*>,
  triggerTitle?: (isOpen: boolean) => string,
  variant?: $Keys<typeof VARIANT>
};

export type CardFooterDefaultProps = {
  triggerTitle: (isOpen: boolean) => string
};

export type CardFooterState = {
  isOpen?: boolean
};

export type CardImageProps = {};

export type CardStatusProps = {
  children: string,
  variant: $Keys<typeof VARIANT>
};

export type CardTitleProps = {
  actions?: React$Node,
  avatar?: string | React$Element<*>,
  children: React$Node,
  secondaryText?: string | React$Element<*>,
  subtitle?: React$Node,
  variant?: $Keys<typeof VARIANT>
};

export type CardTitleMenuProps = {
  data?: Items | ItemGroups,
  triggerTitle?: string
};

export type CardTitleMenuDefaultProps = {
  triggerTitle?: string
};
