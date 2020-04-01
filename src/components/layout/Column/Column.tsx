import React from 'react';

import * as S from './Column.style';

const Column: React.FC<ColumnProps> = ({
  align = 'normal',
  className = '',
  children = '',
  mb = 8,
  ml = 0,
  mr = 0,
  mt = 8,
  pb = 0,
  pl = 0,
  pr = 0,
  pt = 0,
}) => (
  <S.Container
    align={align}
    className={className}
    mb={mb}
    ml={ml}
    mr={mr}
    mt={mt}
    pb={pb}
    pl={pl}
    pr={pr}
    pt={pt}
  >
    {children}
  </S.Container>
);

type ColumnProps = {
  align?: 'center' | 'flex-end' | 'flex-start' | 'normal';
  className?: string;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
};

export { Column };
