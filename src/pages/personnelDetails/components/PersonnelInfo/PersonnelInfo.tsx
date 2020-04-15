import React from 'react';

import { Column, Divider, Row, Text } from 'components/layout';
import { Button } from 'components/buttons/Button';
import { PersonnelDetails } from 'types/personnel';
import { formatDate } from 'helpers/date';

import { formatPersonnelDetailsToFormData } from 'helpers/formatters/personnel';
import { useSelector } from 'react-redux';
import { getRanks } from 'redux/rank/selectors';
import { getUnits } from 'redux/unit/selectors';
import * as S from './PersonnelInfo.style';

type ComponentProps = {
  personnelDetails: PersonnelDetails;
  onToggleDialog: () => void;
};

export const PersonnelInfo: React.FC<ComponentProps> = ({
  personnelDetails,
  onToggleDialog,
}) => {
  const ranks = useSelector(getRanks);
  const units = useSelector(getUnits);
  const personnelFormData = formatPersonnelDetailsToFormData(
    personnelDetails,
    units,
    ranks,
  );

  if (!personnelFormData) return null;

  return (
    <>
      <Row justify="space-between" mt={0}>
        <Column>
          <S.LastName>{personnelFormData.lastName}</S.LastName>
          <S.RestName>
            {personnelFormData.firstName} {personnelFormData.middleName}
          </S.RestName>
          <S.Rank>{personnelFormData.rank}</S.Rank>
        </Column>
        <S.Avatar>
          <S.Initials>БД</S.Initials>
        </S.Avatar>
      </Row>

      <Divider mb={30} mt={30} />

      <Column>
        <Row justify="space-between" mt={0}>
          <Text>Дата призыва:</Text>
          {personnelFormData.calledAt && (
            <Text>{formatDate(personnelFormData.calledAt)}</Text>
          )}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Дата дембеля:</Text>
          {personnelFormData.demobilizationAt && (
            <Text>{formatDate(personnelFormData.demobilizationAt)}</Text>
          )}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Дата рождения:</Text>
          {personnelFormData.birthday && (
            <Text>{formatDate(personnelFormData.birthday)}</Text>
          )}
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Семейное положение</Text>
          <Text>холост</Text>
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Взвод</Text>
          <Text>{personnelFormData.platName}</Text>
        </Row>
        <Row justify="space-between" mt={0}>
          <Text>Отделение</Text>
          <Text>{personnelFormData.unitName}</Text>
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
