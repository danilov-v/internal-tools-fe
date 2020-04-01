/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginFailed, loginSuccess } from 'redux/profile/slice';

export type UIState = {
  loginForm: {
    formData: {
      login: string;
      password: string;
    };
    error: string | null;
  };
};

const initialState: UIState = {
  loginForm: {
    error: null,
    formData: {
      login: '',
      password: '',
    },
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    loginFormInput(
      state,
      action: PayloadAction<{ fieldName: 'login' | 'password'; value: string }>,
    ) {
      const {
        payload: { fieldName, value },
      } = action;

      state.loginForm.formData[fieldName] = value;
    },
  },
  extraReducers: {
    [loginFailed]: (state, action) => {
      state.loginForm = {
        error: action.payload,
        formData: {
          ...initialState.loginForm.formData,
        },
      };
    },
    [loginSuccess]: state => {
      state.loginForm = {
        ...initialState.loginForm,
      };
    },
  },
});

export const { loginFormInput } = uiSlice.actions;

// eslint-disable-next-line import/no-default-export
export default uiSlice.reducer;
/* eslint-enable no-param-reassign */
