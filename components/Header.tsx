import Link from 'next/link';

function Header() {
  return <>
    <header>
      <Link href="/"><a>Top</a></Link>
      <Link href="/about"><a>About</a></Link>
    </header>
  </>
}

export default Header;