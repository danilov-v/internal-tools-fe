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
  it('Should render and matche snapshot', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
