/* @flow */
import type { ComponentPropDocsT } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocsT = {
  children: {
    description:
      'Rendered content of the component, most likely [FormField](/components/form-field)',
    type: 'React$Node'
  },
  disabled: {
    description: 'Disable (visually) the fieldset',
    type: 'boolean'
  },
  legend: {
    description: 'Title of the fieldset',
    type: {
      name: 'union',
      value: 'string | React$Element<*>'
    }
  }
};

export default propDocs;
