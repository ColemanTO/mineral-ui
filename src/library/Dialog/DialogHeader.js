/* @flow */
import React, { cloneElement } from 'react';
import { findByType } from '../utils/children';
import { DialogHeader as Root } from './styled';
import DialogTitle from './DialogTitle';

import { dialogHeaderPropTypes } from './propTypes';
import type { DialogHeaderPropsT } from './types';

const DialogHeader = (props: DialogHeaderPropsT) => {
  const { children, closeButton, titleProps, ...rootProps } = props;

  let title = findByType(children, DialogTitle);
  if (title) {
    title = cloneElement(title, {
      ...titleProps,
      ...title.props
    });
  }

  return (
    <Root {...rootProps}>
      {title || children}
      {closeButton}
    </Root>
  );
};

DialogHeader.propTypes = dialogHeaderPropTypes;

export default DialogHeader;
