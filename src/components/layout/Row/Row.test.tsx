import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Row } from './Row';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    children: '',
    ...props,
  };

  return render(<Row {...parsedProps} />);
};

describe('Row component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const component = getComponent({
      justify: 'center',
      children: 'children',
      mb: 100,
      pt: 20,
    });

    expect(component.baseElement).toMatchSnapshot();
  });
});
