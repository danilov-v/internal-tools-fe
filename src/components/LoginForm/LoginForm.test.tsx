import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import * as Router from '@reach/router';
import { DEFAULT_ADMIN_NAME, DEFAULT_ADMIN_PASSWORD } from 'services/auth';

import { LoginForm } from './LoginForm';

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

  it('should render error state and set default state when user is not valid', () => {
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

    fireEvent.submit(formElement);

    expect(loginInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(passwordInput).toHaveStyle('border-bottom: 2px solid #ff0000');
    expect(loginInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });

  it('should navigate to main page when user is valid', () => {
    const navigateSpy = jest.fn();
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateSpy);

    const component = getComponent();
    const loginInput = component.getByPlaceholderText(
      'Капитан',
    ) as HTMLInputElement;
    const passwordInput = component.getByPlaceholderText(
      'Пароль',
    ) as HTMLInputElement;
    const formElement = component.getByTestId('loginForm');

    fireEvent.change(loginInput, { target: { value: DEFAULT_ADMIN_NAME } });
    fireEvent.change(passwordInput, {
      target: { value: DEFAULT_ADMIN_PASSWORD },
    });
    fireEvent.submit(formElement);

    expect(navigateSpy).toHaveBeenCalledWith('/main');
  });
});
