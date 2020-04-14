import styled from 'styled-components';

export const DialogBackground = styled.div`
  background-color: ${({ theme }) => theme.overlayBackground};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 101;
`;

export const DialogWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  left: calc(50% - 200px);
  margin: 0 auto;
  min-height: 500px;
  padding: 15px;
  position: absolute;
  top: calc(50% - 360px);
  width: 450px;
`;
