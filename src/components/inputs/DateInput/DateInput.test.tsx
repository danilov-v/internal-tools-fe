import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { DateInput } from './DateInput';

import 'jest-styled-components';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<DateInput {...parsedProps} />);
};

describe('DateInput component', () => {
  it('matches snapshot with required props only', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
