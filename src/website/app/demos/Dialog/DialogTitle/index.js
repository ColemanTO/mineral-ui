/* @flow */
import { dialogTitleTheme as theme } from '../../../../../library/Dialog/themes';
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'DialogTitle',
  slug: 'dialog-title',
  description,
  examples,
  propDocs,
  theme
};

export default componentDoc;
