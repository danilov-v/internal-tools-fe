import React from 'react';
import { render } from '@testing-library/react';

import { Main } from './main';

describe('pages/main', () => {
  it('should render and match snapshot', () => {
    const page = render(<Main />);

    expect(page.baseElement).toMatchSnapshot();
  });
});
