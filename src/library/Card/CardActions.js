/* @flow */
import React, { Children, cloneElement } from 'react';
import Button from '../Button';
import { CardAction as Action, CardActions as Root } from './styled';

import { cardActionsPropTypes } from './propTypes';
import type { CardActionsPropsT } from './types';

export default function CardActions(props: CardActionsPropsT) {
  const { children, ...restProps } = props;
  const actions = Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { size: 'medium' });
    }
    return <Action key={index}>{child}</Action>;
  });

  return <Root {...restProps}>{actions}</Root>;
}

CardActions.propTypes = cardActionsPropTypes;
