import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import 'jest-styled-components';

import { ReactComponent as Icon } from 'assets/icons/close.svg';
import { IconButton } from './IconButton';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    icon: <Icon />,
    ...props,
  };

  return render(<IconButton {...parsedProps} />);
};

describe('IconButton component', () => {
  it('matches snapshot with only required props', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshots with additional props', () => {
    const defaultPrimaryButton = getComponent({
      color: 'primary',
      disabled: true,
      type: 'button',
      variant: 'default',
    });
    const outlinedSecondaryButton = getComponent({
      color: 'secondary',
      name: 'name',
      type: 'submit',
      variant: 'outlined',
    });

    expect(defaultPrimaryButton.baseElement).toMatchSnapshot();
    expect(outlinedSecondaryButton.baseElement).toMatchSnapshot();
  });
});
