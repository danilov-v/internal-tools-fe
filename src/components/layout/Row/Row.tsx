import React from 'react';

import * as S from './Row.style';

const Row: React.FC<RowProps> = ({
  justify = 'flex-start',
  children = '',
  className = '',
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
    className={className}
    justify={justify}
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

type RowProps = {
  className?: string;
  justify?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between';
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
};

export { Row };
