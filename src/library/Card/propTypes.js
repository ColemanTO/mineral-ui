/* @flow */
import {
  array,
  bool,
  element,
  func,
  node,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { VARIANT } from './constants';

export const cardPropTypes = {
  children: node.isRequired,
  onClick: func
};

export const cardActionsPropTypes = {
  children: node.isRequired
};

export const cardBlockPropTypes = {
  children: node.isRequired
};

export const cardDividerPropTypes = {};

export const cardFooterPropTypes = {
  children: node,
  defaultIsOpen: bool,
  expandable: bool,
  isOpen: bool,
  onClose: func,
  onOpen: func,
  title: oneOfType([string, element]),
  triggerTitle: func,
  variant: oneOf(Object.keys(VARIANT))
};

export const cardImagePropTypes = {};

export const cardStatusPropTypes = {
  status: string,
  variant: oneOf(Object.keys(VARIANT))
};

export const cardTitlePropTypes = {
  actions: node,
  avatar: oneOfType([string, element]),
  children: node.isRequired,
  secondaryText: oneOfType([string, element]),
  subtitle: node,
  variant: oneOf(Object.keys(VARIANT))
};

export const cardTitleMenuPropTypes = {
  data: array, // TODO: Items | ItemGroups,
  triggerTitle: string
};
