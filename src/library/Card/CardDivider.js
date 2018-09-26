/* @flow */
import React from 'react';
import { CardDivider as Root } from './styled';

import { cardDividerPropTypes } from './propTypes';
import type { CardDividerPropsT } from './types';

export default function CardDivider(props: CardDividerPropsT) {
  return <Root {...props} role="separator" />;
}

CardDivider.propTypes = cardDividerPropTypes;
