/* @flow */
import React from 'react';
import { CardImage as Root } from './styled';

import { cardImagePropTypes } from './propTypes';
import type { CardImagePropsT } from './types';

export default function CardImage(props: CardImagePropsT) {
  return <Root {...props} />;
}

CardImage.propTypes = cardImagePropTypes;
