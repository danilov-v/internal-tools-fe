import React from 'react';
import { render } from '@testing-library/react';

import { SignIn } from './signIn';

describe('pages/signIn', () => {
  it('should render and match snapshot', () => {
    const component = render(<SignIn />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
