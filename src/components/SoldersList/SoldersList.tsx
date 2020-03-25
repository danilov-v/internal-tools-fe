import React, { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';

import * as S from './SoldersList.style';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../helpers/hooks';

const mockSoldier = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  middleName: 'Отчество',
};

export const SoldersList: React.FC<RouteComponentProps> = () => {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();

  const noSoldiers = (
    <S.NoSoldiersText>В роте нет военнослужащих.</S.NoSoldiersText>
  );

  const onAddSoldierButtonClick = () => {
    toggleModal();
    document.body.style.overflow = 'hidden';
  };

  return (
    <S.SoldiersList>
      <S.SoldiersHeader>Рота информационных технологий</S.SoldiersHeader>
      <S.AddSoldierContainer>
        <S.AddSoldierButton onClick={onAddSoldierButtonClick}>
          <S.PlusIcon />
        </S.AddSoldierButton>
        <S.AddSoldierText>Добавить военнослужащего</S.AddSoldierText>
      </S.AddSoldierContainer>
      {Object.entries(mockSoldier).length === 0 ? (
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
              {new Array(10).fill(mockSoldier).map((soldier, i) => (
                <S.SoldiersTableItem key={soldier.lastName + i}>
                  <S.SoldierNumber>{i + 1}</S.SoldierNumber>
                  <S.SoldierName to="1">{`${soldier.lastName} ${soldier.firstName} ${soldier.middleName}`}</S.SoldierName>
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
      <Modal
        isOpened={itemModalOpen}
        handleClose={() => setItemModalOpen(false)}
      />
    </S.SoldiersList>
  );
};
