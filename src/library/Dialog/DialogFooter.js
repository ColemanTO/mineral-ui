/* @flow */
import React from 'react';
import { DialogFooter as Root } from './styled';

import { dialogFooterPropTypes } from './propTypes';
import type { DialogFooterPropsT } from './types';

const DialogFooter = (props: DialogFooterPropsT) => <Root {...props} />;

DialogFooter.propTypes = dialogFooterPropTypes;

export default DialogFooter;
