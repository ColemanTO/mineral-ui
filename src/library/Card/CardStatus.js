/* @flow */
import React from 'react';
import IconDangerSimple from '../Icon/IconDangerSimple';
import IconSuccessSimple from '../Icon/IconSuccessSimple';
import IconWarningSimple from '../Icon/IconWarningSimple';
import { CardStatus as Root } from './styled';

import { cardStatusPropTypes } from './propTypes';
import type { CardStatusPropsT } from './types';

const statusIcons = {
  danger: <IconDangerSimple />,
  success: <IconSuccessSimple />,
  warning: <IconWarningSimple />
};

export default function CardStatus(props: CardStatusPropsT) {
  const { children, variant, ...restProps } = props;
  const rootProps = {
    variant,
    ...restProps
  };
  const icon = statusIcons[variant];

  return (
    <Root {...rootProps}>
      {icon}
      {children}
    </Root>
  );
}

CardStatus.propTypes = cardStatusPropTypes;
