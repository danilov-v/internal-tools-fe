import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { LoginForm } from 'components/LoginForm';

export const SignIn: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}