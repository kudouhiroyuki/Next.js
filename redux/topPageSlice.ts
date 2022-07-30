import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as menusApi from '@/api/menus';

export interface TopPageState {
  menus: {[key: string]: string}[];
  prefecture: string;
  keyword: string;
}

const initialState: TopPageState = {
  menus: [],      // メニュー一覧（API）
  // 検索データ
  prefecture: "", // エリア
  keyword: "",    // キーワード
};

// メニュー一覧取得API
export const getMenusApi = createAsyncThunk(
  "getMenus",
  async () => {
    let params = { category_id: 1 }
    return menusApi.get(params);
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
      if (action.type === 'getMenus/fulfilled') {
        state['menus'] = action.payload.menus;
      }
    });
  },
});

export const { setValue } = topPageSlice.actions;

export default topPageSlice.reducer;