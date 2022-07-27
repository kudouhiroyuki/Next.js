import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'

export default function About() {
  return (
    <Layout>
      <Breadcrumb
        lists={[
          { name: "about", path: "/about" },
        ]}
      />
      <p>/about/index.ts</p>
    </Layout>
  )
}
