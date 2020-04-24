import styled from 'styled-components';

export const DialogBackground = styled.div`
  background-color: ${({ theme }) => theme.overlayBackground};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DialogWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  padding: 15px;
  width: 450px;
`;
