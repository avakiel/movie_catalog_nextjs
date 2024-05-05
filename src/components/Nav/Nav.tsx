'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const currentPath = usePathname()

  return (
    <nav className="flex text-xl gap-20">
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border border-cyan-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for movie..."
          type="text"
          name="search"
        />
      </label>
      <Link
        className={classNames('link', { active: currentPath === '/' })}
        href="/"
      >
        Main
      </Link>
      <Link
        className={classNames('link', { active: currentPath === '/catalog' })}
        href="/catalog"
      >
        Catalog
      </Link>
      <Link
        className={classNames('link', { active: currentPath === '/favourite' })}
        href="/favourite"
      >
        Favourite
      </Link>
      <Link
        className={classNames('link', { active: currentPath === '/future' })}
        href="/future"
      >
        Future
      </Link>
      <Link
        className={classNames('link', { active: currentPath === '/watched' })}
        href="/watched"
      >
        Watched
      </Link>
    </nav>
  )
}
