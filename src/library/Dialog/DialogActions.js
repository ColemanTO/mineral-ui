/* @flow */
import React, { cloneElement } from 'react';
import Button from '../Button';
import { findAllByType } from '../utils/children';
import { DialogActions as Root } from './styled';

import { dialogActionsPropTypes } from './propTypes';
import type { DialogActionsProps } from './types';

const DialogActions = (props: DialogActionsProps) => {
  const { children, variant, ...rootProps } = props;
  let actions = findAllByType(children, Button);
  const lastIndex = actions.length - 1;
  actions = actions.map((action, index) => {
    const { props } = action;
    /* eslint-disable react/prop-types */
    return cloneElement(action, {
      key: index,
      minimal:
        props.minimal !== undefined ? props.minimal : index !== lastIndex,
      primary:
        props.primary !== undefined ? props.primary : index === lastIndex,
      variant:
        props.variant !== undefined
          ? props.variant
          : index === lastIndex
            ? variant
            : undefined
    });
    /* eslint-enable react/prop-types */
  });

  return <Root {...rootProps}>{actions}</Root>;
};

DialogActions.propTypes = dialogActionsPropTypes;

export default DialogActions;
