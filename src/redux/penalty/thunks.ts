import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPenaltiesById,
  createPenalty,
  updatePenalty,
  removePenalty,
} from 'services/http/penalty';
import { Penalty } from 'types/penalty';

export const requestPenaltiesById = createAsyncThunk(
  'penalty/get',
  fetchPenaltiesById,
);

export const requestPenaltyCreate = createAsyncThunk(
  'penalty/create',
  async (penalty: Penalty, thunkApi) => {
    try {
      await createPenalty(penalty);

      thunkApi.dispatch(requestPenaltiesById(penalty.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);

export const requestPenaltyClose = createAsyncThunk(
  'penalty/close',
  async (penalty: Penalty, thunkApi) => {
    try {
      await updatePenalty(penalty, true);

      thunkApi.dispatch(requestPenaltiesById(penalty.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);

export const requestPenaltyRemove = createAsyncThunk(
  'penalty/remove',
  async (penalty: Penalty, thunkApi) => {
    try {
      await removePenalty(penalty);

      thunkApi.dispatch(requestPenaltiesById(penalty.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);
