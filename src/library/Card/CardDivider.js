/* @flow */
import React from 'react';
import { CardDivider as Root } from './styled';

import { cardDividerPropTypes } from './propTypes';
import type { CardDividerProps } from './types';

export default function CardDivider(props: CardDividerProps) {
  return <Root {...props} role="separator" />;
}

CardDivider.propTypes = cardDividerPropTypes;
