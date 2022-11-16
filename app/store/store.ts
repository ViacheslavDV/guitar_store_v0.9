import { cartReducer } from "./../components/screens/cart/cart.slice";
import { storeItemApi } from "./store-item/storeItem.api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [storeItemApi.reducerPath]: storeItemApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeItemApi.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;
