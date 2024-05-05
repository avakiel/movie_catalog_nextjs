import Link from 'next/link'
import Nav from '../Nav/Nav'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-between h-20 bg-black text-cyan-300 shadow-lg shadow-cyan-500 z-10 relative items-center px-10">
      <Link href="/" className="font-extrabold text-5xl">
        <Image src="/img/logo.svg" alt="logo" width={140} height={45} />
      </Link>
      <Nav />
    </header>
  )
}
