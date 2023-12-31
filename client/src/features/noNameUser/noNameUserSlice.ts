import {
    createAsyncThunk,
    createSlice,
   } from '@reduxjs/toolkit';
   import type { IdNoNameUser, NoNameUserWithoutID, State} from './type';
   import * as api from './api';

   const initialState:State = {
    noNameUsers:[],
    error: undefined,
   };
   
   export const initNoNameUsers = createAsyncThunk(
    'noNameUsers/init',
    () =>  api.initNoNameUserFetch()
   );

   export const addNoNameUsers=createAsyncThunk('noNameUsers/add',
   (obj:NoNameUserWithoutID)=>api.addNoNameUserFetch(obj));

   export const deleteNoNameUsers = createAsyncThunk(
    'noNameUsers/delete',
    (id:IdNoNameUser) =>  api.delFetchNoNameUser(id)
   );
  

   const noNameUsersSlice = createSlice({
    name: 'noNameUsers',
    initialState,
 reducers:{},
    extraReducers: (builder) => {
      builder
       
        .addCase(initNoNameUsers.fulfilled, (state, action) => {
          state.noNameUsers = action.payload;
        })
        .addCase(initNoNameUsers.rejected, (state, action) => {
          state.error = action.error.message;
        })

        .addCase(addNoNameUsers.fulfilled, (state, action) => {
          state.noNameUsers = state.noNameUsers.push(action.payload);
          })
        .addCase(addNoNameUsers.rejected, (state, action) => {
          state.error = action.error.message;
        })

        .addCase(deleteNoNameUsers.fulfilled, (state, action) => {
          state.noNameUsers = state.noNameUsers.filter(noNameUser=>noNameUser.id !== action.payload);
          })
        .addCase(deleteNoNameUsers.rejected, (state, action) => {
          state.error = action.error.message;
        })
    },
   });
   
   export default noNameUsersSlice.reducer;