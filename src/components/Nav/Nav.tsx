import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/">Main</Link>
      <Link href="/catalog">Сatalog</Link>
      <Link href='/favourite'>Favourite</Link>
      <Link href='future'>Future</Link>
      <Link href='/watched'>Watched</Link>
    </nav>
  )
}
