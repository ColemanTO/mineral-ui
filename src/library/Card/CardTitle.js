/* @flow */
import React, { Children, cloneElement } from 'react';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import {
  CardTitle as Root,
  CardTitleAvatar as Avatar,
  CardTitleInner as Inner,
  CardTitleSecondaryText as SecondaryText,
  CardTitleSubtitle as Subtitle,
  CardTitleTitle as Title,
  CardTitleTitleContent as TitleContent
} from './styled';

import { cardTitlePropTypes } from './propTypes';
import type { CardTitlePropsT } from './types';

const variantIcons = {
  danger: <IconDanger size="medium" />,
  success: <IconSuccess size="medium" />,
  warning: <IconWarning size="medium" />
};

export default function CardTitle(props: CardTitlePropsT) {
  const {
    actions,
    avatar,
    children,
    secondaryText,
    subtitle,
    variant,
    ...restProps
  } = props;
  const rootProps = {
    ...restProps
  };

  const secondaryComponent = actions ? (
    Children.map(actions, (action, index) =>
      cloneElement(action, { key: index })
    )
  ) : secondaryText ? (
    <SecondaryText>{secondaryText}</SecondaryText>
  ) : null;

  return (
    <Root {...rootProps}>
      {avatar && <Avatar subtitle={subtitle}>{avatar}</Avatar>}
      <Inner>
        <Title variant={variant}>
          {variant && variantIcons[variant]}
          <TitleContent actions={actions}>{children}</TitleContent>
          {secondaryComponent}
        </Title>
        {subtitle && <Subtitle avatar={avatar}>{subtitle}</Subtitle>}
      </Inner>
    </Root>
  );
}

CardTitle.propTypes = cardTitlePropTypes;
