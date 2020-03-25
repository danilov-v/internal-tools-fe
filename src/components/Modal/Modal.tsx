import React from 'react';

import * as S from './Modal.style';

type ModalProps = {
  isOpened: boolean;
  handleClose: Function;
};

export const Modal: React.FC<ModalProps> = ({ isOpened }) => {
  return isOpened ? (
    <S.ModalBackground>
      <S.ModalWrapper>{1}</S.ModalWrapper>
    </S.ModalBackground>
  ) : null;
};
