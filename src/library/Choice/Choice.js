/* @flow */
import React, { PureComponent } from 'react';
import { Choice as Root, Control, Input, Text } from './styled';

import type { ChoiceDefaultProps, ChoiceProps } from './types';

export default class Choice extends PureComponent<ChoiceProps> {
  static defaultProps: ChoiceDefaultProps = {
    labelPosition: 'end',
    size: 'large'
  };

  render() {
    const {
      className,
      disabled,
      hideLabel,
      iconChecked,
      inputRef,
      invalid,
      justify,
      label,
      labelPosition,
      required,
      rootProps: otherRootProps,
      size,
      ...restProps
    } = this.props;
    const rootProps = {
      className,
      disabled,
      justify,
      hideLabel,
      labelPosition,
      size,
      ...otherRootProps
    };

    const inputProps = {
      'aria-invalid': invalid,
      'aria-required': required,
      disabled,
      innerRef: (ref) => {
        if (inputRef) {
          inputRef(ref);
        }
      },
      required,
      size,
      ...restProps // Note: Props are spread to input rather than Root
    };

    const controlProps = {
      disabled,
      size
    };

    const textProps = {
      disabled,
      hideLabel,
      justify,
      labelPosition,
      size
    };

    return (
      <Root {...rootProps}>
        <Input {...inputProps} />
        <Control {...controlProps}>{iconChecked}</Control>
        <Text {...textProps}>{label}</Text>
      </Root>
    );
  }
}
