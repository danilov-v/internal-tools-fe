import styled from 'styled-components';

type ContainerProps = {
  align: 'center' | 'justify' | 'left' | 'right';
  mb: number;
  mt: number;
  variant: 'error' | 'primary' | 'secondary';
};

const VARIANTS = {
  error: {
    color: 'error',
    fontSize: 14,
  },
  primary: {
    color: 'primaryGray',
    fontSize: 18,
  },
  secondary: {
    color: 'lightGray',
    fontSize: 16,
  },
};

function getVariantProperty(
  variant: 'error' | 'primary' | 'secondary',
  property: 'color',
): 'error' | 'primaryGray' | 'lightGray';

function getVariantProperty(
  variant: 'error' | 'primary' | 'secondary',
  property: 'fontSize',
): number;

function getVariantProperty(
  variant: 'error' | 'primary' | 'secondary',
  property: 'color' | 'fontSize',
): string | number {
  return VARIANTS[variant][property];
}

export const Container = styled.p<ContainerProps>`
  color: ${({ theme, variant }) => theme[getVariantProperty(variant, 'color')]};
  font-size: ${({ variant }) => getVariantProperty(variant, 'fontSize')}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-top: ${({ mt }) => mt}px;
  text-align: ${({ align }) => align};
`;
