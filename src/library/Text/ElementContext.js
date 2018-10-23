/* @flow */
import createReactContext from 'create-react-context';

import type { ElementContextType } from './types';

const ElementContext: ElementContextType = createReactContext();

export default ElementContext;
