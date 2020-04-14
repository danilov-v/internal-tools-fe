import styled from 'styled-components';

type ContainerProps = {
  justify:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between';
  align?: 'center' | 'flex-end' | 'flex-start' | 'baseline';
  mb: number;
  ml: number;
  mr: number;
  mt: number;
  pb: number;
  pl: number;
  pr: number;
  pt: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  margin-right: ${({ mr }) => mr}px;
  margin-top: ${({ mt }) => mt}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-left: ${({ pl }) => pl}px;
  padding-right: ${({ pr }) => pr}px;
  padding-top: ${({ pt }) => pt}px;
`;
