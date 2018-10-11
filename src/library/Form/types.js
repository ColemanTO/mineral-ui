/* @flow */
import { VARIANT } from './constants';

/**
 * The FormField component enhances form inputs with an accessible label and
 * optionally displays additional help text.
 */
export type FormFieldPropsT = {
  /**
   * Caption associated with the input element; commonly used to provide help
   * text
   */
  caption?: string | React$Element<*>,
  /** Form input element */
  children?: React$Node,
  /** @Private CSS className */
  className?: string,
  /** Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideLabel?: boolean,
  /** Id of the FormField */
  id?: string,
  /** Form input class; alternative to `children` */
  input?: React$ComponentType<*>,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Marks associated input as required */
  required?: boolean,
  /** Text used to indicate a required field */
  requiredText?: string | React$Element<*>,
  /**
   * Secondary text associated with the input element; takes precedence over
   * `requiredText`
   */
  secondaryText?: string | React$Element<*>,
  /** Available variants */
  variant?: $Keys<typeof VARIANT>
};

export type FormFieldDefaultPropsT = {
  requiredText: string | React$Element<*>
};

/**
 * FormFieldDivider separates [FormFields](/components/form-field) to group form inputs.
 *
 * FormFieldDividers help your users grok forms with several inputs by hinting
 * at related fields, without explicitly adding a legend.
 */
export type FormFieldDividerPropsT = Object;

/**
 * FormFieldsets group related [FormFields](/components/form-field) and provide a legend.
 * Grouping FormFields provides contextual clues to users and enhances
 * accessibility.
 */
export type FormFieldsetPropsT = {
  /** Rendered content of the component, most likely [FormField](/components/form-field) */
  children?: React$Node,
  /** Disable (visually) the fieldset */
  disabled?: boolean,
  /** Title of the fieldset */
  legend?: string | React$Element<*>
};
