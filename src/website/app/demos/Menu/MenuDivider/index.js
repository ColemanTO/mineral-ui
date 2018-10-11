/* @flow */
import { menuDividerTheme as theme } from '../../../../../library/Menu/themes';
import description from './description';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'MenuDivider',
  slug: 'menu-divider',
  description,
  examples,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
