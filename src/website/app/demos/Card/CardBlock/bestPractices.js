/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import { CardBlock } from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPracticesT } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPracticesT = [
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use CardBlock outside of [Card](/components/card), for
which it was designed.`,
    example: <CardBlock>{loremIpsum}</CardBlock>
  }
];

export default bestPractices;
