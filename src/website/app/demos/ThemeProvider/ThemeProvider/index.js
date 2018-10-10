/* @flow */
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'ThemeProvider',
  slug: 'theme-provider',
  description,
  examples,
  propDocs,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
