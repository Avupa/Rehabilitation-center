import {
    createAsyncThunk,
    createSlice,
   } from '@reduxjs/toolkit';
   import type { State} from './type';
   import * as api from './api';

   const initialState:State = {
    prices:[],
    error: undefined,
   };
   
   export const initPrices = createAsyncThunk(
    'prices/init',
    () =>  api.initPriceFetch()
   );

   const pricesSlice = createSlice({
    name: 'prices',
    initialState,
 reducers:{},
    extraReducers: (builder) => {
      builder
       
        .addCase(initPrices.fulfilled, (state, action) => {
          state.prices = action.payload;
        })
        .addCase(initPrices.rejected, (state, action) => {
          state.error = action.error.message;
        })

    },
   });
   
   export default pricesSlice.reducer;