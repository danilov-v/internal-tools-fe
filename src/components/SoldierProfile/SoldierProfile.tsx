import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Accordion } from 'components/Accordion';
import { PlusButton } from 'components/Button';
import { useSoldier } from 'hooks/apiHooks';

import * as S from './SoldierProfile.style';

interface SoldierProfileProps extends RouteComponentProps {
  soldierId?: string;
}

export const SoldierProfile: React.FC<SoldierProfileProps> = ({
  soldierId,
}) => {
  const [solidier] = useSoldier(soldierId || '');

  return solidier ? (
    <S.SoldierProfile>
      <S.Section>
        <S.SoldierPhoto>
          <img src={`${process.env.PUBLIC_URL}/example_photo.png`} alt="" />{' '}
        </S.SoldierPhoto>
        <S.SoldierLastName>{solidier.lastName}</S.SoldierLastName>
        <S.SoldierFirstName>{`${solidier.firstName} ${solidier.middleName}`}</S.SoldierFirstName>
        <S.SoldierRang>{solidier.rankId}</S.SoldierRang>
      </S.Section>
      <S.Section>
        <S.SoldierInfoItem>
          <S.FieldName>Дата призыва</S.FieldName>
          <S.FieldValue>{solidier.calledAt}</S.FieldValue>
        </S.SoldierInfoItem>
        <S.SoldierInfoItem>
          <S.FieldName>Дата дембеля</S.FieldName>
          <S.FieldValue>{solidier.demobilizationAt}</S.FieldValue>
        </S.SoldierInfoItem>
        <S.SoldierInfoItem>
          <S.FieldName>Дата рождения</S.FieldName>
          <S.FieldValue>{solidier.birthday}</S.FieldValue>
        </S.SoldierInfoItem>
        <S.SoldierInfoItem>
          <S.FieldName>Семейное положение</S.FieldName>
          <S.FieldValue>холост</S.FieldValue>
        </S.SoldierInfoItem>

        <S.SoldierInfoItem marginTop="40">
          <S.FieldName>Взвод</S.FieldName>
          <S.FieldValue>{1}</S.FieldValue>
        </S.SoldierInfoItem>

        <S.SoldierInfoItem>
          <S.FieldName>отделение</S.FieldName>
          <S.FieldValue>{1}</S.FieldValue>
        </S.SoldierInfoItem>

        <S.EditButton>Редактировать</S.EditButton>
      </S.Section>
      <S.SoldierColoredSection color="#b3ff80">
        <h3>Поощрения:</h3>
        <S.SubText>Нет активных поощрений</S.SubText>
        <div>
          <PlusButton color="#b3ff80" />
          <S.SubText>Добавить поощрение</S.SubText>
        </div>
      </S.SoldierColoredSection>
      <S.SoldierColoredSection color="#ffdc62">
        <h3>Взыскания:</h3>
        <S.SubText>Нет активных взысканий</S.SubText>
        <div>
          <PlusButton color="#ffdc62" />
          <S.SubText>Добавить взыскание</S.SubText>
        </div>
      </S.SoldierColoredSection>

      <Accordion
        isExpanded
        render={(toggle, isExpanded) => (
          <S.PropmsArchiveBtn expanded={isExpanded} onClick={() => toggle()}>
            Архив
          </S.PropmsArchiveBtn>
        )}
      >
        <S.SubText>
          Здесь будут отображаться реализованные поощрения и взыскания
          военнослужащего
        </S.SubText>
      </Accordion>
    </S.SoldierProfile>
  ) : (
    <span>waiting for soldier...</span>
  );
};
