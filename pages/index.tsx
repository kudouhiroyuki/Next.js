import { useState } from "react";
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export default function Hair() {
  const [state, setState] = useState({
    text: "",
    select: "0",
    textarea: "",
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
      <input
        value={state.text}
        onChange={(event) => onFormChange(event.target.name, event.target.value)}
        type="text"
        name="text"
      />
      <textarea
        value={state.textarea}
        onChange={(event) => onFormChange(event.target.name, event.target.value)}
        name="textarea"
      />
      <select
        value={state.select}
        onChange={(event) => onFormChange(event.target.name, event.target.value)}
        name="select"
      >
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </Layout>
  )
}
