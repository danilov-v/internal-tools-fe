import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestPersonnelDetails } from 'redux/personnel-details/thunks';
import { getPersonnelDetailsInfo } from 'redux/personnel-details/selectors';

import { Column, Divider, Row, Text } from 'components/layout';
import { Button } from 'components/buttons/Button';

import * as S from './PersonnelInfo.style';

type ComponentProps = {
  onToggleDialog: () => void;
  personnelId: number;
};

const PersonnelInfo: React.FC<ComponentProps> = ({
  personnelId,
  onToggleDialog,
}) => {
  const dispatch = useDispatch();
  const personnelInfo = useSelector(getPersonnelDetailsInfo);

  useEffect(() => {
    dispatch(requestPersonnelDetails(personnelId));
  }, [dispatch, personnelId]);

  if (!personnelInfo) {
    // TODO: loading here
    return null;
  }

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
          <Text>Должность:</Text>
          <Text>{personnelInfo.position}</Text>
        </Row>
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
          <Text>Телефон:</Text>
          <Text>{personnelInfo.phone}</Text>
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Семейное положение</Text>
          <Text>{personnelInfo.maritalStatus}</Text>
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

export { PersonnelInfo };
