/* @flow */
import { formFieldTheme as theme } from '../../../../../library/Form/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocT } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocT = {
  title: 'FormField',
  slug: 'form-field',
  description,
  examples,
  propDocs,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
