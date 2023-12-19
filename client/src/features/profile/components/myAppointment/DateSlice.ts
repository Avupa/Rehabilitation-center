import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {  State, TimeSlot } from './DateType';
import * as api from './api';
import { IdDoctor } from '../../../doctors/type';


const initialState: State = {
  timeSlot: undefined,
  error: undefined,
  appointment:[]
};

export const findDate = createAsyncThunk('appointment/findDate', ({id, date}: {id:IdDoctor, date:string}) =>
  api.findDateFetch({id, date}),
);

export const makeAppoint = createAsyncThunk('appointment/makeAppoint', ({ id, date, slot }: { id: number; date: string , slot:string}) =>
  api.makeAppointFetch({id, date, slot}),
);

const DateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(findDate.fulfilled, (state, action) => {
        state.timeSlot = action.payload;
      })
      .addCase(findDate.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(makeAppoint.fulfilled, (state, action) => {
        state.appointment.push(action.payload);
        state.timeSlot =state.timeSlot?.filter(slot=>slot.date!=action.payload.date && slot.time!=action.payload.time )
      })
      .addCase(makeAppoint.rejected, (state, action) => {
        state.error = action.error.message;
      })


  },
});

export default DateSlice.reducer;
