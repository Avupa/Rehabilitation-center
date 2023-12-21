import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { IdDoctor, State } from './types/type';
import * as api from './api';

const initialState: State = {
  doctors: [],
  error: undefined,
};

export const initDoctors = createAsyncThunk('doctors/init', () => api.initDoctorFetch());

export const addDoctors = createAsyncThunk('doctors/add', (obj: FormData) =>
  api.addFetchDoctor(obj),
);
export const deleteDoctors = createAsyncThunk('doctors/delete', (id: IdDoctor) =>
  api.delFetchDoctor(id),
);
export const updateDoctors = createAsyncThunk('doctors/update', (id: IdDoctor, obj: FormData) =>
  api.updateFetchDoctor(id, obj),
);

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
      })
      .addCase(initDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addDoctors.fulfilled, (state, action) => {
        state.doctors.push(action.payload);
      })
      .addCase(addDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteDoctors.fulfilled, (state, action) => {
        state.doctors = state.doctors.filter((doctor) => doctor.id !== action.payload);
      })
      .addCase(deleteDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateDoctors.fulfilled, (state, action) => {
        state.doctors = state.doctors.map((doctor) =>
          doctor.id !== action.payload.id ? doctor : action.payload,
        );
      })
      .addCase(updateDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
