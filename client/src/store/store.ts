import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import noNameUsersSlice from '../features/noNameUser/noNameUserSlice';

import doctorSlice from '../features/doctors/redux/doctorSlice';
import authSlice from '../features/auth/authSlice';
import proceduresSlice from '../features/procedure/redux/procedureSlice';
import DateSlice from '../features/appointment/DateSlice';
import reviewsSlice from '../features/reviews/redux/reviewsSlice';
import priceSlice from '../features/price/priceSlice';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    NNU: noNameUsersSlice,
    Doctor: doctorSlice,
    auth: authSlice,
    appoint: DateSlice,
    Procedure: proceduresSlice,
    Review: reviewsSlice,
    prices: priceSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
