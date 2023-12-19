import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import noNameUsersSlice from '../features/noNameUser/noNameUserSlice';

import doctorSlice from '../features/doctors/doctorSlice';
import authSlice from '../features/auth/authSlice';
import proceduresSlice from '../features/services/redux/servicesSlice'
import DateSlice from '../features/profile/components/myAppointment/DateSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({

 // теперь функция combineReducers не нужна
 reducer: {
   NNU:noNameUsersSlice,
   Doctor:doctorSlice,
   auth:authSlice,
   appoint:DateSlice,
   Procedure: proceduresSlice,
 },

});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
