/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CardBlock from '../../Card/CardBlock';
import { cardBlockTheme } from '../themes';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowCardBlock(props = {}) {
  const cardBlockProps = {
    children: 'children',
    ...props
  };
  return shallow(<CardBlock {...cardBlockProps} />);
}

describe('CardBlock', () => {
  it('renders', () => {
    const cardBlock = shallowCardBlock();

    expect(cardBlock.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <CardBlock>children</CardBlock>,
      getProcessedComponentThemeKeys(cardBlockTheme)
    );
  });
});
