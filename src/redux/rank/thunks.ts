import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRanks } from 'services/http/rank';

export const requestRank = createAsyncThunk('rank/get', fetchRanks);
