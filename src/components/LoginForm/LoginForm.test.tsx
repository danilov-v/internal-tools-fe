import React from 'react';
import { render, fireEvent, RenderResult, act } from '@testing-library/react';
import * as Router from '@reach/router';

import { LoginForm } from './LoginForm';

jest.mock('services/auth');

const source = Router.createMemorySource('/starting/url');
const history = Router.createHistory(source);

describe('<LoginForm />', () => {
  const getComponent = (): RenderResult => {
    return render(
      <Router.LocationProvider history={history}>
        <LoginForm />
      </Router.LocationProvider>,
    );
  };

  it('should render and match snapshot', () => {
    const component = getComponent();

    expect(component.baseElement).toMatchSnapshot();
  });

  it('should render error state and set default state when user is not valid', async () => {
    expect.assertions(4);

    const component = getComponent();

    const loginInput = component.getByPlaceholderText(
      'Капитан',
    ) as HTMLInputElement;
    const passwordInput = component.getByPlaceholderText(
      'Пароль',
    ) as HTMLInputElement;
    const formElement = component.getByTestId('loginForm');

    fireEvent.change(loginInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });

    await act(async () => {
      fireEvent.submit(formElement);
    });

    expect(loginInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(passwordInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(loginInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });

  it('should navigate to main page when user is valid', async () => {
    expect.assertions(1);

    const navigateSpy = jest.fn();
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateSpy);

    const component = getComponent();
    const formElement = component.getByTestId('loginForm');
    const loginInput = component.getByPlaceholderText(
      'Капитан',
    ) as HTMLInputElement;

    fireEvent.change(loginInput, { target: { value: 'admin' } });

    await act(async () => {
      fireEvent.submit(formElement);
    });

    expect(navigateSpy).toHaveBeenCalledWith('/main');
  });
});
