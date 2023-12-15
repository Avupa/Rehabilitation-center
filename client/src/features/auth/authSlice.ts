import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Login, Rega, State } from './authType';
import * as api from './api';

const initialState: State = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (obj: Rega) =>
  api.registrationFetch(obj),
);

export const login = createAsyncThunk('auth/login', (obj: Login) =>
  api.loginFetch(obj),
);

export const check = createAsyncThunk('auth/check', () =>
  api.checkFetch(),
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(check.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(check.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
