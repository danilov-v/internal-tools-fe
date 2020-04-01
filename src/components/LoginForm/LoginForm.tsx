import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';

import { loginFormInput } from 'redux/ui/slice';
import { getLoginForm as getLoginFormSelector } from 'redux/ui/selectors';

import { login } from 'redux/profile/thunks';
import { isAuthorizedProfile as isAuthorizedProfileSelector } from 'redux/profile/selectors';

import * as S from './LoginForm.style';

export const LoginForm: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthorizedProfile = useSelector(isAuthorizedProfileSelector);
  const loginFormData = useSelector(getLoginFormSelector);

  const { formData, error } = loginFormData;
  const isValid = !error;

  const handleInput = (field: 'login' | 'password') => (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();

    dispatch(
      loginFormInput({ fieldName: field, value: e.currentTarget.value }),
    );
  };

  const handleLoginInput = handleInput('login');
  const handlePasswordInput = handleInput('password');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(login(formData));
  };

  if (isAuthorizedProfile) {
    navigate('personnel');
    return null;
  }

  return (
    <S.LoginForm onSubmit={handleSubmit} data-testid="loginForm">
      <S.InputField
        type="text"
        value={formData.login}
        placeholder="Капитан"
        onChange={handleLoginInput}
        isValid={isValid}
      />
      <br />
      <S.InputField
        type="password"
        value={formData.password}
        placeholder="Пароль"
        onChange={handlePasswordInput}
        isValid={isValid}
        marginBottom={80}
      />
      <br />
      <S.SubmitButton type="submit" name="submit">
        Войти в ИТ
      </S.SubmitButton>
    </S.LoginForm>
  );
};
