/* @flow */
import React from 'react';
import { DialogFooter as Root } from './styled';

import { dialogFooterPropTypes } from './propTypes';
import type { DialogFooterProps } from './types';

const DialogFooter = (props: DialogFooterProps) => <Root {...props} />;

DialogFooter.propTypes = dialogFooterPropTypes;

export default DialogFooter;
