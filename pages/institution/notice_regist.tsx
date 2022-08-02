import { useState } from "react";

import Layout from '@/components/Layout';
import { Badge, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function NoticeRegist() {
  const [state, setState] = useState({
    notice_title: '',
  });

  const onFormChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const onSubmit = () => {
    console.log(state)
  };

  return (
    <Layout>
      <Form>
        <p>お知らせ登録</p>
        <Button>プレビュー</Button>
        <Button onClick={onSubmit}>登録</Button>

        <Form.Group className="mb-3">
          <Form.Label>
          公開範囲<Badge bg="danger">必須</Badge>
          </Form.Label>
          <div>
            <Form.Check
              inline
              label="コンシューマ"
              name="open_range"
              type="radio"
            />
            <Form.Check
              inline
              label="バックオフィス"
              name="open_range"
              type="radio"
            />
          </div>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>
            お知らせタイトル<Badge bg="danger">必須</Badge>
          </Form.Label>
          <Form.Control
            value={state.notice_title}
            onChange={(event) => onFormChange(event.target.name, event.target.value)}
            name="notice_title"
            type="text"
          />
        </Form.Group>
      </Form>
    </Layout>
  )
}