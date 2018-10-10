/* @flow */
import { dialogBodyTheme as theme } from '../../../../../library/Dialog/themes';
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'DialogBody',
  slug: 'dialog-body',
  description,
  examples,
  propDocs,
  theme
};

export default componentDoc;
