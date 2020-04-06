import React from 'react';
import { Personnel } from 'types/personnel';

import * as S from './SoldiersList.style';

type SoldiersTableProps = {
  soldiers: Personnel[];
};

export const SoldiersTable: React.FC<SoldiersTableProps> = ({ soldiers }) => {
  return (
    <S.SoldiersTable>
      {soldiers.map((soldier, i) => (
        <S.SoldiersTableItem key={soldier.id}>
          <S.SoldierNumber>{i + 1}</S.SoldierNumber>
          <S.SoldierName
            to={`/personnel-details/${soldier.id}`}
          >{`${soldier.lastName} ${soldier.firstName} ${soldier.middleName}`}</S.SoldierName>
          <S.SoldierProms>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>+</span>
          </S.SoldierProms>
          <S.SoldierPenalties>
            <span>Н</span>
            <span>У</span>
            <span>Г</span>
          </S.SoldierPenalties>
        </S.SoldiersTableItem>
      ))}
    </S.SoldiersTable>
  );
};
