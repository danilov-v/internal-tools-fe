import React, { ReactElement } from 'react';
import { filterBy } from 'helpers/utils';
import { Unit } from 'types/unit';
import { Personnel } from 'types/personnel';
import { Accordion } from 'components/Accordion';
import { SoldiersTable } from './SoldiersTable';

import { DivisionButton } from './SoldiersList.style';

type UnitPanelProps = {
  unit: Unit;
  soldiers: Personnel[];
};

const getDepartmentSoldiers = (
  departmentId: number,
  allSoldiers: Personnel[],
): Personnel[] =>
  allSoldiers.filter(filterBy<Personnel>('unitId', departmentId));

const renderDepartmentButton = (title: string) => (
  toggle: Function,
  isExpanded: boolean,
): ReactElement => (
  <DivisionButton expanded={isExpanded} onClick={(): void => toggle()}>
    {title}
  </DivisionButton>
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
