/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import { setFromArray, toArray } from '../utils/collections';
import composeEventHandlers from '../utils/composeEventHandlers';
import Button from '../Button';
import { MODE } from './constants';
import { ButtonGroup as Root } from './styled';

import { buttonGroupPropTypes } from './propTypes';
import type { ButtonGroupPropsT, ButtonGroupStateT } from './types';

const isChecked = (checked: number | Array<number> | Set<number>, index) => {
  const isSet = checked instanceof Set;
  const checkedSet = isSet ? checked : setFromArray(toArray(checked));
  // $FlowFixMe - Refinement to Set not working
  return checkedSet.has(index);
};

const getDefaultCheckedState = (props: ButtonGroupPropsT) => {
  const { children: _children, defaultChecked, mode } = props;
  const children = Children.toArray(_children);

  if (mode && defaultChecked !== undefined) {
    const defaultCheckedArray = toArray(defaultChecked);
    const checked =
      mode === MODE.checkbox ? defaultCheckedArray : [defaultCheckedArray[0]];
    return setFromArray(checked);
  }

  const checked: Set<number> = new Set();

  children.forEach((child, index) => {
    if (mode === MODE.checkbox) {
      if (child.props.defaultChecked) {
        checked.add(index);
      }
    } else if (mode === MODE.radio) {
      const selectedChild = children.find(
        (child) => child.props.defaultChecked
      );
      const index = children.indexOf(selectedChild);
      if (index !== -1) {
        checked.add(index);
      }
    }
  });

  return checked;
};

export default class ButtonGroup extends Component<
  ButtonGroupPropsT,
  ButtonGroupStateT
> {
  static displayName = 'ButtonGroup';

  static propTypes = buttonGroupPropTypes;

  state = {
    checked: getDefaultCheckedState(this.props)
  };

  render() {
    const {
      children,
      disabled,
      fullWidth,
      mode,
      onClick: ignoreOnClick,
      size,
      variant,
      ...restProps
    } = this.props;
    const rootProps = {
      disabled,
      fullWidth,
      mode,
      role: mode === MODE.radio ? 'radiogroup' : 'group',
      variant,
      ...restProps
    };
    const checked = this.getControllableValue('checked');
    const buttons = Children.map(children, (child, index) => {
      const isChildToggleable = mode;
      const isChildChecked = isChecked(checked, index);
      const hasNestedButton = child.type !== Button;
      const nestedButton = hasNestedButton && child.props.children;

      return cloneElement(child, {
        ...(isChildToggleable ? { 'aria-checked': isChildChecked } : undefined),
        ...(nestedButton
          ? {
              children: cloneElement(nestedButton, {
                'data-variant': nestedButton.props.variant,
                variant: nestedButton.props.variant || variant
              })
            }
          : undefined),
        'data-index': index,
        ...(!hasNestedButton
          ? { 'data-variant': child.props.variant }
          : undefined),
        disabled: disabled || child.props.disabled,
        key: index,
        ...(isChildToggleable && isChildChecked
          ? { primary: true }
          : undefined),
        onClick: composeEventHandlers(
          child.props.onClick,
          this.handleClick.bind(null, index)
        ),
        ...(isChildToggleable ? { role: mode } : undefined),
        size,
        ...(variant && !hasNestedButton
          ? { variant: child.props.variant || variant }
          : undefined)
      });
    });

    return <Root {...rootProps}>{buttons}</Root>;
  }

  handleClick = (index: number, event: SyntheticEvent<HTMLButtonElement>) => {
    const { mode } = this.props;

    if (!mode) {
      return this.clickActions(event, false);
    }

    event.persist();
    const { currentTarget: target } = event;

    if (this.isControlled('checked')) {
      this.clickActions(event, true);
    } else {
      let changed;
      this.setState(
        (prevState) => {
          let checked;
          if (mode === MODE.checkbox) {
            changed = true;
            checked = prevState.checked;
            const dataIndex = parseInt(target.getAttribute('data-index'));
            checked.has(dataIndex)
              ? checked.delete(dataIndex)
              : checked.add(dataIndex);
          } else {
            checked = setFromArray([index]);
            changed = [...prevState.checked][0] !== [...checked][0];
          }

          return { checked };
        },
        () => {
          this.clickActions(event, changed);
        }
      );
    }
  };

  clickActions = (
    event: SyntheticEvent<HTMLButtonElement>,
    changed: boolean
  ) => {
    const { onChange, onClick } = this.props;

    onClick && onClick(event);
    changed && onChange && onChange(event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
