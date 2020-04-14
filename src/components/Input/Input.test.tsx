import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Input } from './Input';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<Input {...parsedProps} />);
};

describe('Input component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const primaryInput = getComponent({
      align: 'center',
      children: 'children',
      mb: 100,
      mt: 20,
      variant: 'primary',
    });

    expect(primaryInput.baseElement).toMatchSnapshot();
  });
});
