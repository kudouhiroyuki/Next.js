import { createSlice } from '@reduxjs/toolkit';

export interface TopPageState {
  prefecture: string;
  keyword: string;
}

const initialState: TopPageState = {
  prefecture: "",
  keyword: "",
};

export const topPageSlice = createSlice({
  name: 'topPage',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state[action['payload']['name']] = action['payload']['value'];
    },
  },
});

export const { setValue } = topPageSlice.actions;

export default topPageSlice.reducer;