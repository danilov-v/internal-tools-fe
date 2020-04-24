import styled from 'styled-components';

export const DialogBackground = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.overlayBackground};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 101;
`;

export const DialogWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  padding: 15px;
  width: 450px;
`;
