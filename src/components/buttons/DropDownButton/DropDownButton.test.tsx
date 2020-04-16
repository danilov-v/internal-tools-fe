import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { DropDownButton } from './DropDownButton';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  return render(<DropDownButton {...parsedProps} />);
};

describe('DropDownButton component', () => {
  it('Should render and match snapshot', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('Should render Button with Down icon', () => {
    expect(getComponent().queryByTestId('down-svg')).toBeTruthy();
  });

  it('Should render Button with Up icon', () => {
    const component = getComponent({
      expanded: true,
    });

    expect(component.queryByTestId('up-svg')).toBeTruthy();
  });
});
