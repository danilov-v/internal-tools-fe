import React from 'react';

export const LoginForm: React.FC<{}> = () => {
  return (
    <form>
      <input type="text" /><br />
      <input type="password" /><br />
      <button type="submit">Войти в ИТ</button>
    </form >
  )
};