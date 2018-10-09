/* @flow */
import React, { Children } from 'react';
import Flex, { FlexItem } from '../Flex';

import type { StartEndPropsT } from './types';

export default function StartEnd(props: StartEndPropsT) {
  const {
    children,
    justifyContent: ignoreJustifyContent,
    priority,
    wrap: ignoreWrap,
    ...restProps
  } = props;
  const rootProps = {
    justifyContent: 'between',
    ...restProps
  };
  let flexItems;
  if (Children.count(children) === 2) {
    const growFactors = {
      start: [1, 0],
      end: [0, 1],
      both: [1, 1],
      none: [undefined, undefined]
    };
    flexItems = Children.map(children, (child, index) => {
      return index ? (
        <FlexItem grow={growFactors[priority || 'none'][1]}>{child}</FlexItem>
      ) : (
        <FlexItem grow={growFactors[priority || 'none'][0]}>{child}</FlexItem>
      );
    });
  } else {
    throw new Error('StartEnd must have exactly two children.');
  }

  return <Flex {...rootProps}>{flexItems}</Flex>;
}
