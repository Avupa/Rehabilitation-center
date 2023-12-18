import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Procedure, IdProcedure, State } from './types/type';
import * as api from '../api';

const initialState: State = {
  procedures: [],
  error: undefined,
};

export const initProcedures = createAsyncThunk('procedures/init', () => api.initProceduresFetch());
export const addProcedures = createAsyncThunk('procedures/add', (obj: FormData) =>
  api.addFetchProcedures(obj),
);
export const deleteProcedures = createAsyncThunk('procedures/delete', (id: IdProcedure) =>
  api.delFetchProcedures(id),
);
export const updateProcedures = createAsyncThunk('procedures/update', (obj: Procedure) =>
  api.updateFetchProcedures(obj),
);

const proceduresSlice = createSlice({
  name: 'procedures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initProcedures.fulfilled, (state, action) => {
        state.procedures = action.payload;
      })
      .addCase(initProcedures.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addProcedures.fulfilled, (state, action) => {
        state.procedures.push(action.payload);
      })
      .addCase(addProcedures.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteProcedures.fulfilled, (state, action) => {
        state.procedures = state.procedures.filter((procedure) => procedure.id !== action.payload);
      })
      .addCase(deleteProcedures.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateProcedures.fulfilled, (state, action) => {
        state.procedures = state.procedures.map((procedure) =>
          procedure.id !== action.payload.id ? procedure : action.payload,
        );
      })
      .addCase(updateProcedures.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default proceduresSlice.reducer;
