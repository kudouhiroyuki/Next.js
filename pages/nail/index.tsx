import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export default function NailTop() {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "ネイル・まつげ", path: "/nail" },
        ]}
      />
      <p>/nail/index.ts</p>
    </Layout>
  )
}
