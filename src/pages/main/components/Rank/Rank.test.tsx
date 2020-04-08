import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import { getStore } from 'redux/store';

import { EMPTY_PROFILE, FULFILLED_PROFILE } from 'tests/slices/profile';

import { Rank } from './Rank';

describe('<Rank />', () => {
  const getComponent = (initialStore = EMPTY_PROFILE): RenderResult => {
    const store = getStore(initialStore);

    return render(
      <Provider store={store}>
        <Rank />
      </Provider>,
    );
  };

  it('should render null when profile empty', () => {
    const component = getComponent();

    expect(component.baseElement).toMatchSnapshot();
  });

  it('should render and match snapshot profile exist', () => {
    const component = getComponent(FULFILLED_PROFILE);

    expect(component.baseElement).toMatchSnapshot();
  });
});
