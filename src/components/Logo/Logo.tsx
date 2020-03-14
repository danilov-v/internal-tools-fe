import React from 'react';
import logo from './logo.svg';
import * as S from './Logo.styles';

export const Logo: React.FC<{}> = () => {
  return (
    <S.div>
      <S.img src={logo} alt="logo" />
    </S.div>
  );
};
