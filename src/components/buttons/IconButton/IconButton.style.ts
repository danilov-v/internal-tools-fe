import styled from 'styled-components';

type ContainerProps = {
  color: 'default' | 'primary' | 'secondary';
  disabled: boolean;
  variant: 'default' | 'outlined';
};

enum COLORS {
  default = 'primaryGray',
  primary = 'primaryGreen',
  secondary = 'primaryRed',
}

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  border: ${({ color, theme, variant }) =>
    variant === 'outlined' ? `solid 1px ${theme[COLORS[color]]}` : 'none'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  height: 24px;
  justify-content: center;
  margin: 4px;
  padding: 4px;
  width: 24px;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }
`;
