import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface TopPageState {
  prefecture: string;
  keyword: string;
}

const initialState: TopPageState = {
  prefecture: "",
  keyword: "",
};

// メニュー一覧取得API
export const getMenusApi = createAsyncThunk(
  "getMenusApis",
  async () => {
    alert(6666)
    const response = await axios.get(`https://beauty.tsuku2.jp/api/menus?category_id=1`);
  }
);

export const topPageSlice = createSlice({
  name: 'topPage',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state[action['payload']['name']] = action['payload']['value'];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenusApi.fulfilled, (state, action) => {
      alert("完了:getMenusApi");
    });
  },
});

export const { setValue, } = topPageSlice.actions;

export default topPageSlice.reducer;