import React from 'react';

import * as S from './Text.style';

const Text: React.FC<TextProps> = ({
  align = 'left',
  children = '',
  className = '',
  component = 'p',
  mb = 0,
  mt = 0,
  variant = 'primary',
}) => (
  <S.Container
    align={align || 'left'}
    as={component}
    className={className}
    mb={mb}
    mt={mt}
    variant={variant || 'primary'}
  >
    {children}
  </S.Container>
);

type TextProps = {
  align?: 'center' | 'justify' | 'left' | 'right';
  className?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  mb?: number;
  mt?: number;
  variant?: 'error' | 'primary' | 'secondary';
};

export { Text };
