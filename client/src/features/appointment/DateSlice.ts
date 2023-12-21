import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {  State, TimeSlot} from './DateType';
import * as api from './api';
import type { IdDoctor } from '../doctors/type';

const initialState: State = {
  error: undefined,
  appointment:[],
  specialization:[]
};

export const initSpec = createAsyncThunk('appointment/initSpec', () =>
  api.initSpecFetch(),
);

export const findDate = createAsyncThunk('appointment/findDate', ({id, date}: {id:IdDoctor, date:string}) =>
  api.findDateFetch({id, date}),
);

export const makeAppoint = createAsyncThunk('appointment/makeAppoint', ({ id, date, slot }: { id: IdDoctor; date: string , slot:TimeSlot}) =>
  api.makeAppointFetch({id, date, slot}),
);

const DateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(findDate.fulfilled, (state, action) => {
        state.appointment = action.payload;
      })
      .addCase(findDate.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initSpec.fulfilled, (state, action) => {
        state.specialization = action.payload;
      })
      .addCase(initSpec.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(makeAppoint.fulfilled, (state, action) => {
        //state.appointment.push(action.payload);
        state.appointment =state.appointment.filter(slot=>slot.timeSlot!=action.payload.time )
      })
      .addCase(makeAppoint.rejected, (state, action) => {
        state.error = action.error.message;
      })


  },
});

export default DateSlice.reducer;
