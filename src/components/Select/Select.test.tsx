import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { Select } from './Select';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    onChange: jest.fn(),
    ...props,
  };

  return render(<Select {...parsedProps} />);
};

describe('Select component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const primarySelect = getComponent({
      label: 'center',
      name: 'name',
      options: [
        { name: 'option 1', value: 'option-1' },
        { name: 'option 2', value: 'option-2' },
      ],
      placeholder: 'placeholder',
    });

    expect(primarySelect.baseElement).toMatchSnapshot();
  });
});
