import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 200px);
  background-color: #ffffff;
  border-radius: 15px;
  width: 450px;
  height: 500px;
  margin: 0 auto;
  padding: 15px;
`;
