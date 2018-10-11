/* @flow */
import { PLACEMENT } from './constants';

import type { Items, ItemGroups } from '../Menu/Menu';

type PlacementT = $Keys<typeof PLACEMENT>;

export type DropdownPropsT = {
  /**
   * Trigger for the Dropdown. Optionally provides custom rendering control.
   * See the [custom trigger example](/components/dropdown#custom-trigger)
   * and our [render props guide](/render-props).
   */
  children: React$Node | DropdownRenderFnT,
  /**
   * Data from which the [Menu](/components/menu#data) will be constructed
   * (see [example](#data))
   */
  data: Items | ItemGroups,
  /**
   * Index of item to be highlighted upon initialization. Primarily for
   * use with uncontrolled components.
   */
  defaultHighlightedIndex?: number,
  /**
   * Open the Dropdown upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultIsOpen?: boolean,
  /** Disable the Dropdown */
  disabled?: boolean,
  /** Index of the highlighted item. For use with controlled components. */
  highlightedIndex?: number,
  /** Id of the Dropdown */
  id?: string,
  /**
   * Determines whether the Dropdown is open. For use with controlled
   * components.
   */
  isOpen?: boolean,
  /**
   * Provides custom rendering control for the items. See the
   * [custom item example](/components/dropdown#custom-item) and
   * our [render props guide](/render-props).
   */
  item?: DropdownRenderFnT,
  /**
   * Specifies a key in the item data that gives an item its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  itemKey?: string,
  /**
   * Provides custom rendering control for the menu. See the
   * [custom menu example](/components/dropdown#custom-menu) and
   * our [render props guide](/render-props).
   */
  menu?: DropdownRenderFnT,
  /**
   * Plugins that are used to alter behavior. See
   * [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers)
   * for options.
   */
  modifiers?: Object,
  /** Called when Dropdown is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Dropdown is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Placement of the Dropdown menu */
  placement?: PlacementT,
  /**
   * Use a Portal to render the Dropdown menu to the body rather than as a
   * sibling to the trigger
   */
  usePortal?: boolean,
  /** Display a wider Dropdown menu */
  wide?: boolean
};

export type DropdownStateT = {
  highlightedIndex: ?number,
  isOpen: boolean
};

export type DropdownDefaultPropsT = {
  itemKey: string,
  placement: PlacementT
};

type DropdownHelpersT = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

export type DropdownStateAndHelpersT = {
  state: DropdownStateT,
  helpers: DropdownHelpersT
};

export type DropdownPropGetterT = (props?: Object) => Object;

export type DropdownRenderFnT = (props?: DropdownRenderPropsT) => React$Node;

type DropdownRenderPropsT = {
  props: Object
} & DropdownStateAndHelpersT;

export type DropdownContentPropsT = {
  /** Content of the Dropdown */
  children: React$Node,
  /** Id of the Dropdown content */
  id: string,
  /** Plugins that are used to alter behavior. See https://popper.js.org/popper-documentation.html#modifiers */
  modifiers?: Object,
  /** Placement of the dropdown */
  placement?: PlacementT,
  /** Display a wider dropdown menu */
  wide?: boolean
};
