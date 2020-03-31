import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/uiHooks';
import { useSoldiers, useUnits } from 'hooks/apiHooks';
import { Unit } from 'types/unit';
import { UNIT_ID } from 'helpers/constants';
import { sortBy, filterBy } from 'helpers/utils';
import { Soldier } from 'types/soldier';
import * as S from './SoldersList.style';

const getUnitChild = (units: Unit[], unitId = UNIT_ID): Unit[] => {
  return units.reduce((childUnits: Unit[], item) => {
    if (item.parentUnit === unitId) {
      return [...childUnits, item];
    }

    return childUnits;
  }, []);
};

const noSoldiers = (
  <S.NoSoldiersText>Пока нет военнослужащих.</S.NoSoldiersText>
);

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

      {coy.map(plat => (
        <Accordion
          key={plat.id}
          isExpanded
          render={(toggle: Function, isExpanded: boolean): ReactElement => (
            <S.PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
              {plat.name}
            </S.PlatButton>
          )}
        >
          {getUnitChild(allUnits, plat.id)
            .sort(sortBy<Unit>('name'))
            .map(department => (
              <Accordion
                key={department.id}
                isExpanded
                render={(
                  toggle: Function,
                  isExpanded: boolean,
                ): ReactElement => (
                  <S.DivisionButton
                    expanded={isExpanded}
                    onClick={(): void => toggle()}
                  >
                    {department.name}
                  </S.DivisionButton>
                )}
              >
                <S.SoldiersTable>
                  {soldiers
                    .filter(filterBy<Soldier>('unitId', department.id))
                    .map((soldier, i) => (
                      <S.SoldiersTableItem key={soldier.id}>
                        <S.SoldierNumber>{i + 1}</S.SoldierNumber>
                        <S.SoldierName
                          to={`${soldier.id}`}
                        >{`${soldier.lastName} ${soldier.firstName} ${soldier.middleName}`}</S.SoldierName>
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
            ))}
        </Accordion>
      ))}
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={onAddSoldierButtonClick} />
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      <Modal isOpened={itemModalOpen} handleClose={() => toggleModal()} />
    </S.SoldiersList>
  );
};
