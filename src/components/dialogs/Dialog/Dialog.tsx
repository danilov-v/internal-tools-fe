import React from 'react';

import * as S from './Dialog.style';

type DialogProps = {
  handleClose?: () => void;
  isOpened: boolean;
};

const stopPropagation = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
): void => {
  event.stopPropagation();
};

const Dialog: React.FC<DialogProps> = ({ children, handleClose, isOpened }) => {
  return isOpened ? (
    <S.DialogBackground onClick={handleClose}>
      <S.DialogWrapper onClick={stopPropagation}>{children}</S.DialogWrapper>
    </S.DialogBackground>
  ) : null;
};

export { Dialog };
