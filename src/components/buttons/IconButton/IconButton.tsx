import React, { MouseEvent, ReactNode } from 'react';

import * as S from './IconButton.style';

const IconButton: React.FC<IconButtonProps> = ({
  className = '',
  color = 'default',
  disabled = false,
  icon = null,
  name = '',
  onClick = () => {},
  type = 'button',
  variant = 'default',
}) => (
  <S.Container
    className={className}
    color={color}
    disabled={disabled}
    name={name}
    onClick={onClick}
    type={type}
    variant={variant}
  >
    {icon}
  </S.Container>
);

type IconButtonProps = {
  className?: string;
  color?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  icon: ReactNode;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'outlined';
};

export { IconButton };
