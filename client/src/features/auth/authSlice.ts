import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Login, Rega, State } from './authType';
import * as api from './api';
import { User } from '../User/userType';

const initialState: State = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (obj: Rega) =>
  api.registrationFetch(obj),
);

export const login = createAsyncThunk('auth/login', (obj: Login) => api.loginFetch(obj));

export const logout = createAsyncThunk('auth/logout', () => api.logoutFetch());

export const check = createAsyncThunk('auth/check', () => api.checkFetch());

export const initUserApps=createAsyncThunk('auth/apps', (id:User['id']) => api.initUserAppsFetch(id));

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
        // const navigate = useNavigate();
        // navigate('/')
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

      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(logout.rejected, (state) => {
        state.error = undefined;
      })

      .addCase(check.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(check.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initUserApps.fulfilled, (state, action) => {
        state.user.appointment = action.payload;
        // const navigate = useNavigate();
        // navigate('/')
      })
      .addCase(initUserApps.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default authSlice.reducer;
