/* @flow */
import React from 'react';
import { PopoverArrow as Root } from './styled';

import type { PopoverArrowProps } from './types';

export default function PopoverArrow(props: PopoverArrowProps) {
  return (
    <Root {...props} aria-hidden>
      ▼
    </Root>
  );
}
