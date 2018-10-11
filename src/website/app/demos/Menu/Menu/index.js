/* @flow */
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'Menu',
  slug: 'menu',
  description,
  examples,
  propDocs,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
