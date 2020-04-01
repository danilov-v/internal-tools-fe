import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';

import { Accordion } from './Accordion';

const getComponent = (props = {}, content = ''): RenderResult => {
  const parsedProps = {
    isExpanded: true,
    ...props,
  };

  return render(<Accordion {...parsedProps}>{content}</Accordion>);
};

describe('Accordion component', () => {
  it('matches snapshots with required props only', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });

  it('matches snapshot with additional props', () => {
    const component = getComponent({ title: 'title' });

    expect(component.baseElement).toMatchSnapshot();
  });

  it('expands by expand button click', () => {
    expect.assertions(2);

    const component = getComponent(
      { isExpanded: false, title: 'title' },
      'content',
    );

    const content = component.getByText('content');
    const button = component.getByText('title');

    expect(content).toHaveStyle('opacity: 0');

    fireEvent.click(button);

    expect(content).toHaveStyle('opacity: 1');
  });
});
