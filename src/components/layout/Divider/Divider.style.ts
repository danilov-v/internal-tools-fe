import styled from 'styled-components';

type ContainerProps = {
  mb: number;
  mt: number;
};

export const Container = styled.div<ContainerProps>`
  height: 1px;
  background-color: ${({ theme }) => theme.lightGray};
  margin-bottom: ${({ mb }) => mb}px;
  margin-top: ${({ mt }) => mt}px;
  width: 100%;
`;
