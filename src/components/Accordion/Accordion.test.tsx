import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Accordion } from './Accordion';

describe('<Accordion />', () => {
  it('should render and match snapshot', () => {
    const component = render(<Accordion title="title" isExpanded />);

    expect(component.baseElement).toMatchSnapshot();
  });

  it('should expand on expand btn click', () => {
    expect.assertions(2);

    const component = render(
      <Accordion title="title" isExpanded={false}>
        content
      </Accordion>,
    );
    const content = component.getByText('content');
    const btn = component.getByText('title');

    expect(content).toHaveStyle('opacity: 0');
    fireEvent.click(btn);
    expect(content).toHaveStyle('opacity: 1');
  });
});
