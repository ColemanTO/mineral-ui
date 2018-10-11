/* @flow */
import React from 'react';
import { MenuDivider as Root } from './styled';

import { menuDividerPropTypes } from './propTypes';
import type { MenuDividerProps } from './types';

const MenuDivider = (props: MenuDividerProps) => (
  <Root {...props} role="separator" />
);

MenuDivider.propTypes = menuDividerPropTypes;

export default MenuDivider;
