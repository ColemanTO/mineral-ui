/* @flow */
import React from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Button from '../Button';
import Text from '../Text';
import IconClose from '../Icon/IconClose';
import _OverflowContainerWithShadows from '../OverflowContainer/OverflowContainerWithShadows';
import {
  dialogTheme,
  dialogActionsTheme,
  dialogBodyTheme,
  dialogRowTheme,
  dialogTitleTheme
} from './themes';
import DialogRow from './DialogRow';

export const Dialog = createStyledComponent(
  'div',
  ({ modeless }) => ({
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    pointerEvents: modeless ? 'none' : undefined,
    right: 0,
    top: 0
  }),
  {
    displayName: 'Dialog',
    filterProps: ['title'],
    includeStyleReset: true
  }
);

export const DialogActions = createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = dialogActionsTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',

      '& > *:not(:last-child)': {
        [marginProperty]: theme.DialogActionsItem_margin
      }
    };
  },
  {
    displayName: 'DialogActions'
  }
);

export const DialogAnimate = createStyledComponent(
  'div',
  ({ state, theme: baseTheme }) => {
    const theme = dialogTheme(baseTheme);
    return {
      opacity: state === 'entered' ? 1 : 0,
      position: 'relative',
      transition: `opacity ${theme.Dialog_transitionDuration} ease`,
      willChange: 'opacity',
      zIndex: theme.Dialog_zIndex
    };
  },
  {
    displayName: 'Animate'
  }
);

export const DialogBody = createStyledComponent(
  DialogRow,
  ({ theme: baseTheme }) => {
    const theme = dialogRowTheme(baseTheme);
    const fontSize = theme.DialogRow_fontSize;
    const marginVertical = `${getNormalizedValue(
      theme.DialogRow_marginVertical,
      fontSize
    )}`;

    return {
      display: 'flex',
      flex: '1 1 auto',
      fontSize,
      margin: 0,
      minHeight: '0%', // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
      padding: 0,

      // Margins when no header or footer
      '&:first-child': {
        marginTop: marginVertical
      },
      '&:last-child': {
        marginBottom: marginVertical
      }
    };
  },
  {
    displayName: 'DialogBody'
  }
);

const DialogBodyThemedOverflowContainerWithShadows = createThemedComponent(
  _OverflowContainerWithShadows,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'DialogBody',
        theme: dialogBodyTheme(baseTheme)
      },
      {
        name: 'OverflowContainerWithShadows',
        theme: {}
      },
      baseTheme
    )
);

export const DialogBodyOverflowContainerWithShadows = createStyledComponent(
  DialogBodyThemedOverflowContainerWithShadows,
  ({ theme: baseTheme }) => {
    const theme = dialogRowTheme(baseTheme);
    const fontSize = theme.DialogRow_fontSize;
    const paddingHorizontal = `${getNormalizedValue(
      theme.DialogRow_paddingHorizontal,
      fontSize
    )}`;

    return {
      display: 'flex',
      flex: '1 1 auto',

      // OverflowContainerWithShadows > Scroller
      '& > div': {
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,

        '& > :first-child': {
          marginTop: 0
        },
        '& > :last-child': {
          marginBottom: 0
        }
      }
    };
  },
  { withProps: { scrollY: true } }
);

const DialogThemedButton = createThemedComponent(Button, ({ theme }) => ({
  ButtonIcon_color: theme.color
}));

export const DialogCloseButton = createStyledComponent(
  DialogThemedButton,
  ({ theme: baseTheme }) => {
    const theme = dialogTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

    return {
      [marginProperty]: theme.DialogCloseButton_margin
    };
  },
  {
    displayName: 'CloseButton',
    withProps: {
      iconStart: <IconClose />,
      minimal: true,
      size: 'small'
    }
  }
);

export const DialogContent = createStyledComponent(
  'div',
  ({ size, theme: baseTheme }) => {
    const theme = dialogTheme(baseTheme);

    const getSizeStyles = (size: string) => {
      const maxWidth = theme[`DialogContent_maxWidth_${size}`];
      const maxHeight = theme[`DialogContent_maxHeight_${size}`];
      const width = theme[`DialogContent_width_${size}`];
      const offsetVertical = theme.DialogContent_offsetVertical;

      const maxHeightNumber = parseFloat(maxHeight);
      const offsetVerticalNumber = parseFloat(offsetVertical);
      const minHeight = `${maxHeightNumber + 2 * offsetVerticalNumber}em`;

      return {
        maxWidth,
        width,

        [`@media(min-height: ${minHeight})`]: {
          maxHeight
        }
      };
    };

    return {
      backgroundColor: theme.DialogContent_backgroundColor,
      border: `1px solid ${theme.DialogContent_borderColor}`,
      borderRadius: theme.DialogContent_borderRadius,
      boxShadow: theme.DialogContent_boxShadow,
      display: 'flex',
      flexDirection: 'column',
      maxHeight: theme.DialogContent_maxHeight,
      minWidth: theme.DialogContent_minWidth,
      pointerEvents: 'all',
      position: 'relative',
      ...getSizeStyles(size)
    };
  },
  {
    displayName: 'DialogContent'
  }
);

export const DialogFooter = createStyledComponent(
  DialogRow,
  {
    flex: '0 0 auto'
  },
  {
    displayName: 'DialogFooter',
    withProps: { element: 'footer' }
  }
);

export const DialogHeader = createStyledComponent(
  DialogRow,
  {
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'space-between'
  },
  {
    displayName: 'DialogHeader',
    withProps: { element: 'header' }
  }
);

export const DialogIEWrapper = createStyledComponent('div', {
  display: 'flex'
});

export const DialogOverlay = createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = dialogTheme(baseTheme);

    return {
      backgroundColor: theme.DialogOverlay_backgroundColor,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    };
  },
  {
    displayName: 'Overlay'
  }
);

export const DialogTitle = createStyledComponent(
  'div',
  ({ theme: baseTheme, variant }) => {
    const theme = dialogTitleTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      color: variant ? theme[`color_${variant}`] : theme.DialogTitle_color,
      display: 'flex',

      '& > [role="img"]': {
        color: variant ? theme[`icon_color_${variant}`] : null,
        flex: '0 0 auto',
        [marginProperty]: theme.DialogTitleIcon_margin
      }
    };
  },
  {
    displayName: 'DialogTitle'
  }
);

export const DialogTitleTitle = createStyledComponent(Text, {
  color: 'inherit',
  flex: '1 1 auto'
});
