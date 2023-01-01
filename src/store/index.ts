import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import shoppingCartReducer from './shopping-cart';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
