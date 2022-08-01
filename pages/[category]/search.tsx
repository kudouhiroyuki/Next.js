import { useState, useEffect } from "react"
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export const prefectureLists: {[key: string]: string}[] = [
  { 
    value: "PRE01", 
    name: "北海道"
  },
]

export default function NailTop() {
  const [state, setState] = useState({
    keyword: '',
  });

  const onFormChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const setSerchConditions = () => {
    const queryParams = new URLSearchParams(location.search);
    let conditions = {
      keyword: queryParams.get('keyword') ?? ''
    }
    Object.keys(conditions).forEach((key) => {
      setState({ ...state, [key]: conditions[key] });
    })
  };

  useEffect(() => {
    setSerchConditions();
  },[])

  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "ネイル・まつげ", path: "/nail" },
        ]}
      />
      <form action="/hair/search" method="get">
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
        <input type="submit" value="探す"></input>
      </form>
    </Layout>
  )
}
