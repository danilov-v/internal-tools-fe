import React from 'react';
import { render } from '@testing-library/react';

import { Soldiers } from './soldiers';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('pages/soldiers', () => {
  it('should render and match snapshot', () => {
    const page = render(<Soldiers />);

    expect(page.baseElement).toMatchSnapshot();
  });
});
