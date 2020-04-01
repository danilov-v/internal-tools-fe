import React from 'react';

import * as S from './Divider.style';

const Divider: React.FC<DividerProps> = ({ mb = 8, mt = 8 }) => (
  <S.Container mb={mb} mt={mt} />
);

type DividerProps = {
  mb?: number;
  mt?: number;
};

export { Divider };
