import styled from 'styled-components';

type ContainerProps = {
  color: 'default' | 'primary' | 'secondary' | 'yellow';
  disabled: boolean;
  fullWidth: boolean;
  variant: 'contained' | 'outlined' | 'text';
};

const VARIANTS = {
  contained: {
    background: {
      default: 'primaryGray',
      primary: 'primaryGreen',
      secondary: 'primaryRed',
      yellow: 'primaryYellow',
    },
    border: 'solid 1px',
    color: {
      default: 'primaryWhite',
      primary: 'primaryWhite',
      secondary: 'primaryWhite',
      yellow: 'primaryWhite',
    },
    fontWeight: 400,
  },
  outlined: {
    background: {
      default: 'transparent',
      primary: 'transparent',
      secondary: 'transparent',
      yellow: 'transparent',
    },
    border: 'solid 1px',
    color: {
      default: 'primaryGray',
      primary: 'primaryGreen',
      secondary: 'primaryRed',
      yellow: 'primaryYellow',
    },
    fontWeight: 300,
  },
  text: {
    background: {
      default: 'transparent',
      primary: 'transparent',
      secondary: 'transparent',
      yellow: 'transparent',
    },
    border: 'none',
    color: {
      default: 'primaryGray',
      primary: 'primaryGreen',
      secondary: 'primaryRed',
      yellow: 'primaryYellow',
    },
    fontWeight: 400,
  },
};

function getVariantProperty(
  variant: 'contained' | 'outlined' | 'text',
  color: 'default' | 'primary' | 'secondary' | 'yellow',
  property: 'background',
):
  | 'primaryGray'
  | 'primaryGreen'
  | 'primaryRed'
  | 'transparent'
  | 'primaryYellow';

function getVariantProperty(
  variant: 'contained' | 'outlined' | 'text',
  color: 'default' | 'primary' | 'secondary' | 'yellow',
  property: 'color',
):
  | 'primaryGray'
  | 'primaryGreen'
  | 'primaryRed'
  | 'primaryWhite'
  | 'primaryYellow';

function getVariantProperty(
  variant: 'contained' | 'outlined' | 'text',
  color: 'default' | 'primary' | 'secondary' | 'yellow',
  property: 'border',
): 'none' | 'solid 1px';

function getVariantProperty(
  variant: 'contained' | 'outlined' | 'text',
  color: 'default' | 'primary' | 'secondary' | 'yellow',
  property: 'fontWeight',
): number;

function getVariantProperty(
  variant: 'contained' | 'outlined' | 'text',
  color: 'default' | 'primary' | 'secondary' | 'yellow',
  property: 'background' | 'border' | 'color' | 'fontWeight',
): string | number {
  return property === 'border' || property === 'fontWeight'
    ? VARIANTS[variant][property]
    : VARIANTS[variant][property][color];
}

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background-color: ${({ color, theme, variant }) =>
    theme[getVariantProperty(variant, color, 'background')]};
  border-radius: 4px;
  border: ${({ color, theme, variant }) =>
    getVariantProperty(variant, color, 'border') === 'none'
      ? getVariantProperty(variant, color, 'border')
      : `${getVariantProperty(variant, color, 'border')} ${
          theme[getVariantProperty(variant, color, 'color')]
        }`};
  color: ${({ color, theme, variant }) =>
    theme[getVariantProperty(variant, color, 'color')]};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-size: 18px;
  font-weight: ${({ color, variant }) =>
    getVariantProperty(variant, color, 'fontWeight')};
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  padding: 6px 12px;
  width: ${({ fullWidth }) => (fullWidth ? '100%;' : 'auto')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }
`;

type TextProps = {
  endIcon: boolean;
  startIcon: boolean;
};

export const Text = styled.span<TextProps>`
  margin-left: ${({ startIcon }) => (startIcon ? 8 : 0)}px;
  margin-right: ${({ endIcon }) => (endIcon ? 8 : 0)}px;
`;
