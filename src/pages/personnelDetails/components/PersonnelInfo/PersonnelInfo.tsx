import React from 'react';
import { useSelector } from 'react-redux';

import { getPersonnelDetailsInfo } from 'redux/personnel-details/selectors';

import { Column, Divider, Row, Text } from 'components/layout';
import { Button } from 'components/buttons/Button';

import * as S from './PersonnelInfo.style';

type ComponentProps = {
  onToggleDialog: () => void;
};

export const PersonnelInfo: React.FC<ComponentProps> = ({ onToggleDialog }) => {
  const personnelInfo = useSelector(getPersonnelDetailsInfo);

  if (!personnelInfo) return null;

  return (
    <>
      <Row justify="space-between" mt={0}>
        <Column>
          <S.LastName>{personnelInfo.lastName}</S.LastName>
          <S.RestName>
            {personnelInfo.firstName} {personnelInfo.middleName}
          </S.RestName>
          <S.Rank>{personnelInfo.rankName}</S.Rank>
        </Column>
        <S.Avatar>
          <S.Initials>БД</S.Initials>
        </S.Avatar>
      </Row>

      <Divider mb={30} mt={30} />

      <Column>
        <Row justify="space-between" mt={0}>
          <Text>Дата призыва:</Text>
          {personnelInfo.calledAt && <Text>{personnelInfo.calledAt}</Text>}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Дата дембеля:</Text>
          {personnelInfo.demobilizationAt && (
            <Text>{personnelInfo.demobilizationAt}</Text>
          )}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Дата рождения:</Text>
          {personnelInfo.birthday && <Text>{personnelInfo.birthday}</Text>}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Семейное положение</Text>
          <Text>холост</Text>
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Взвод</Text>
          <Text>{personnelInfo.platName}</Text>
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Отделение</Text>
          <Text>{personnelInfo.unitName}</Text>
        </Row>
      </Column>

      <Row justify="center">
        <Column>
          <Button onClick={onToggleDialog}>Редактировать</Button>
        </Column>
      </Row>

      <Divider mb={30} mt={30} />
    </>
  );
};
