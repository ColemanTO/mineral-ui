/* @flow */
import React from 'react';
import Dropdown from '../Dropdown';
import IconMoreHoriz from '../Icon/IconMoreHoriz';
import { CardTitleMenuButton as MenuButton } from './styled';

import { cardTitleMenuPropTypes } from './propTypes';
import type { CardTitleMenuPropsT } from './types';

const CardTitleMenu = (props: CardTitleMenuPropsT) => {
  const { triggerTitle, ...restProps } = props;
  const rootProps = {
    placement: 'bottom-end',
    ...restProps
  };
  const buttonProps = {
    iconStart: <IconMoreHoriz title={triggerTitle} />,
    minimal: true
  };

  return (
    <Dropdown {...rootProps}>
      <MenuButton {...buttonProps} />
    </Dropdown>
  );
};

CardTitleMenu.defaultProps = {
  triggerTitle: 'Card actions'
};

CardTitleMenu.propTypes = cardTitleMenuPropTypes;

export default CardTitleMenu;
