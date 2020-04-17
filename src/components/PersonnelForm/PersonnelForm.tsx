import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addYears, subDays } from 'date-fns';
// types
import { PersonnelDetails } from 'types/personnel';
// selectors
import { getPositionOptions } from 'redux/position/selectors';
import { getRanksOptions } from 'redux/rank/selectors';
import { getSquadOptions, getPlatOptions } from 'redux/unit/selectors';
import {
  getPersonnelDetails,
  getPersonnelPlatId,
  isLoadingPersonnelDetails,
  getPersonnelDetailsError,
} from 'redux/personnel-details/selectors';
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

import { useForm } from 'helpers/hooks/useForm';
import { formatDate, ISO_DATE_FORMAT } from 'helpers/date';

import { PersonnelFormValidator } from './validators/personnelForm';

import * as S from './PersonnelForm.style';

type PersonnelFormType = {
  onFormClose: () => void;
  isEdit?: boolean;
};

export const DEFAULT_PERSONNEL = {
  firstName: '',
  lastName: '',
  middleName: '',
  calledAt: '2020-04-10',
  demobilizationAt: '2021-04-09',
  birthday: '1995-04-01',
  phone: '',
  position: 'Оператор ПЭВМ',
  rankId: 18,
  unitId: 0,
} as PersonnelDetails;

const validator = new PersonnelFormValidator();

export const PersonnelForm = ({
  onFormClose,
  isEdit = false,
}: PersonnelFormType): JSX.Element => {
  const dispatch = useDispatch();
  const isFirstRun = useRef(true);
  const isInProgress = useRef(false);

  const formData = useSelector(getPersonnelDetails) || DEFAULT_PERSONNEL;

  const isLoading = useSelector(isLoadingPersonnelDetails);
  // TODO: add notification if http error exist
  const httpError = useSelector(getPersonnelDetailsError);

  const positionOptions = useSelector(getPositionOptions);
  const ranksOptions = useSelector(getRanksOptions);
  const platOptions = useSelector(getPlatOptions);

  const personnelPlatId = useSelector(getPersonnelPlatId);
  const [platId, setPlatId] = useState(personnelPlatId || platOptions[0].value);

  const squadOptionsSelector = useSelector(getSquadOptions);
  const squadOptions = squadOptionsSelector(platId);
  const [squadId, setSquadId] = useState(
    formData.unitId || squadOptions[0].value,
  );

  const { onChange, values, errorsShown, errors, validateForm } = useForm<
    PersonnelDetails
  >(formData, validator);

  const handleInput = (field: keyof PersonnelDetails) => (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ): void => {
    onChange(field, e.currentTarget.value);
  };

  const handleSelect = (setMethod: (T: number) => void) => (
    e: React.FormEvent<HTMLSelectElement>,
  ): void => {
    setMethod(+e.currentTarget.value);
  };

  const onChangeDate = (dateField: keyof PersonnelDetails) => (
    date: Date,
  ): void => {
    onChange(dateField, formatDate(date, ISO_DATE_FORMAT));
  };

  const onChangeCalledAt = (date: Date): void => {
    onChange('calledAt', formatDate(date, ISO_DATE_FORMAT));
    onChange(
      'demobilizationAt',
      formatDate(subDays(addYears(date, 1), 1), ISO_DATE_FORMAT),
    );
  };

  const submitForm = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (validateForm()) {
      const personnelDetails = {
        ...values,
        rankId: +values.rankId,
        unitId: squadId,
      };
      if (isEdit) {
        dispatch(editPersonnelDetails(personnelDetails));
      } else {
        dispatch(createPersonnelDetails(personnelDetails));
      }
    }
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    setSquadId(squadOptions[0].value);
  }, [platId, squadOptions]);

  useEffect(() => {
    if (isInProgress.current && !isLoading && !httpError) {
      onFormClose();
    }
  }, [isInProgress, isLoading, httpError, onFormClose]);

  useEffect(() => {
    isInProgress.current = isLoading;
  }, [isLoading]);

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
            options={ranksOptions}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Должность</S.Label>
          <Select
            value={values.position}
            onChange={handleInput('position')}
            options={positionOptions}
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
            selected={new Date(values.calledAt)}
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
            selected={new Date(values.demobilizationAt)}
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
            selected={new Date(values.birthday)}
            placeholder="13 мая 1995"
            align="right"
            invalid={errorsShown}
            errorMessage={errors.birthday}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Взвод</S.Label>
          <Select
            value={platId}
            onChange={handleSelect(setPlatId)}
            options={platOptions}
          />
        </Row>
        {squadOptions.length > 0 && (
          <Row justify="space-between" mt={0} mb={10}>
            <S.Label>Отделение</S.Label>
            <Select
              value={squadId}
              onChange={handleSelect(setSquadId)}
              options={squadOptions}
            />
          </Row>
        )}
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
