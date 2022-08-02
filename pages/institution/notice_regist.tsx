import Layout from '@/components/Layout';
import Form from 'react-bootstrap/Form';

export default function NoticeRegist() {
  return (
    <Layout>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>お知らせタイトル</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    </Layout>
  )
}