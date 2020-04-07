import React from 'react';

import * as S from './Dialog.style';

type DialogProps = {
  handleClose: Function;
  isOpened: boolean;
};

const Dialog: React.FC<DialogProps> = ({ children, handleClose, isOpened }) => {
  return isOpened ? (
    <S.DialogBackground onClick={(): void => handleClose()}>
      <S.DialogWrapper>{children}</S.DialogWrapper>
    </S.DialogBackground>
  ) : null;
};

export { Dialog };
