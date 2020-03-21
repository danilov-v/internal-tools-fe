import styled from 'styled-components';

type LogoWrapperProps = {
  size?: 'small' | 'default' | 'large';
  marginBottom?: string;
};

const getLogoSize = (size?: 'small' | 'default' | 'large'): string => {
  const sizeName = size || 'default';

  const sizeMap = {
    default: '3rem', // 48px
    small: '1.5rem', // 24px
    large: '8.5rem', // ~135px
  };

  return sizeMap[sizeName];
};

export const LogoWrapper = styled.div`
  height: ${({ size }: LogoWrapperProps) => getLogoSize(size)};
  width: ${({ size }: LogoWrapperProps) => getLogoSize(size)};
  width: 3rem;
  margin-bottom: ${(props: LogoWrapperProps) =>
    `${props.marginBottom || '0'}px`};
  display: block;
`;

export const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
