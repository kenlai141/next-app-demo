import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
export interface ShoppingCartState {
  items: string[];
}

const initialState: ShoppingCartState = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push(action.payload);
    },
    decrement: (state, action) => {
      _.remove(state.items, action.payload);
    },
    updateItem: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { increment, decrement, updateItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
