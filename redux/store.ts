import { configureStore } from '@reduxjs/toolkit';
import topPageReducer from './topPageSlice';

export const store = configureStore({
  reducer: {
    topPage: topPageReducer,
  },
});