/* @flow */
import { VARIANT } from '../../../../../library/Dialog/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocsT } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocsT = {
  children: {
    description: 'Rendered [Button(s)](/components/button)',
    type: {
      name: 'union',
      value: 'React$Element<*> | Array<React$Element<*>>'
    }
  },
  variant: {
    description: 'Available variants',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(VARIANT))
    }
  }
};

export default propDocs;
