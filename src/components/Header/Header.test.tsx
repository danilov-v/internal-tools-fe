import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import 'jest-styled-components';

import { Header } from './Header';

describe('Header component', () => {
  const getComponent = (): RenderResult => {
    return render(<Header />);
  };

  it('matches snapshot', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
