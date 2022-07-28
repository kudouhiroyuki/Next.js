import { createSlice } from '@reduxjs/toolkit';

export interface TopPageState {
  prefecture: string;
  keyword: string;
}

const initialState: TopPageState = {
  prefecture: "PRE01",
  keyword: "デモサロン",
};

export const topPageSlice = createSlice({
  name: 'topPage',
  initialState,
  reducers: {
    increase: (state) => {
      // state.count += 1;
    },
    decrease: (state) => {
      // state.count -= 1;
    },
  },
});

export const { increase, decrease } = topPageSlice.actions;

export default topPageSlice.reducer;