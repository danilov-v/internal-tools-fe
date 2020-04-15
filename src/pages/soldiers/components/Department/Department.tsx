import React, { ReactElement } from 'react';
import { filter } from 'lodash';
import { Unit } from 'types/unit';
import { Personnel } from 'types/personnel';
import { Accordion } from 'components/Accordion';
import { SoldiersTable } from '../SoldiersTable/SoldiersTable';

import { DivisionButton } from './Department.style';

type UnitPanelProps = {
  unit: Unit;
  soldiers: Personnel[];
};

const getDepartmentSoldiers = (
  departmentId: number,
  allSoldiers: Personnel[],
): Personnel[] => filter(allSoldiers, { unitId: departmentId });

const renderDepartmentButton = (title: string) => (
  toggle: () => void,
  isExpanded: boolean,
): ReactElement => (
  <DivisionButton variant="text" expanded={isExpanded} onClick={toggle}>
    {title}
  </DivisionButton>
);

export const Department: React.FC<UnitPanelProps> = ({ unit, soldiers }) => {
  return soldiers.length !== 0 ? (
    <Accordion
      key={unit.id}
      isExpanded
      render={renderDepartmentButton(`${unit.name} отделение`)}
    >
      <SoldiersTable soldiers={getDepartmentSoldiers(unit.id, soldiers)} />
    </Accordion>
  ) : null;
};
