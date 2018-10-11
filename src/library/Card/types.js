/* @flow */
import { VARIANT } from './constants';

import type { Items, ItemGroups } from '../Menu/Menu';

export type CardPropsT = {
  children: React$Node,
  onClick?: (event: SyntheticEvent<>) => void
};

export type CardActionsPropsT = {
  children: React$Node
};

export type CardBlockPropsT = {
  children: React$Node
};

export type CardDividerPropsT = {};

export type CardFooterPropsT = {
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

export type CardFooterDefaultPropsT = {
  triggerTitle: (isOpen: boolean) => string
};

export type CardFooterStateT = {
  isOpen?: boolean
};

export type CardImagePropsT = {};

export type CardStatusPropsT = {
  children: string,
  variant: $Keys<typeof VARIANT>
};

export type CardTitlePropsT = {
  actions?: React$Node,
  avatar?: string | React$Element<*>,
  children: React$Node,
  secondaryText?: string | React$Element<*>,
  subtitle?: React$Node,
  variant?: $Keys<typeof VARIANT>
};

export type CardTitleMenuPropsT = {
  data?: Items | ItemGroups,
  triggerTitle?: string
};

export type CardTitleMenuDefaultPropsT = {
  triggerTitle?: string
};
