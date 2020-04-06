import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';

import { Logo } from 'components/Logo';
import { LoginForm } from './components/LoginForm';

const SignInWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SignIn: React.FC<RouteComponentProps> = () => {
  return (
    <SignInWrapper>
      <Logo size="large" marginBottom="104" captioned />
      <LoginForm />
    </SignInWrapper>
  );
};
