import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as menusApi from '@/api/menus';
import * as values from '@/constants/values';

export interface InitialState {
  prefectureLists: {[key: string]: string}[];
  menus: {[key: string]: string}[];
  prefecture: string;
  keyword: string;
}

export interface MenusParams {
  category_id: number;
}

const initialState: InitialState = {
  // 固定値データ
  prefectureLists: values.prefectureLists, // 都道府県リスト
  // APIデータ
  menus: [],                               // メニュー一覧
  // 検索データ
  prefecture: "",                          // エリア
  keyword: "",                             // キーワード
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