import React, { ReactElement } from 'react';
import { Unit } from 'types/unit';
import { Personnel } from 'types/personnel';
import { Accordion } from 'components/Accordion';
import { Department } from './Department';
import { PlatButton } from './SoldiersList.style';

type PlatProps = {
  plat: Unit;
  departments: Unit[];
  platSoldiers: Personnel[];
};

const renderPlatButton = (title: string) => (
  toggle: Function,
  isExpanded: boolean,
): ReactElement => (
  <PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
    {title}
  </PlatButton>
);

export const Plat: React.FC<PlatProps> = ({
  plat,
  departments,
  platSoldiers,
}) => {
  return platSoldiers.length !== 0 ? (
    <Accordion key={plat.id} isExpanded render={renderPlatButton(plat.name)}>
      {departments.map(department => (
        <Department
          key={department.id}
          soldiers={platSoldiers}
          unit={department}
        />
      ))}
    </Accordion>
  ) : null;
};
