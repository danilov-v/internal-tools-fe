import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/uiHooks';
import { useSoldiers, useUnits } from 'hooks/apiHooks';
import { Unit } from 'types/unit';
import { UNIT_ID } from 'helpers/constants';
import { sortBy } from 'helpers/utils';
import { Soldier } from 'types/soldier';
import { Plat } from './Plat';

import * as S from './SoldersList.style';

const getUnitChild = (units: Unit[], unitId = UNIT_ID): Unit[] => {
  return units.reduce((childUnits: Unit[], item) => {
    if (item.parentUnit === unitId) {
      return [...childUnits, item];
    }

    return childUnits;
  }, []);
};

const getPlatSoldiers = (platId: number, allSoldiers: Soldier[]): Soldier[] =>
  allSoldiers;

export const SoldersList: React.FC<RouteComponentProps> = () => {
  const [itemModalOpen, toggleModal] = useModal();
  const [soldiers] = useSoldiers();
  const [allUnits] = useUnits();
  const coy = getUnitChild(allUnits);

  const onAddSoldierButtonClick = (): void => {
    toggleModal();
  };

  return (
    <S.SoldiersList>
      <S.SoldiersHeader>Рота информационных технологий</S.SoldiersHeader>
      {coy.sort(sortBy<Unit>('name')).map(plat => (
        <Plat
          key={plat.id}
          plat={plat}
          departments={getUnitChild(allUnits, plat.id)}
          platSoldiers={getPlatSoldiers(plat.id, soldiers)}
        />
      ))}
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={onAddSoldierButtonClick} />
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      <Modal isOpened={itemModalOpen} handleClose={() => toggleModal()} />
    </S.SoldiersList>
  );
};
