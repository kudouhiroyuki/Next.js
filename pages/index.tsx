import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export default function Hair() {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "ヘアサロン・メイク", path: "/" },
        ]}
      />
      <p>index.ts</p>
    </Layout>
  )
}
