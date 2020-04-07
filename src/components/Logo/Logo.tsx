import React from 'react';

import logoCaptioned from 'assets/logo_captioned.svg';
import logo from 'assets/logo.svg';
import * as S from './Logo.style';

type LogoProps = {
  size?: 'default' | 'small' | 'large';
  marginBottom?: string;
  captioned?: boolean;
};

export const Logo: React.FC<LogoProps> = ({
  size,
  marginBottom,
  captioned,
}) => {
  return (
    <S.LogoWrapper size={size} marginBottom={marginBottom} title="logo">
      {captioned ? (
        <S.LogoImage src={logoCaptioned} alt="logo" />
      ) : (
        <S.LogoImage src={logo} alt="logo" />
      )}
    </S.LogoWrapper>
  );
};
