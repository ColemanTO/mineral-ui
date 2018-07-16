/* @flow */
import React, { Component } from 'react';
import Selectable from './Selectable';
import Sortable from './Sortable';
import TableBase from './TableBase';

import type { Comparators, State as SortableState } from './Sortable';
import type { State as SelectableState } from './Selectable';

type Props = {
  /** Column definitions ([see Column type for details](#Column-type)) */
  columns?: Columns,
  /** Row data ([see example for more details](#basic)) */
  data: Array<Object>,
  /** Amount of vertical space in Table's cells */
  density: 'compact' | 'spacious',
  /** Visually hide Table's header, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideHeader?: boolean,
  /** Visually hide Table's title, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideTitle?: boolean,
  /** Render Table with high-contrast styles */
  highContrast?: boolean,
  /**
   * Various messages and labels used by Table
   * ([see example for more details](#rtl))
   */
  messages: Messages,
  /** Called when data is sorted */
  onSort?: (data: Array<Object>) => void,
  /** Called when all rows are selected/deselected */
  onToggleAllRows?: (rows: Array<Object>, selected: boolean) => void,
  /** Called when a single row is selected/deselected */
  onToggleRow?: (row: Object, selected: boolean) => void,
  /**
   * Specifies a key in the row data that gives a row its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  rowKey?: string,
  /**
   * Determines the scrolling behavior when Table's width exceeds that of its
   * container
   */
  scrollable?: boolean,
  /**
   * Enable the user to select rows. Prepends a column for checkboxes to your
   * Table.
   */
  selectable?: boolean,
  /**
   * Selected rows when `selectable = true`.
   */
  selectedRows?: Array<Object>,
  /**
   * Sorted column & direction
   */
  sort?: {
    key: string,
    descending?: boolean
  },
  /** Enable the user to sort all columns */
  sortable?: boolean,
  /** The sort comparator function used by sortable columns */
  sortComparator?: (a: Object, b: Object, key: string) => -1 | 0 | 1,
  /** Renders Table with alternating row stripes */
  striped?: boolean,
  /** Title for Table */
  title: React$Node,
  /** Available title styles (see [Text](/components/text)) */
  titleAppearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Available title elements (see [Text](/components/text)) */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
};

export type Columns = Array<Column>;

// See demos/Table/index.js additionalTypes for descriptions
type Column = {
  cell?: RenderFn,
  content: React$Node,
  sortable?: boolean,
  header?: RenderFn,
  key: string,
  label?: string,
  maxWidth?: number | string,
  minWidth?: number | string,
  primary?: boolean,
  sortComparator?: (a: Object, b: Object, key: string) => -1 | 1 | 0,
  textAlign?: 'start' | 'end' | 'center' | 'justify',
  width?: number | string
};

export type Messages = {
  deselectAllRows: string,
  deselectRow: string,
  selectAllRows: string,
  selectRow: string,
  selectedRows: string,
  sortColumnAscending: string,
  sortColumnDescending: string
};

export type Row = Object;
export type Rows = Array<Row>;

export type RenderFn = (props: RenderProps) => React$Node;
export type RenderProps = {
  props: Object
} & StateAndHelpers;
type StateAndHelpers = {
  // TODO: Would require passing T in to SelectableState
  state?: SelectableState & SortableState,
  helpers?: Helpers
};
type Helpers = {};

const generateColumns = (data: Rows) =>
  data[0]
    ? Object.keys(data[0]).reduce((acc, cell) => {
        acc.push({ content: cell, key: cell });
        return acc;
      }, [])
    : [];

const getColumns = ({ columns, data }: Props) =>
  columns || generateColumns(data);

const getComparators = ({ columns }: Props) => {
  const comparators =
    columns &&
    columns.reduce((acc, column) => {
      const { key, sortComparator } = column;
      if (sortComparator) {
        acc[key] = sortComparator;
      }
      return acc;
    }, {});

  return comparators && Object.keys(comparators).length
    ? comparators
    : undefined;
};

const getSortable = ({ columns, sort, sortable }: Props) =>
  Boolean(
    sort || sortable || (columns && columns.some((column) => column.sortable))
  );

/**
 * Table displays structured data with columns and rows.
 */
class Table extends Component<Props> {
  static defaultProps = {
    density: 'compact',
    messages: {
      deselectAllRows: 'Deselect all rows',
      deselectRow: 'Deselect row',
      selectAllRows: 'Select all rows',
      selectedRows: 'Selected rows',
      selectRow: 'Select row',
      sortColumnAscending: 'Sort column in ascending order',
      sortColumnDescending: 'Sort column in descending order'
    },
    titleElement: 'h4'
  };

  columns: Columns = getColumns(this.props);

  comparators: Comparators | typeof undefined = getComparators(this.props);

  sortable: boolean = getSortable(this.props);

  componentWillUpdate(nextProps: Props) {
    if (
      this.props.columns !== nextProps.columns ||
      (!this.props.columns && this.props.data !== nextProps.data)
    ) {
      this.columns = getColumns(nextProps);
    }

    if (this.props.columns !== nextProps.columns) {
      this.sortable = getSortable(nextProps);
      this.comparators = getComparators(nextProps);
    }
  }

  render() {
    console.log('render Table');
    const {
      onToggleRow: onToggle,
      onToggleAllRows: onToggleAll,
      selectable,
      selectedRows: selected,
      ...restProps
    } = this.props;

    const rootProps = {
      ...restProps,
      columns: this.columns,
      comparators: this.comparators,
      onToggle,
      onToggleAll,
      selected
    };

    if (selectable && this.sortable) {
      return <SelectableSortableTable {...rootProps} />;
    } else if (selectable) {
      return <SelectableTable {...rootProps} />;
    } else if (this.sortable) {
      return <SortableTable {...rootProps} />;
    } else {
      return <TableBase {...rootProps} />;
    }
  }
}

const SelectableTable = (props) => (
  <Selectable {...props}>{(props) => <TableBase {...props} />}</Selectable>
);

/* eslint-disable react/prop-types */
const SortableTable = (props) => (
  <Sortable {...props} isSortable={props.sortable}>
    {({ ...props }) => <TableBase {...props} data={props.sortable.data} />}
  </Sortable>
);
/* eslint-enable */

const SelectableSortableTable = (props) => (
  <Selectable {...props}>{(props) => <SortableTable {...props} />}</Selectable>
);

export default Table;
