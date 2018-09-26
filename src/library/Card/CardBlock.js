/* @flow */
import React from 'react';
import { CardBlock as Root, CardBlockInner as Inner } from './styled';

import { cardBlockPropTypes } from './propTypes';
import type { CardBlockPropsT } from './types';

export default function CardBlock(props: CardBlockPropsT) {
  const { children, ...restProps } = props;

  return (
    <Root {...restProps}>
      <Inner>{children}</Inner>
    </Root>
  );
}

CardBlock.propTypes = cardBlockPropTypes;
