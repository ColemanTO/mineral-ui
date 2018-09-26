/* @flow */
import { checkboxTheme as theme } from '../../../../../library/Checkbox/themes';
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComment';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'Checkbox',
  slug: 'checkbox',
  description,
  examples,
  propDocs,
  propsComment,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
