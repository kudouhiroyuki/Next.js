import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as menusApi from '@/api/menus';

export interface InitialState {
  menus: {[key: string]: string}[];
  prefecture: string;
  keyword: string;
}

export interface MenusParams {
  category_id: number;
}

const initialState: InitialState = {
  menus: [],      // メニュー一覧（API）
  // 検索データ
  prefecture: "", // エリア
  keyword: "",    // キーワード
};

// メニュー一覧取得API
export const getMenusApi = createAsyncThunk(
  "getMenus",
  async (menusParams: MenusParams) => {
    return menusApi.get(menusParams);
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