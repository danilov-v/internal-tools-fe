import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Button } from 'components/buttons/Button';
import { withDropDownIndicator } from './withDropDownIndicator';

const getComponent = (props = {}): RenderResult => {
  const parsedProps = {
    ...props,
  };

  const DropDownButton = withDropDownIndicator(Button);

  return render(<DropDownButton {...parsedProps} />);
};

describe('withDropDownIndicator hight order component', () => {
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
