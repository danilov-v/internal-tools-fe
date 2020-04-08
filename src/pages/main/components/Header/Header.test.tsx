import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import { getStore } from 'redux/store';

import { Header } from './Header';

describe('<Header />', () => {
  const getComponent = (): RenderResult => {
    const store = getStore();

    return render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  };

  it('should render and match snapshot', () => {
    expect(getComponent().baseElement).toMatchSnapshot();
  });
});
