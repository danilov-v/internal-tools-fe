import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

const testUser = { lastName: 'test', rank: 'captain', position: 'test' };

describe('<Avatar />', () => {
  it('should render and match snapshot', () => {
    const component = render(<Avatar user={testUser} />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
