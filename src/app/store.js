import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//The GlobaL STORE SETUP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
