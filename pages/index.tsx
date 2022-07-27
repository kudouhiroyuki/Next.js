import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export default function Home() {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "home", path: "/" },
        ]}
      />
      <p>index.ts</p>
    </Layout>
  )
}
