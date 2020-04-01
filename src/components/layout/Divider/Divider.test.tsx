import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Divider } from './Divider';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<Divider {...parsedProps} />);
};

describe('Divider component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const component = getComponent({
      children: 'children',
      mb: 100,
      mt: 20,
    });

    expect(component.baseElement).toMatchSnapshot();
  });
});
