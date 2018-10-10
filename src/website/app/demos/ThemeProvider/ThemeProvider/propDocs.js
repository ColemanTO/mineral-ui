/* @flow */
import type { ComponentPropDocsT } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocsT = {
  children: {
    description: 'Components to which the theme will be applied',
    type: 'React$Node'
  },
  theme: {
    description:
      'A shallow object of [theme variables](/theming#common-scenarios-theme-structure) and their values or a function that provides such an object.',
    type: 'Object'
  }
};

export default propDocs;
