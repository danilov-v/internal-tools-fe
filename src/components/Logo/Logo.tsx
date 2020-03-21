import React from 'react';
import logoCaptioned from './logo_captioned.svg';
import logo from './logo.svg';
import * as S from './Logo.styles';

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
    <S.LogoWrapper size={size} marginBottom={marginBottom}>
      {captioned ? (
        <S.LogoImage src={logoCaptioned} alt="logo" />
      ) : (
        <S.LogoImage src={logo} alt="logo" />
      )}
    </S.LogoWrapper>
  );
};
