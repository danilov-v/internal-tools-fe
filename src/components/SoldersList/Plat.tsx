import React, { ReactElement } from 'react';
import { Unit } from 'types/unit';
import { Soldier } from 'types/soldier';
import { Accordion } from 'components/Accordion';
import { Department } from './Department';
import * as S from './SoldersList.style';

type PlatProps = {
  plat: Unit;
  departments: Unit[];
  platSoldiers: Soldier[];
};

const renderPlatButton = (title: string) => (
  toggle: Function,
  isExpanded: boolean,
): ReactElement => (
  <S.PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
    {title}
  </S.PlatButton>
);

export const Plat: React.FC<PlatProps> = ({
  plat,
  departments,
  platSoldiers,
}) => {
  return (
    <Accordion key={plat.id} isExpanded render={renderPlatButton(plat.name)}>
      {departments.map(department => (
        <Department
          key={department.id}
          soldiers={platSoldiers}
          unit={department}
        />
      ))}
    </Accordion>
  );
};
