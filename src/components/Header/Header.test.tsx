import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import 'jest-styled-components';

import { Header } from './Header';

describe('Header component', () => {
  const getComponent = (props = {}): RenderResult => {
    const parsedProps = {
      test: 'test',
      ...props,
    };

    return render(<Header {...parsedProps} />);
  };

  it('matches snapshot', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
