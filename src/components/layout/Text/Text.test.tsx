import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Text } from './Text';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    children: '',
    ...props,
  };

  return render(<Text {...parsedProps} />);
};

describe('Text component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const primaryText = getComponent({
      align: 'center',
      children: 'children',
      mb: 100,
      mt: 20,
      variant: 'primary',
    });

    expect(primaryText.baseElement).toMatchSnapshot();
  });
});
