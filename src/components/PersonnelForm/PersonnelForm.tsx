import React, { useState, useEffect, useRef } from 'react';
import { parseInt } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addYears, subDays, format } from 'date-fns';
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
import { Input } from 'components/inputs/Input';
import { DateInput } from 'components/inputs/DateInput';
import { PhoneInput } from 'components/inputs/PhoneInput';
import { Select } from 'components/Select';
import { Column, Row } from 'components/layout';

import { usePrevious } from 'helpers/hooks/usePrevious';
import { useForm } from 'helpers/hooks/useForm';

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
  const formData = useSelector(getPersonnelDetails) || DEFAULT_PERSONNEL;

  const isLoading = useSelector(isLoadingPersonnelDetails);
  const previousIsLoading = usePrevious(isLoading);
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

  const onChangeCalledAt = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ): void => {
    const calledAt = e.currentTarget.value;

    if (calledAt.length === 10) {
      const [day, month, year] = calledAt.split('-').map(parseInt);

      const demobilizationAt = format(
        addYears(subDays(new Date(year, month - 1, day), 1), 1),
        'dd-MM-yyyy',
      );

      onChange('calledAt', calledAt);
      onChange('demobilizationAt', demobilizationAt);
    } else {
      onChange('calledAt', calledAt);
    }
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
    if (previousIsLoading && !isLoading && !httpError) {
      onFormClose();
    }
  });

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
          <PhoneInput
            variant="primary"
            type="tel"
            id="phone"
            name="phone"
            onChange={handleInput('phone')}
            value={values.phone}
            align="right"
            invalid={errorsShown}
            errorMessage={errors.phone}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата призыва:</S.Label>
          <DateInput
            variant="primary"
            onChange={onChangeCalledAt}
            value={values.calledAt}
            name="calledAt"
            align="right"
            invalid={errorsShown}
            errorMessage={errors.calledAt}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата дембеля:</S.Label>
          <DateInput
            variant="primary"
            id="demobilizationAt"
            name="demobilizationAt"
            onChange={handleInput('demobilizationAt')}
            value={values.demobilizationAt}
            align="right"
            invalid={errorsShown}
            errorMessage={errors.demobilizationAt}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Дата рождения:</S.Label>
          <DateInput
            variant="primary"
            id="birthday"
            name="birthday"
            onChange={handleInput('birthday')}
            value={values.birthday}
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
