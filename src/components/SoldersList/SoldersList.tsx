import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/uiHooks';
import { useSoldiers } from 'hooks/apiHooks';
import { Soldier } from 'types/soldier';

import * as S from './SoldersList.style';

export const SoldersList: React.FC<RouteComponentProps> = () => {
  const [itemModalOpen, toggleModal] = useModal();
  const [soldiers] = useSoldiers();

  const noSoldiers = (
    <S.NoSoldiersText>В роте нет военнослужащих.</S.NoSoldiersText>
  );

  const onAddSoldierButtonClick = (): void => {
    toggleModal();
  };

  return (
    <S.SoldiersList>
      <S.SoldiersHeader>Рота информационных технологий</S.SoldiersHeader>
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={onAddSoldierButtonClick} />
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      {Object.entries(soldiers).length === 0 ? (
        noSoldiers
      ) : (
        <Accordion
          isExpanded
          render={(toggle: Function, isExpanded: boolean): ReactElement => (
            <S.PlatButton expanded={isExpanded} onClick={(): void => toggle()}>
              <span>{1}</span>
              взвод
            </S.PlatButton>
          )}
        >
          <Accordion
            isExpanded
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
              {soldiers.map((soldier: Soldier) => (
                <S.SoldiersTableItem key={soldier.id}>
                  <S.SoldierNumber>{soldier.id}</S.SoldierNumber>
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
        </Accordion>
      )}
      <Modal isOpened={itemModalOpen} handleClose={() => toggleModal()} />
    </S.SoldiersList>
  );
};
