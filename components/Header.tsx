import Link from 'next/link';

export default function Header() {
  return <>
    <header>
      <Link href="/"><a>ヘアサロン・メイク</a></Link>
      <Link href="/nail"><a>ネイル・まつげ</a></Link>
    </header>
  </>
}