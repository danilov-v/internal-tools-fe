import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { find } from 'lodash';

import { UNIT_ID } from 'configs/constants';
import { formatPersonnelFormData } from 'helpers/formatters/personnel';
import { PLAT_TYPE_ID, DEP_TYPE_ID } from 'helpers/unit';
import { requestPersonnel } from 'redux/personnel/thunks';
import { RootStore } from 'redux/store.types';
import { getUnits } from 'redux/unit/selectors';
import { requestUnits } from 'redux/unit/thunks';
import {
  fetchPersonnelDetails,
  createPersonnel,
  updatePersonnel,
} from 'services/http/personnel';
import { createUnit } from 'services/http/unit';
import { Unit } from 'types/unit';
import { PersonnelFormData, PersonnelDetails } from 'types/personnel';

type ThunkAPI = {
  state: RootStore;
  dispatch: Dispatch<any>;
};

const preparePersonnelUnits = async (
  platName: string,
  unitName: string,
  units: Unit[],
): Promise<[Unit, Unit]> => {
  const plat =
    find(units, {
      name: platName,
      parentUnit: UNIT_ID,
      typeId: PLAT_TYPE_ID,
    }) ||
    (await createUnit({
      name: platName,
      parentUnit: UNIT_ID,
      typeId: PLAT_TYPE_ID,
    }));
  const unit =
    find(units, {
      name: unitName,
      parentUnit: plat.id,
      typeId: DEP_TYPE_ID,
    }) ||
    (await createUnit({
      name: unitName,
      parentUnit: plat.id,
      typeId: DEP_TYPE_ID,
    }));

  return [plat, unit];
};

export const requestPersonnelDetails = createAsyncThunk(
  'personnelDetails/get',
  fetchPersonnelDetails,
);

export const createPersonnelDetails = createAsyncThunk<
  PersonnelDetails,
  PersonnelFormData,
  ThunkAPI
>('personnelDetails/create', async (formData, thunkAPI) => {
  try {
    const units = getUnits(thunkAPI.getState());
    const { platName, unitName } = formData;

    const [, unit] = await preparePersonnelUnits(platName, unitName, units);

    const personnel = await createPersonnel(
      formatPersonnelFormData({
        ...formData,
        unitId: unit.id.toString(),
      }),
    );

    thunkAPI.dispatch(requestPersonnel(UNIT_ID));
    thunkAPI.dispatch(requestUnits());

    return personnel;
  } catch (error) {
    return thunkAPI.rejectWithValue(null);
  }
});

export const editPersonnelDetails = createAsyncThunk<
  PersonnelDetails,
  PersonnelFormData,
  ThunkAPI
>('personnelDetails/edit', async (formData, thunkAPI) => {
  if (!formData.id) {
    return thunkAPI.rejectWithValue(null);
  }

  try {
    const units = getUnits(thunkAPI.getState());
    const { platName, unitName } = formData;

    const [, unit] = await preparePersonnelUnits(platName, unitName, units);

    const personnel = await updatePersonnel(
      formData.id,
      formatPersonnelFormData({
        ...formData,
        unitId: unit.id.toString(),
      }),
    );

    thunkAPI.dispatch(requestPersonnelDetails(formData.id));
    thunkAPI.dispatch(requestUnits());

    return personnel;
  } catch (error) {
    return thunkAPI.rejectWithValue(null);
  }
});
