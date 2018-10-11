/* @flow */
import React from 'react';
import { MenuGroupTitle as Root } from './styled';

import { menuGroupTitlePropTypes } from './propTypes';
import type { MenuGroupTitleProps } from './types';

const MenuGroupTitle = (props: MenuGroupTitleProps) => <Root {...props} />;

MenuGroupTitle.propTypes = menuGroupTitlePropTypes;

export default MenuGroupTitle;
