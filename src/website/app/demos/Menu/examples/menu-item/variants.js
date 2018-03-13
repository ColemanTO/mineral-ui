/* @flow */
import { mineralTheme } from '../../../../../../themes';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'variants',
  title: 'Variants',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use available [variants](/color#guidelines-variants) to help communicate purpose.
A \`startIcon\` will be automatically inserted to reinforce the intent.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem variant="danger">
          Danger
        </MenuItem>
        <MenuItem variant="success">
          Success
        </MenuItem>
        <MenuItem variant="warning">
          Warning
        </MenuItem>
      </Menu>
    </DemoLayout>`
};
