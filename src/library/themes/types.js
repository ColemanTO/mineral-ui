/* @flow */
export type ThemeProviderPropsT = {
  children?: React$Node,
  theme?: ThemeT<>
};

export type ThemeT<T: ThemeObjT = ThemeObjT> = T | ThemeFnT<T>;
export type ThemeObjT = { [key: string]: ThemeValueT };
export type ThemeFnT<T: ThemeObjT = ThemeObjT> = (
  props: Object,
  context?: Object
) => T;
export type ThemeValueT = any; // FIXME: string | number | null;

export type ComponentThemeT<T: ThemeObjT> = T & BaseThemeT;
export type ComponentThemeFnT<T: ThemeObjT> = (BaseThemeT) => T & BaseThemeT;

export type BaseThemeT = ThemeObjT; // TODO: Enumerate keys
