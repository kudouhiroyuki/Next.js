import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface TopPageState {
  prefecture: string;
  keyword: string;
}

const initialState: TopPageState = {
  // menus: [],      // メニュー一覧（API）
  // 検索データ
  prefecture: "", // エリア
  keyword: "",    // キーワード
};

// メニュー一覧取得API
export const getMenusApi = createAsyncThunk(
  "getMenus",
  async () => {
    const res = await axios.get(`https://beauty.tsuku2.jp/api/menus?category_id=1`);
    if (typeof res !== 'undefined') {
      console.log(res.data)
    }
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
      
    });
  },
});

export const { setValue, } = topPageSlice.actions;

export default topPageSlice.reducer;