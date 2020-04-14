import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { Unit } from 'types/unit';
import { UNIT_ID } from 'configs/constants';

import { requestPersonnel } from 'redux/personnel/thunks';
import { requestUnits } from 'redux/unit/thunks';

import { getPersonnel } from 'redux/personnel/selectors';
import { getUnits } from 'redux/unit/selectors';

import { Personnel } from 'types/personnel';

import { Plat } from 'pages/soldiers/components/Plat';

import * as S from './SoldiersList.style';

interface SoldersListProps extends RouteComponentProps {
  toggleCreateForm: () => void;
}

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

export const SoldersList: React.FC<SoldersListProps> = ({
  toggleCreateForm,
}) => {
  const dispatch = useDispatch();
  const personnels = useSelector(getPersonnel);
  const units = useSelector(getUnits);
  const coy = getUnitChild(units);

  useEffect(() => {
    dispatch(requestPersonnel(UNIT_ID));
    dispatch(requestUnits());
  }, [dispatch]);

  return (
    <S.SoldiersList>
      <S.SoldiersHeader>Рота информационных технологий</S.SoldiersHeader>
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={toggleCreateForm} />
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      {personnels.length === 0 ? (
        <S.NoSoldiersText>Пока нет военнослужащих.</S.NoSoldiersText>
      ) : (
        coy.map(plat => {
          const departments = getUnitChild(units, plat.id);
          const platSoldiers = getPlatSoldiers(departments, personnels);

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
    </S.SoldiersList>
  );
};
