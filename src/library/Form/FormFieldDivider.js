/* @flow */
import React from 'react';
import { FormFieldDivider as Root } from './styled';

import { formFieldDividerPropTypes } from './propTypes';
import type { FormFieldDividerPropsT } from './types';

const FormFieldDivider = (props: FormFieldDividerPropsT) => (
  <Root {...props} role="separator" />
);

FormFieldDivider.propTypes = formFieldDividerPropTypes;

export default FormFieldDivider;
