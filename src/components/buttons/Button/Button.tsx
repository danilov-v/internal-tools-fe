import React, { MouseEvent, ReactNode } from 'react';

import * as S from './Button.style';

const Button: React.FC<ButtonProps> = ({
  children = '',
  className = '',
  color = 'default',
  disabled = false,
  endIcon = null,
  fullWidth = false,
  name = '',
  onClick = () => {},
  startIcon = null,
  type = 'button',
  variant = 'outlined',
}) => (
  <S.Container
    className={className}
    color={color}
    disabled={disabled}
    fullWidth={fullWidth}
    name={name}
    onClick={onClick}
    type={type}
    variant={variant}
  >
    {startIcon}
    <S.Text startIcon={!!startIcon} endIcon={!!endIcon}>
      {children}
    </S.Text>
    {endIcon}
  </S.Container>
);

type ButtonProps = {
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'yellow';
  disabled?: boolean;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined' | 'text';
};

export { Button };
