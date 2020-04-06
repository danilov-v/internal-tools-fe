import React from 'react';
import { waitForDomChange } from '@testing-library/dom';
import { act, fireEvent, render, RenderResult } from '@testing-library/react';
import * as Router from '@reach/router';
import { Provider } from 'react-redux';

import { getStore } from 'redux/store';
import { EMPTY_PROFILE, FULFILLED_PROFILE } from 'tests/slices/profile';
import { LoginForm } from './LoginForm';

jest.mock('services/http/auth');

const source = Router.createMemorySource('/starting/url');
const history = Router.createHistory(source);

describe('<LoginForm />', () => {
  const getComponent = (initialData = EMPTY_PROFILE): RenderResult => {
    const store = getStore(initialData);

    return render(
      <Router.LocationProvider history={history}>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </Router.LocationProvider>,
    );
  };

  it('should render and match snapshot', () => {
    const component = getComponent();

    expect(component.baseElement).toMatchSnapshot();
  });

  it('should redirect from login form if profile authorized', () => {
    const navigateSpy = jest.fn();
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateSpy);

    act(() => {
      getComponent(FULFILLED_PROFILE);
    });

    expect(navigateSpy).toHaveBeenCalledWith('/personnel');
  });

  it('should render error state and reset password when user is not valid', async () => {
    expect.assertions(4);

    const component = getComponent();

    const loginInput = component.getByPlaceholderText(
      'Имя пользователя',
    ) as HTMLInputElement;
    const passwordInput = component.getByPlaceholderText(
      'Пароль',
    ) as HTMLInputElement;
    const formElement = component.getByTestId('loginForm');

    fireEvent.change(loginInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });

    await act(async () => {
      fireEvent.submit(formElement);
      // FIXME: `waitForDomChange` is deprecated in latest versions of `@testing-library`
      await waitForDomChange();
    });

    expect(loginInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(passwordInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(loginInput.value).toBe('test');
    expect(passwordInput.value).toBe('');
  });
});
