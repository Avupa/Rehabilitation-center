import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import noNameUsersSlice from '../features/noNameUser/noNameUserSlice'
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({

 // теперь функция combineReducers не нужна
 reducer: {
   NNU:noNameUsersSlice
 },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
