/* @flow */
import React from 'react';
import { GridItem as Root } from './styled';

import { gridPropTypes } from './propTypes';
import type { GridItemPropsT } from './types';

const GridItem = (props: GridItemPropsT) => <Root {...props} />;

GridItem.propTypes = gridPropTypes;

export default GridItem;
