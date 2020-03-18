import React, { useState } from 'react';
import { useNavigate } from '@reach/router';
import { signIn } from 'services/auth';
import { LoginData } from 'types/auth';

import * as S from './LoginForm.style';

const DEFAULT_FORM_DATA = {
  login: '',
  password: '',
};

export const LoginForm: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>(DEFAULT_FORM_DATA);
  const [isValid, setValid] = useState<boolean>(true);

  const handleInput = (field: string) => (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();

    setValid(true);
    setFormData({
      ...formData,
      [field]: e.currentTarget.value,
    });
  };

  const handleLoginInput = handleInput('login');
  const handlePasswordInput = handleInput('password');

  const resetForm = (): void => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    signIn(formData)
      .then(() => {
        navigate('/main');

        return null;
      })
      .catch(() => {
        setValid(false);
        resetForm();
      });
  };

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
