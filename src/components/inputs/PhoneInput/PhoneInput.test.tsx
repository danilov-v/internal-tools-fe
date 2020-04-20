import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { PhoneInput } from './PhoneInput';

import 'jest-styled-components';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<PhoneInput {...parsedProps} />);
};

describe('PhoneInput component', () => {
  it('matches snapshot with required props only', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
