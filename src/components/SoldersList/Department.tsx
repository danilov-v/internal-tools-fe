import React, { ReactElement } from 'react';
import { Unit } from 'types/unit';
import { Soldier } from 'types/soldier';
import { Accordion } from 'components/Accordion';
import { filterBy } from 'helpers/utils';
import { SoldiersTable } from './SoldiersTable';

import * as S from './SoldersList.style';

type UnitPanelProps = {
  unit: Unit;
  soldiers: Soldier[];
};

const getDepartmentSoldiers = (
  departmentId: number,
  allSoldiers: Soldier[],
): Soldier[] => allSoldiers.filter(filterBy<Soldier>('unitId', departmentId));

const renderDepartmentButton = (title: string) => (
  toggle: Function,
  isExpanded: boolean,
): ReactElement => (
  <S.DivisionButton expanded={isExpanded} onClick={(): void => toggle()}>
    {title}
  </S.DivisionButton>
);

export const Department: React.FC<UnitPanelProps> = ({ unit, soldiers }) => {
  return soldiers.length !== 0 ? (
    <Accordion
      key={unit.id}
      isExpanded
      render={renderDepartmentButton(unit.name)}
    >
      <SoldiersTable soldiers={getDepartmentSoldiers(unit.id, soldiers)} />
    </Accordion>
  ) : null;
};
