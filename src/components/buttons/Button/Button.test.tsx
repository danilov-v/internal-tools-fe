import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { ReactComponent as Icon } from 'assets/icons/plus.svg';
import { Button } from './Button';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<Button {...parsedProps} />);
};

describe('Button component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshots with additional props', () => {
    const containedPrimaryButton = getComponent({
      children: 'children',
      color: 'primary',
      disabled: true,
      type: 'button',
      variant: 'contained',
    });
    const outlinedSecondaryButton = getComponent({
      color: 'secondary',
      fullWidth: true,
      name: 'name',
      type: 'submit',
      variant: 'outlined',
    });
    const textYellowButton = getComponent({
      children: 'children',
      color: 'yellow',
      startIcon: <Icon />,
      type: 'reset',
      variant: 'text',
    });

    expect(containedPrimaryButton.baseElement).toMatchSnapshot();
    expect(outlinedSecondaryButton.baseElement).toMatchSnapshot();
    expect(textYellowButton.baseElement).toMatchSnapshot();
  });
});
