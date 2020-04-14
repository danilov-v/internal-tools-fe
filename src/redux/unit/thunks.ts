import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUnits } from 'services/http/unit';

export const requestUnits = createAsyncThunk('unit/get', fetchUnits);
