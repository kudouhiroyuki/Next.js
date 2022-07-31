import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import { AppDispatch } from '@/redux/store'
import { setValue, getMenusApi } from '@/redux/topPageSlice'

export interface RootState {
  topPage: {
    menus: {[key: string]: string}[];
    prefecture: string;
    keyword: string;
  };
};
 
export const prefectureLists: {[key: string]: string}[] = [
  { 
    value: "PRE01", 
    name: "北海道"
  },
]

export default function HairTop() {
  // const [state, setState] = useState({
  //   prefecture: "",
  //   keyword: "",
  // });
  // setState({ ...state, [name]: value });
  // value={state.prefecture}
  // value={state.keyword}

  const dispatch: AppDispatch = useDispatch();
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
      <Breadcrumb
        lists={[
          { name: "ヘアサロン・メイク", path: "/" },
        ]}
      />
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
    </Layout>
  )
}
