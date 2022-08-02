import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// Redux
import { AppDispatch } from '@/redux/store';
import { setValue, getMenusApi } from '@/redux/topPageSlice';
// Components
import Layout from '@/components/Layout';

export interface RootState {
  topPage: {
    prefectureLists: {[key: string]: string}[];
    menus: {[key: string]: string}[];
    prefecture: string;
    keyword: string;
  };
};

export default function HairTop() {
  const dispatch: AppDispatch = useDispatch();
  const prefectureLists = useSelector((state: RootState) => state.topPage.prefectureLists);
  const menus = useSelector((state: RootState) => state.topPage.menus);
  const prefecture = useSelector((state: RootState) => state.topPage.prefecture);
  const keyword = useSelector((state: RootState) => state.topPage.keyword);

  useEffect(() => {
    // API処理
    dispatch(getMenusApi({ category_id: 1 }));
  },[])

  const onFormChange = (name: string, value: string) => {
    dispatch(setValue({ name, value }));
  };

  return (
    <Layout>
      <form action="/hair/search" method="get">
        <div>
          <label>エリア</label>
          <select
            value={prefecture}
            onChange={(event) => onFormChange(event.target.name, event.target.value)}
            name="prefecture"
          >
            <option value="">指定しない</option>
            {prefectureLists.map((option, key) => (
              <option value={option.value} key={key}>{option.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>キーワード</label>
          <input
            value={keyword}
            onChange={(event) => onFormChange(event.target.name, event.target.value)}
            type="text"
            name="keyword"
            placeholder="キーワードを入力してください"
          />
        </div>
        <input type="submit" value="探す"></input>
      </form>

      <div>
        <h3>Menu</h3>
        <span>人気メニュー・スタイルから探す</span>
        {menus.map((option, key) => (
          <div key={key}>
            <span>{option.menu_name}</span>
            <img src={option.menu_image_url}></img>
          </div>
        ))}
      </div>
    </Layout>
  )
}
