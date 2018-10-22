/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** Content of HorizontalNavigation; must be NavLink components */
  children?: React$Node,
  /** Maximum width of each NavLink */
  maxNavLinkWidth?: number | string,
  /** Called when a NavLink is selected */
  onChange?: (
    selectedNavLinkIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void,
  /**
   * Index of the selected NavLink; primarily for use with controlled components.
   * If this prop is specified, an `onChange` handler must also be specified.
   * See also: `defaultSelectedNavLinkIndex`
   */
  selectedNavLinkIndex?: number
};

type AnchorEvent = SyntheticEvent<HTMLAnchorElement>;

const Root = createStyledComponent(
  'nav',
  {},
  {
    displayName: 'HorizontalNavigation',
    includeStyleReset: true
  }
);

/**
 * TODO
 */
class HorizontalNavigation extends Component<Props> {
  static defaultProps = {
    maxNavLinkWidth: '8.5em'
  };

  lastIndex: number;

  root: ?HTMLElement;

  render() {
    const {
      children,
      maxNavLinkWidth,
      selectedNavLinkIndex,
      ...restProps
    } = this.props;

    let navLinkItems = [];

    Children.forEach(children, (navLink, index) => {
      const { children, disabled, icon, maxWidth } = navLink.props;

      const selected = index === selectedNavLinkIndex;
      const navLinkProps = {
        children,
        disabled,
        icon,
        index,
        key: index,
        maxWidth: maxWidth || maxNavLinkWidth,
        onClick: !disabled
          ? this.handleClick
          : (event) => {
              event.preventDefault();
            },
        selected
      };
      navLinkItems.push(cloneElement(navLink, navLinkProps));
    });

    const rootProps = {
      innerRef: this.setRootRef,
      ...restProps
    };

    return <Root {...rootProps}>{navLinkItems}</Root>;
  }

  setRootRef = (node: ?HTMLElement) => {
    this.root = node;
  };

  handleClick = (event: AnchorEvent) => {
    event.persist();
    const { currentTarget: target } = event;
    const selectedNavLinkIndex = parseInt(target.getAttribute('data-index'));

    if (selectedNavLinkIndex !== this.props.selectedNavLinkIndex) {
      this.changeActions(selectedNavLinkIndex, event);
    }
  };

  changeActions = (selectedNavLinkIndex: number, event: AnchorEvent) => {
    const { onChange } = this.props;
    onChange && onChange(selectedNavLinkIndex, event);
  };
}

export default HorizontalNavigation;
