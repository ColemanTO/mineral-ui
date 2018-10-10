/* @flow */
import React from 'react';
import { FormFieldset as Root } from './styled';

import { formFieldsetPropTypes } from './propTypes';
import type { FormFieldsetPropsT } from './types';

const FormFieldset = (props: FormFieldsetPropsT) => {
  const { children, legend, ...restProps } = props;
  return (
    <Root {...restProps}>
      {legend && <legend>{legend}</legend>}
      {children}
    </Root>
  );
};

FormFieldset.propTypes = formFieldsetPropTypes;

export default FormFieldset;
