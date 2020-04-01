import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Column } from './Column';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<Column {...parsedProps} />);
};

describe('Column component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const component = getComponent({
      align: 'center',
      children: 'children',
      mb: 100,
      pt: 20,
    });

    expect(component.baseElement).toMatchSnapshot();
  });
});
