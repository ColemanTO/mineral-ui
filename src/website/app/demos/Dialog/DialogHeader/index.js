/* @flow */
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'DialogHeader',
  slug: 'dialog-header',
  description,
  examples,
  propDocs
};

export default componentDoc;
