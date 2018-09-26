/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

export const checkboxTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'Choice',
      theme: choiceTheme(baseTheme)
    },
    {
      name: 'Checkbox',
      theme: {}
    },
    baseTheme
  );

export const checkboxGroupTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'ChoiceGroup',
      theme: choiceGroupTheme(baseTheme)
    },
    {
      name: 'CheckboxGroup',
      theme: {}
    },
    baseTheme
  );
