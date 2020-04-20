import styled, { DefaultTheme } from 'styled-components';
import { Text } from 'components/layout/Text';

export type Colors = {
  green: keyof DefaultTheme;
  primary: keyof DefaultTheme;
  red: keyof DefaultTheme;
  secondary: keyof DefaultTheme;
  yellow: keyof DefaultTheme;
};

type Variants = {
  default: Properties;
  outlined: Properties;
  primary: Properties;
};

export type StyledInputProps = {
  align?: 'left' | 'right' | 'center';
  color?: keyof Colors;
  invalid?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  variant?: keyof Variants;
  warn?: boolean;
};

const COLORS: Colors = {
  green: 'primaryGreen',
  primary: 'darkGray',
  red: 'primaryRed',
  secondary: 'lightGray',
  yellow: 'primaryYellow',
};

const HOVER_COLORS: Colors = {
  green: 'primaryGreen',
  primary: 'darkGray',
  red: 'primaryRed',
  secondary: 'lightGray',
  yellow: 'primaryYellow',
};

type Properties = {
  borderBottom: number;
  borderWidth: number;
  color: Colors;
  hoverColor: Colors;
  padding: string;
};

const VARIANTS: Variants = {
  default: {
    borderBottom: 1,
    borderWidth: 0,
    color: COLORS,
    hoverColor: HOVER_COLORS,
    padding: '0 0 7px',
  },
  primary: {
    borderBottom: 0,
    borderWidth: 0,
    color: COLORS,
    hoverColor: {
      green: 'primaryGreen',
      primary: 'transparent',
      red: 'primaryRed',
      secondary: 'transparent',
      yellow: 'primaryYellow',
    },
    padding: 'none',
  },
  outlined: {
    borderBottom: 1,
    borderWidth: 1,
    color: COLORS,
    hoverColor: HOVER_COLORS,
    padding: '18px 14px',
  },
};

function getVariantProperty(
  variant: keyof Variants,
  property: 'color' | 'hoverColor',
  color: keyof Colors,
): keyof DefaultTheme;

function getVariantProperty(
  variant: keyof Variants,
  property: 'borderWidth' | 'borderBottom',
  color: keyof Colors,
): number;

function getVariantProperty(
  variant: keyof Variants,
  property: 'padding',
  color: keyof Colors,
): string;

function getVariantProperty(
  variant: keyof Variants,
  property: keyof Properties,
  color: keyof Colors,
): number | string | keyof DefaultTheme {
  return property === 'color' || property === 'hoverColor'
    ? VARIANTS[variant][property][color]
    : VARIANTS[variant][property];
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input.attrs(
  ({ align, color, variant }: StyledInputProps) => ({
    align: align || 'left',
    color: color || 'primary',
    variant: variant || 'default',
  }),
)<StyledInputProps>`
  -webkit-tap-highlight-color: transparent;
  background: none;
  border-color: ${({ theme, variant, color, invalid }) =>
    invalid ? theme.error : theme[getVariantProperty(variant, 'color', color)]};
  border-radius: 2px;
  border-style: solid;
  border-width: ${({ variant, color }) =>
    getVariantProperty(variant, 'borderWidth', color)}px;
  border-bottom-width: ${({ variant, color }) =>
    getVariantProperty(variant, 'borderBottom', color)}px;
  color: ${({ theme, variant, color }) =>
    theme[getVariantProperty(variant, 'color', color)]};
  font-size: 16px;
  margin: 0;
  outline: none;
  text-align: ${({ align }) => align};

  &:hover,
  &:focus {
    border-color: ${({ theme, color, variant }) =>
      theme[getVariantProperty(variant, 'hoverColor', color)]};
    box-shadow: 0 1px 0
      ${({ theme, color, variant }) =>
        variant === 'default' || variant === 'primary'
          ? theme[getVariantProperty(variant, 'hoverColor', color)]
          : 'none'};
  }
`;

export const ValidationError = styled(Text).attrs(() => ({
  variant: 'error',
}))`
  font-size: 12px;
`;
