/* @flow */
import React from 'react';
import { CardImage as Root } from './styled';

import { cardImagePropTypes } from './propTypes';
import type { CardImageProps } from './types';

export default function CardImage(props: CardImageProps) {
  return <Root {...props} />;
}

CardImage.propTypes = cardImagePropTypes;
