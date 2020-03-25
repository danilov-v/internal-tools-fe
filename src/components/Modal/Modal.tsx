import React from 'react';

import * as S from './Modal.style';

type ModalProps = {
  isOpened: boolean;
  handleClose: Function;
};

export const Modal: React.FC<ModalProps> = ({
  isOpened,
  children,
  handleClose,
}) => {
  const handleClickOutside = (): void => {

  };
  return isOpened ? (
    <S.ModalBackground onClick={(): any => handleClose()}>
      <S.ModalWrapper>{children}</S.ModalWrapper>
    </S.ModalBackground>
  ) : null;
};
