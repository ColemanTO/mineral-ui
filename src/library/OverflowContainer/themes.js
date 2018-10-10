/* @flow */
import { mapComponentThemes } from '../themes';

// prettier-ignore
export const overflowContainerTheme = (baseTheme: Object) => ({
  OverflowContainer_outline_focus: `1px solid ${baseTheme.borderColor_theme_focus}`,

  ...baseTheme
});

// prettier-ignore
export const overflowContainerWithShadowsTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowContainer',
      theme: overflowContainerTheme(baseTheme)
    },
    {
      name: 'OverflowContainerWithShadows',
      theme: {
        OverflowContainerWithShadows_boxShadowBottom: `inset 0 -8px 8px -8px ${baseTheme.color_gray_60}, inset 0 -1px ${baseTheme.borderColor}`,
        OverflowContainerWithShadows_boxShadowLeft: `inset 8px 0 8px -8px ${baseTheme.color_gray_60}, inset 1px 0 ${baseTheme.borderColor}`,
        OverflowContainerWithShadows_boxShadowRight: `inset -8px 0 8px -8px ${baseTheme.color_gray_60}, inset -1px 0 ${baseTheme.borderColor}`,
        OverflowContainerWithShadows_boxShadowTop: `inset 0 8px 8px -8px ${baseTheme.color_gray_60}, inset 0 1px ${baseTheme.borderColor}`,
      }
    },
    baseTheme
  );
