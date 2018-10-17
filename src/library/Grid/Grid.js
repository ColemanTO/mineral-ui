/* @flow */
import React, { Children, cloneElement } from 'react';
import { Grid as Root } from './styled';

import { gridPropTypes } from './propTypes';
import type { GridDefaultProps, GridProps } from './types';

const getGridItems = ({ breakpoints, children, columns, gutterWidth }) =>
  Children.map(children, (child) =>
    cloneElement(child, { breakpoints, columns, gutterWidth })
  );

const Grid = (props: GridProps) => (
  <Root {...props}>{getGridItems(props)}</Root>
);

const defaultProps: GridDefaultProps = {
  alignItems: 'stretch', // Same as Flex
  columns: 12,
  gutterWidth: 'md' // Same as Flex
};

Grid.defaultProps = defaultProps;
Grid.propTypes = gridPropTypes;

export default Grid;
