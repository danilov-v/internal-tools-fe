import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';

import * as S from './SoldersList.style';

const mockSoldier = {
  // firstName: 'Имя',
  // lastName: 'Фамилия',
  // middleName: 'Отчество',
};

export const SoldersList: React.FC<RouteComponentProps> = () => {
  const noSoldiers = <S.NoSoldiers>В роте нет военнослужащих.</S.NoSoldiers>;
  return (
    <S.SoldiersList>
      <S.SoldiersHeader>Рота информационных технологий</S.SoldiersHeader>
      {Object.entries(mockSoldier).length === 0 ? (
        noSoldiers
      ) : (
        <Accordion
          isExpanded={false}
          render={(toggle: Function, isExpanded: boolean): ReactElement => (
            <S.PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
              <span>{1}</span>
              взвод
            </S.PlatButton>
          )}
        >
          <Accordion
            isExpanded={false}
            render={(toggle: Function, isExpanded: boolean): ReactElement => (
              <S.DivisionButton
                expanded={isExpanded}
                onClick={(): void => toggle()}
              >
                <span>{1}</span>
                Отделение
              </S.DivisionButton>
            )}
          >
            <S.SoldiersTable>
              {new Array(10).fill(mockSoldier).map((soldier, id) => (
                <S.SoldiersTableItem key={id}>
                  <S.SoldierNumber>{id + 1}</S.SoldierNumber>
                  <S.SoldierName>{`${soldier.lastName} ${soldier.firstName} ${soldier.middleName}`}</S.SoldierName>
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
          </Accordion>
        </Accordion>
      )}
    </S.SoldiersList>
  );
};
