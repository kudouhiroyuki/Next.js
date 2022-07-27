import Header from './Header'

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>
        { children }
      </main>
    </div>
  )
}
