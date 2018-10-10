/* @flow */
import { pxToEm } from '../styles';
import { mapComponentThemes } from '../themes';
import { componentTheme as overflowContainerWithShadowsComponentTheme } from '../OverflowContainer/OverflowContainerWithShadows';

export const dialogTheme = (baseTheme: Object) => ({
  Dialog_transitionDuration: '250ms',
  Dialog_zIndex: baseTheme.zIndex_1600,

  DialogCloseButton_margin: baseTheme.space_inline_sm,

  DialogContent_backgroundColor: baseTheme.panel_backgroundColor,
  DialogContent_borderColor: baseTheme.panel_borderColor,
  DialogContent_borderRadius: baseTheme.borderRadius_1,
  DialogContent_boxShadow: baseTheme.boxShadow_5,
  DialogContent_maxHeight: '80vh',
  DialogContent_maxHeight_small: pxToEm(560),
  DialogContent_maxHeight_medium: pxToEm(560),
  DialogContent_maxHeight_large: pxToEm(720),
  DialogContent_maxWidth_small: pxToEm(400),
  DialogContent_maxWidth_medium: pxToEm(640),
  DialogContent_maxWidth_large: pxToEm(1200),
  DialogContent_minWidth: pxToEm(360),
  DialogContent_offsetVertical: baseTheme.space_stack_xxl,
  DialogContent_width_small: '35vw',
  DialogContent_width_medium: '50vw',
  DialogContent_width_large: '80vw',

  DialogOverlay_backgroundColor: 'rgba(0, 0, 0, 0.6)',

  ...dialogRowTheme(baseTheme),
  ...baseTheme
});

export const dialogActionsTheme = (baseTheme: Object) => ({
  DialogActionsItem_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

export const dialogBodyTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowContainerWithShadows',
      theme: overflowContainerWithShadowsComponentTheme(baseTheme)
    },
    {
      name: 'DialogBody',
      theme: {}
    },
    baseTheme
  );

export const dialogRowTheme = (baseTheme: Object) => ({
  DialogRow_fontSize: baseTheme.fontSize_ui,
  DialogRow_paddingHorizontal: baseTheme.space_inline_lg,
  DialogRow_marginVertical: baseTheme.space_stack_lg,

  ...baseTheme
});

export const dialogTitleTheme = (baseTheme: Object) => ({
  DialogTitle_color: baseTheme.h4_color,
  DialogTitle_fontSize: baseTheme.h4_fontSize,
  DialogTitle_fontWeight: baseTheme.h4_fontWeight,

  DialogTitleIcon_margin: baseTheme.space_inline_sm,
  DialogTitleIcon_size: pxToEm(24),

  ...baseTheme
});
