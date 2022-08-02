import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import layoutStyles from "@/styles/components/Layout.module.scss";

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={`${layoutStyles.layout}`}>
      <Header />
      <main>
        <SideBar />
        <section>
          { children }
        </section>
      </main>
    </div>
  )
}
