/* @flow */
import Table from '../../../../../library/Table';
import sharedData from '../shared/data';

export default {
  id: 'sort-by-columns',
  title: 'Sort by Columns',
  description: `Users can sort the rows in Table by column, enabled via the
\`sortable\` prop. If the default sorting function,
below, does not work for your data, you can supply your own with the
\`sortComparator\` prop. You can set the default sort with
\`defaultSort\` or you can [control](#controlled) the sort state with \`sort\`.
Note that the \`sortable\` & \`sortComparator\` properties can be applied to
Table via props or to individual columns via column definition.

\`\`\`
// Coerce null & undefined values to an empty string and normalize letter casing
const normalizedValue = (value) =>
  value === null || value === undefined
    ? ''
    : typeof value === 'string' ? value.toUpperCase() : value;

const defaultSortComparator: SortComparator = (a, b, key) => {
  const valueA = normalizedValue(a[key]);
  const valueB = normalizedValue(b[key]);

  return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
};
\`\`\`

In the example below, all columns except the last one have enabled sorting and
the Dairy column has a custom sorting function to sort by length rather than
alphabetically.
`,
  scope: { Table, sharedData },
  source: `
    () => {
      const sortByLength = (a, b, column) => {
        const lengthA =a[column].length;
        const lengthB =b[column].length;
        return lengthA < lengthB ? -1 : lengthA > lengthB ? 1 : 0;
      };

      const columns = [
        { content: 'Fresh Fruits', key: 'Fruits', sortable: true },
        { content: 'Veritable Vegetables', key: 'Vegetables', sortable: true },
        { content: 'Grains', key: 'Grains', sortable: true },
        { content: 'Delectable Dairy', key: 'Dairy', sortable: true, sortComparator: sortByLength },
        { content: 'Protein', key: 'Protein' }
      ];

      return (
        <Table
          columns={columns}
          data={sharedData}
          rowKey="Fruits"
          defaultSort={{ key: 'Fruits' }}
          title="Delicious Foods"
          hideTitle />
      );
    }`
};
