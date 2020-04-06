import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';

import { requestLogin } from 'redux/profile/thunks';
import { isAuthorizedProfile, getProfileError } from 'redux/profile/selectors';

import * as S from './LoginForm.style';

const DEFAULT_FORM_DATA = {
  login: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [isPristine, setPristine] = useState<boolean>(true);

  const isAuthorized = useSelector(isAuthorizedProfile);
  const profileError = useSelector(getProfileError);

  const isValid = isPristine || !profileError;

  const handleInput = (field: 'login' | 'password') => (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();

    setFormData({ ...formData, [field]: e.currentTarget.value });
  };

  useEffect(() => {
    const resetPassword = (): void => {
      setFormData(state => ({ ...state, password: '' }));
    };

    if (!isValid) {
      resetPassword();
    }
  }, [isValid]);

  const handleLoginInput = handleInput('login');
  const handlePasswordInput = handleInput('password');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setPristine(false);

    dispatch(requestLogin(formData));
  };

  if (isAuthorized) {
    navigate('/personnel');
    return null;
  }

  return (
    <S.LoginForm onSubmit={handleSubmit} data-testid="loginForm">
      <S.InputField
        type="text"
        value={formData.login}
        placeholder="Имя пользователя"
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
