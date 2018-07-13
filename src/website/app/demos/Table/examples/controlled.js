/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Table controls its own state by default, and can optionally
be managed by the application as a controlled component via the control props,
\`selectedRows\` and \`sort\`.`,
  scope: { Button, Component, Table, Flex, FlexItem, data },
  source: `
    () => {
      const evenRows = data.filter((row, index) => (index + 1)%2 === 0);
      const oddRows = data.filter((row, index) => (index + 1)%2 !== 0);

      const columns = [
        { content: 'Fruits', key: 'Fruits', sortable: true },
        { content: 'Vegetables', key: 'Vegetables', sortable: true },
        { content: 'Grains', key: 'Grains', sortable: true },
        { content: 'Dairy', key: 'Dairy', sortable: true },
        { content: 'Protein', key: 'Protein' }
      ];

      const initialState = {
        selected: []
      };

      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = initialState;

          this.handleToggleRow = this.handleToggleRow.bind(this);
          this.handleToggleAllRows = this.handleToggleAllRows.bind(this);
          this.selectEvenRows = this.selectEvenRows.bind(this);
          this.selectOddRows = this.selectOddRows.bind(this);
          this.reset = this.reset.bind(this);
        }

        handleToggleRow(row) {
          this.setState((prevState) => {
            const selected = [...prevState.selected];
            const index = selected.indexOf(row);
            const hasRow = index !== -1;
            hasRow ? selected.splice(index, 1) : selected.push(row);
            return { selected };
          });
        }

        handleToggleAllRows(rows) {
          this.setState({ selected: rows });
        }

        selectEvenRows() {
          this.setState({
            selected: evenRows
          })
        }

        selectOddRows() {
          this.setState({
            selected: oddRows
          })
        }

        reset() {
          this.setState(initialState)
        }

        render() {
          return (
            <div>
              <Flex marginBottom="md">
                <FlexItem>
                  <Button onClick={this.selectEvenRows} size="medium">Select even rows</Button>
                </FlexItem>
                <FlexItem>
                  <Button onClick={this.selectOddRows} size="medium">Select odd rows</Button>
                </FlexItem>
                <FlexItem marginLeft="auto">
                  <Button onClick={this.reset} size="medium">Reset</Button>
                </FlexItem>
              </Flex>
              <Table
                columns={columns}
                data={data}
                rowKey="Fruits"
                enableRowSelection
                selectedRows={this.state.selected}
                onToggleRow={this.handleToggleRow}
                onToggleAllRows={this.handleToggleAllRows}
                title="Delicious Foods"
                hideTitle />
            </div>
          );
        }
      }

      return <MyTable />;
    }
    `
};
