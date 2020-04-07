import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDialog } from 'helpers/hooks/uiHooks';
import { useSoldiers, useUnits } from 'helpers/hooks/apiHooks';
import { Unit } from 'types/unit';
import { UNIT_ID } from 'configs/constants';
import { Dialog } from 'components/dialogs/Dialog';
import { Personnel } from 'types/personnel';
import { Plat } from './Plat';

import * as S from './SoldiersList.style';

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
  coySoldiers: Personnel[],
): Personnel[] => {
  return coySoldiers.filter(({ unitId }) =>
    departments.some(({ id }) => id === unitId),
  );
};

export const SoldersList: React.FC<RouteComponentProps> = () => {
  const [itemDialogOpen, toggleDialog] = useDialog();
  const [soldiers] = useSoldiers();
  const [allUnits] = useUnits();
  const coy = getUnitChild(allUnits);

  const onAddSoldierButtonClick = (): void => {
    toggleDialog();
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
      <Dialog isOpened={itemDialogOpen} handleClose={() => toggleDialog()} />
    </S.SoldiersList>
  );
};
