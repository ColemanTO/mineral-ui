/* @flow */
import React from 'react';
import Checkbox from './Checkbox';
import { CheckboxGroup as Root } from './styled';

import { checkboxGroupPropTypes } from './propTypes';
import type { CheckboxGroupPropsT } from './types';

const CheckboxGroup = (props: CheckboxGroupPropsT) => {
  const { rootProps: otherRootProps, ...restProps } = props;
  const rootProps = {
    rootProps: {
      ...otherRootProps
    },
    input: Checkbox,
    type: 'checkbox',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
};

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.propTypes = checkboxGroupPropTypes;

export default CheckboxGroup;
