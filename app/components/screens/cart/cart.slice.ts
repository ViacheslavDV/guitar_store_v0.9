import { IStoreItem } from "./../../../store/store-item/storeItem.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IStoreItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IStoreItem>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
