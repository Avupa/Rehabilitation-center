import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { State, TimeSlot } from './DateType';
import * as api from './api';

import type { IdDoctor } from '../doctors/redux/types/type';
import { NoNameUser } from '../noNameUser/type';

const initialState: State = {
  error: undefined,
  appointment:[],
  specialization:[],
  nnu: undefined,
  scheduleFull:[],
};

export const initSpec = createAsyncThunk('appointment/initSpec', () => api.initSpecFetch());


export const Strange=createAsyncThunk('appointment/strange', (nnu: NoNameUser) =>
api.strangeFetch(nnu),
);

export const initSchaduleFull = createAsyncThunk('appointment/schadule', () =>
  api.initScheduleFullFetch(),
);

export const findDate = createAsyncThunk('appointment/findDate', ({id, date}: {id:IdDoctor, date:string}) =>
  api.findDateFetch({id, date}),
);

export const makeAppoint = createAsyncThunk('appointment/makeAppoint', ({ id, date, slot, adminComment }: { id: IdDoctor; date: string , slot:TimeSlot, adminComment:string}) =>
  api.makeAppointFetch({id, date, slot, adminComment}),
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

      .addCase(Strange.fulfilled, (state, action) => {
        state.nnu = action.payload;
      })
      .addCase(Strange.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initSpec.fulfilled, (state, action) => {
        state.specialization = action.payload;
      })
      .addCase(initSpec.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initSchaduleFull.fulfilled, (state, action) => {
        state.scheduleFull = action.payload;
      })
      .addCase(initSchaduleFull.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(makeAppoint.fulfilled, (state, action) => {
        // state.appointment.push(action.payload);
        state.appointment = state.appointment.filter(
          (slot) => slot.timeSlot != action.payload.time,
        );
      })
      .addCase(makeAppoint.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default DateSlice.reducer;
