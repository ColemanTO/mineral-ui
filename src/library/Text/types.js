/* @flow */
import { type Context } from 'create-react-context';

import { ALIGN, APPEARANCE, FONT_WEIGHT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeObj,
  ThemeValue
} from '../themes/types';

type align = $Keys<typeof ALIGN>;
type appearance = $Keys<typeof APPEARANCE>;
type fontWeight = $Keys<typeof FONT_WEIGHT> | number;

export type TextProps = {
  align?: align,
  appearance?: appearance,
  children: React$Node,
  color?: string,
  element?: string,
  fontWeight?: fontWeight,
  inherit?: boolean,
  noMargins?: boolean,
  parentElement?: string,
  truncate?: boolean | number | string
};

export type TextDefaultProps = {
  appearance: appearance,
  element: string
};

export type ElementContextType = Context<string | void>;

export type TextWithThemeOverrides = ({
  appearance?: string,
  children: React$Node,
  displayName: string,
  element?: string,
  textComponent: React$ComponentType<*>,
  theme: ThemeObj
}) => React$Element<*>;

export type TextThemeFn = ComponentThemeFn<TextTheme>;
export type TextTheme = ComponentTheme<TextThemeKeys>;
type TextThemeKeys = {|
  Text_color: ThemeValue,
  Text_color_h1: ThemeValue,
  Text_color_h2: ThemeValue,
  Text_color_h3: ThemeValue,
  Text_color_h4: ThemeValue,
  Text_color_h5: ThemeValue,
  Text_color_h6: ThemeValue,
  Text_color_mouse: ThemeValue,
  Text_fontSize: ThemeValue,
  Text_fontSize_h1: ThemeValue,
  Text_fontSize_h2: ThemeValue,
  Text_fontSize_h3: ThemeValue,
  Text_fontSize_h4: ThemeValue,
  Text_fontSize_h5: ThemeValue,
  Text_fontSize_h6: ThemeValue,
  Text_fontSize_mouse: ThemeValue,
  Text_fontSize_prose: ThemeValue,
  Text_fontWeight_h1: ThemeValue,
  Text_fontWeight_h2: ThemeValue,
  Text_fontWeight_h3: ThemeValue,
  Text_fontWeight_h4: ThemeValue,
  Text_fontWeight_h5: ThemeValue,
  Text_fontWeight_h6: ThemeValue,
  Text_lineHeight: ThemeValue,
  Text_lineHeight_heading: ThemeValue,
  Text_lineHeight_headingSmall: ThemeValue,
  Text_marginBottom: ThemeValue,
  Text_marginBottom_heading: ThemeValue
|};
