import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render and match snapshot', () => {
    const component = render(<Logo />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
