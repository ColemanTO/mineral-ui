/* @flow */
import type { ComponentPropDocsT } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocsT = {
  children: {
    description:
      'Content of Card; see the [Basic](#basic) example for more details',
    type: 'React$Node',
    required: true
  },
  onClick: {
    description: 'Called with the click event',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  }
};

export default propDocs;
