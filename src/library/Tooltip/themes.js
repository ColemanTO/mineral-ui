/* @flow */
import { mapComponentThemes } from '../themes';
import { componentTheme as popoverComponentTheme } from '../Popover/Popover';

import type { TooltipThemeFn } from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const tooltipTheme: TooltipThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'Popover',
      theme: popoverComponentTheme(baseTheme)
    },
    {
      name: 'Tooltip',
      theme: {
        TooltipArrow_backgroundColor: baseTheme.panel_backgroundColor_inverted,
        TooltipArrow_borderColor: baseTheme.panel_borderColor_inverted,

        TooltipContent_backgroundColor:
          baseTheme.panel_backgroundColor_inverted,
        TooltipContent_borderColor: baseTheme.panel_borderColor_inverted,
        TooltipContent_color: baseTheme.color_inverted,
        TooltipContent_maxWidth: '18em',

        TooltipContentBlock_marginVertical: '0',
        TooltipContentBlock_paddingHorizontal: baseTheme.space_inset_md,

        TooltipTriggerText_borderStyle: 'dashed',
        TooltipTriggerText_borderColor: 'currentcolor',
        TooltipTriggerText_borderWidth: '1px'
      }
    },
    baseTheme
  );
