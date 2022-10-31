import { configureStore } from '@reduxjs/toolkit';
import  carReducer  from "../features/counter/car/carslice"
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
