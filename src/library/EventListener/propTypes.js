/* @flow */
import { arrayOf, func, object, oneOfType, shape, string } from 'prop-types';

export const eventListenerPropTypes = {
  listeners: arrayOf(
    shape({
      target: string.isRequired,
      event: string.isRequired,
      handler: func.isRequired,
      options: oneOfType([string, object])
    })
  ).isRequired
};
