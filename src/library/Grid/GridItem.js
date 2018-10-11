/* @flow */
import React from 'react';
import { GridItem as Root } from './styled';

import { gridPropTypes } from './propTypes';
import type { GridItemProps } from './types';

const GridItem = (props: GridItemProps) => <Root {...props} />;

GridItem.propTypes = gridPropTypes;

export default GridItem;
