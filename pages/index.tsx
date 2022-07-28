import { useState } from "react";
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import { useSelector } from 'react-redux'

export interface RootState {
  topPage: {
    prefecture: string;
    keyword: string;
  };
};

export default function HairTop() {
  const [state, setState] = useState({
    prefecture: useSelector((state: RootState) => state.topPage.prefecture),
    keyword: useSelector((state: RootState) => state.topPage.keyword),
  });

  const onFormChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "ヘアサロン・メイク", path: "/" },
        ]}
      />
      <div>
        <label>エリア</label>
        <select
          value={state.prefecture}
          onChange={(event) => onFormChange(event.target.name, event.target.value)}
          name="prefecture"
        >
          <option value="">指定しない</option>
          <option value="PRE01">北海道</option>
        </select>
      </div>
      <div>
        <label>キーワード</label>
        <input
          value={state.keyword}
          onChange={(event) => onFormChange(event.target.name, event.target.value)}
          type="text"
          name="keyword"
          placeholder="キーワードを入力してください"
        />
      </div>
    </Layout>
  )
}
