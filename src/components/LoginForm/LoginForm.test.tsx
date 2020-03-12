import React from 'react';
import { render } from '@testing-library/react';

import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
  it('should render and match snapshot', () => {
    const component = render(<LoginForm />);

    expect(component.baseElement).toMatchSnapshot();
  });
});