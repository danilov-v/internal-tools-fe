import React from 'react';
import { map } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addYears, subDays } from 'date-fns';
// selectors
import { getRanks } from 'redux/rank/selectors';
import { getPersonnelDetailsFormData } from 'redux/personnel-details/selectors';
// thunks
import {
  createPersonnelDetails,
  editPersonnelDetails,
} from 'redux/personnel-details/thunks';

// components
import { Button } from 'components/buttons/Button';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { DatePicker } from 'components/DatePicker';
import { Column, Row } from 'components/layout';
// types
import { PersonnelFormData } from 'types/personnel';

import { useForm } from 'helpers/hooks/useForm';
import * as POSITIONS from 'helpers/position';

import { PersonnelFormValidator } from './validators/personnelForm';

import * as S from './PersonnelForm.style';

type PersonnelFormType = {
  onFormClose: () => void;
  isEdit?: boolean;
};

const validator = new PersonnelFormValidator();

export const PersonnelForm = ({
  onFormClose,
  isEdit = false,
}: PersonnelFormType): JSX.Element => {
  const dispatch = useDispatch();
  const ranks = useSelector(getRanks);
  const formData = useSelector(getPersonnelDetailsFormData);

  const { onChange, values, errorsShown, errors, validateForm } = useForm<
    PersonnelFormData
  >(formData, validator);

  const soldierRanksOptions = ranks
    .filter(rank => rank.value < 70)
    .map(({ name, id }) => ({ name, value: id }));

  const solderPositionsOptions = map(POSITIONS, pos => ({
    name: pos,
    value: pos,
  }));

  const handleInput = (field: keyof PersonnelFormData) => (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ): void => {
    onChange(field, e.currentTarget.value);
  };

  const onChangeDate = (dateField: keyof PersonnelFormData) => (
    date: Date,
  ): void => onChange(dateField, date);

  const onChangeCalledAt = (date: Date): void => {
    if (date !== null) {
      onChange('calledAt', date);
      onChange('demobilizationAt', subDays(addYears(date, 1), 1));
    } else {
      onChange('calledAt', date);
    }
  };

  const submitForm = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (validateForm()) {
      if (isEdit) {
        dispatch(editPersonnelDetails(values));
      } else {
        dispatch(createPersonnelDetails(values));
      }

      onFormClose();
    }
  };

  return (
    <S.Form onSubmit={submitForm}>
      <S.FormHeader
        component="h3"
        variant="secondary"
        align="center"
        mt={15}
        mb={50}
      >
        {isEdit
          ? 'Редактирование военнослужащего'
          : 'Добавление военнослужащего'}
      </S.FormHeader>
      <Column>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Воинское звание</S.Label>
          <Select
            value={values.rankId}
            onChange={handleInput('rankId')}
            options={soldierRanksOptions}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Должность</S.Label>
          <Select
            value={values.position}
            onChange={handleInput('position')}
            options={solderPositionsOptions}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Фамилия:</S.Label>
          <Input
            variant="primary"
            id="lastName"
            name="lastName"
            onChange={handleInput('lastName')}
            value={values.lastName}
            align="right"
            placeholder="Домасевич"
            invalid={errorsShown}
            errorMessage={errors.lastName}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Имя:</S.Label>
          <Input
            variant="primary"
            id="firstName"
            name="firstName"
            onChange={handleInput('firstName')}
            value={values.firstName}
            align="right"
            placeholder="Илья"
            invalid={errorsShown}
            errorMessage={errors.firstName}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Отчество:</S.Label>
          <Input
            variant="primary"
            id="middleName"
            name="middleName"
            onChange={handleInput('middleName')}
            value={values.middleName}
            align="right"
            placeholder="Владимирович"
            invalid={errorsShown}
            errorMessage={errors.middleName}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Телефон:</S.Label>
          <Input
            variant="primary"
            type="tel"
            id="phone"
            name="phone"
            onChange={handleInput('phone')}
            value={values.phone}
            align="right"
            placeholder="+3752912312323"
            invalid={errorsShown}
            errorMessage={errors.phone}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата призыва:</S.Label>
          <DatePicker
            variant="primary"
            onChangeDate={onChangeCalledAt}
            selected={values.calledAt}
            placeholder="28 мая 2019"
            name="calledAt"
            align="right"
            invalid={errorsShown}
            errorMessage={errors.calledAt}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата дембеля:</S.Label>
          <DatePicker
            variant="primary"
            name="demobilizationAt"
            onChangeDate={onChangeDate('demobilizationAt')}
            selected={values.demobilizationAt}
            placeholder="27 мая 2020"
            align="right"
            invalid={errorsShown}
            errorMessage={errors.demobilizationAt}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата рождения:</S.Label>
          <DatePicker
            variant="primary"
            name="birthday"
            onChangeDate={onChangeDate('birthday')}
            selected={values.birthday}
            placeholder="13 мая 1995"
            align="right"
            invalid={errorsShown}
            errorMessage={errors.birthday}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={50}>
          <S.Label>Семейное положение</S.Label>
          <Select
            value={values.marriageStatus}
            onChange={handleInput('marriageStatus')}
            options={[
              {
                name: 'холост',
                value: 'холост',
              },
              {
                name: 'женат',
                value: 'женат',
              },
            ]}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Взвод</S.Label>
          <Input
            variant="primary"
            type="number"
            id="personnelFirstName"
            name="firstName"
            align="right"
            placeholder="1"
            onChange={handleInput('platName')}
            max="4"
            min="1"
            value={values.platName}
            invalid={errorsShown}
            errorMessage={errors.platName}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Отделение</S.Label>
          <Input
            variant="primary"
            type="number"
            id="personnelFirstName"
            name="firstName"
            align="right"
            placeholder="1"
            onChange={handleInput('unitName')}
            max="3"
            min="1"
            value={values.unitName}
            invalid={errorsShown}
            errorMessage={errors.unitName}
          />
        </Row>
        <Row justify="space-between" align="flex-end" mt={10}>
          <Column>
            <S.Label>Фотография </S.Label>
            <S.SubText variant="secondary">(перетащите на экран)</S.SubText>
          </Column>
          <S.Avatar>
            <S.Initials>?</S.Initials>
          </S.Avatar>
        </Row>

        <Row justify="space-around" mt={24} mr={100} ml={100}>
          <Button variant="contained" color="primary" type="submit">
            Сохранить
          </Button>
          <Button color="secondary" onClick={onFormClose} type="reset">
            Отмена
          </Button>
        </Row>
      </Column>
    </S.Form>
  );
};
