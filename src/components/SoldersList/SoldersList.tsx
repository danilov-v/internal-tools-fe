import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useModal } from 'hooks/uiHooks';
import { useSoldiers, useUnits } from 'hooks/apiHooks';
import { Unit } from 'types/unit';
import { UNIT_ID } from 'helpers/constants';
import { Modal } from 'components/Modal';
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

const getPlatSoldiers = (
  departments: Unit[],
  coySoldiers: Soldier[],
): Soldier[] => {
  return coySoldiers.filter(({ unitId }) =>
    departments.some(({ id }) => id === unitId),
  );
};

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
      {soldiers.length === 0 ? (
        <S.NoSoldiersText>Пока нет военнослужащих.</S.NoSoldiersText>
      ) : (
        coy.map(plat => {
          const departments = getUnitChild(allUnits, plat.id);
          const platSoldiers = getPlatSoldiers(departments, soldiers);

          return (
            <Plat
              key={plat.id}
              plat={plat}
              departments={departments}
              platSoldiers={platSoldiers}
            />
          );
        })
      )}
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={onAddSoldierButtonClick} />
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      <Modal isOpened={itemModalOpen} handleClose={() => toggleModal()} />
    </S.SoldiersList>
  );
};
