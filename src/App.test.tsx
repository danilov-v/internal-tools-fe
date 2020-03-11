import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import 'jest-styled-components';

import { App } from './App';

describe('App component', () => {
  const getComponent = (props = {}): RenderResult => {
    const parsedProps = {
      ...props,
    };

    return render(<App {...parsedProps} />);
  };

  it('renders header first', () => {
    const { container } = getComponent();

    expect(container.firstChild).toHaveTextContent('There will be header');
  });
});
