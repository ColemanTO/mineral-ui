/* @flow */
import { Arrow, Manager, Target } from 'react-popper';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import { CardBlock, CardTitle } from '../Card';
import RtlPopper from './RtlPopper';
import { popoverArrowTheme, popoverContentTheme } from './themes';
import { ARROW_SIZE } from './constants';

export const Popover = createStyledComponent(
  Manager,
  {
    color: null,
    display: 'inline-block'
  },
  {
    displayName: 'Popover',
    forwardProps: ['tag'],
    rootEl: 'span'
  }
);

export const PopoverContent = createStyledComponent(
  RtlPopper,
  ({ theme: baseTheme }) => {
    const theme = popoverContentTheme(baseTheme);

    return {
      backgroundColor: theme.PopoverContent_backgroundColor,
      border: `1px solid ${theme.PopoverContent_borderColor}`,
      borderRadius: theme.PopoverContent_borderRadius,
      boxShadow: theme.PopoverContent_boxShadow,
      color: theme.PopoverContent_color,
      padding: `${theme.PopoverContent_paddingVertical} 0`,
      maxWidth: theme.PopoverContent_maxWidth,
      zIndex: theme.PopoverContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: ARROW_SIZE
      },
      '&[data-placement^="bottom"]': {
        marginTop: ARROW_SIZE
      },
      '&[data-placement^="left"]': {
        marginRight: ARROW_SIZE
      },
      '&[data-placement^="right"]': {
        marginLeft: ARROW_SIZE
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'PopoverContent',
    includeStyleReset: true
  }
);

const cardOverrides = ({ theme: baseTheme }) => {
  const theme = popoverContentTheme(baseTheme);
  return {
    CardRow_marginVertical: theme.PopoverContentBlock_marginVertical,
    CardRow_marginVerticalLast: theme.PopoverContentBlock_marginVertical,
    CardRow_paddingHorizontal: theme.PopoverContentBlock_paddingHorizontal
  };
};

export const PopoverBlock = createThemedComponent(CardBlock, cardOverrides);

export const PopoverTitle = createThemedComponent(CardTitle, cardOverrides);

export const PopoverArrow = createStyledComponent(
  Arrow,
  ({ placement, size, theme: baseTheme }) => {
    const theme = popoverArrowTheme(baseTheme);
    let arrowShadow = ', 0 3px 1px rgba(0, 0, 0, 0.3)';
    const horizontalOffset = `-${parseFloat(size) - 4}px`;
    let directionalStyles;
    let rotation = 0;

    switch (true) {
      case placement && placement.startsWith('top'):
        // Magic numbers to optically match theme.boxShadow_2
        arrowShadow = ', 0 4px 2px rgba(0, 0, 0, 0.3)';
        directionalStyles = {
          bottom: `-${parseFloat(size) - 2}px`,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        break;
      case placement && placement.startsWith('bottom'):
        arrowShadow = '';
        directionalStyles = {
          top: `-${parseFloat(size) - 3}px`,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        rotation = 180;
        break;
      case placement && placement.startsWith('left'):
        directionalStyles = {
          right: horizontalOffset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = -90;
        break;
      case placement && placement.startsWith('right'):
        directionalStyles = {
          left: horizontalOffset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = 90;
        break;
      default:
        directionalStyles = {
          display: 'none'
        };
    }

    return {
      color: theme.PopoverArrow_backgroundColor,
      display: 'inline-block',
      fontSize: size,
      margin: size,
      position: 'absolute',
      textShadow: `0 2px 0 ${theme.PopoverArrow_borderColor}${arrowShadow}`,
      transform: `rotate(${rotation}deg) scaleX(2)`,
      ...directionalStyles
    };
  },
  {
    displayName: 'PopoverArrow',
    rootEl: 'span'
  }
);

export const PopoverTrigger = createStyledComponent(
  Target,
  ({ cursor }) => ({
    cursor,
    display: 'inline-block'
  }),
  {
    displayName: 'PopoverTrigger'
  }
);