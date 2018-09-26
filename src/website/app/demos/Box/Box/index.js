/* @flow */
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComments';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'Box',
  slug: 'box',
  description,
  examples,
  propDocs,
  propsComment,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
