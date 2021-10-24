import Link from 'next/link'

import { SITE_NAME } from '../utils/constants'
import NavLink from './NavLink'

export default function Header() {
  return (
    <header className="pt-6 pb-2 bg-gradient-to-r  from-pink-500 to-indigo-600">
      <nav className="max-w-prose mx-auto flex items-baseline justify-between">
        <div className="pr-2 py-2 text-4xl">
          <Link href="/">
            <a className="font-bold text-white border-b-2 border-transparent hover:border-white transition duration-300">
              {SITE_NAME}
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <NavLink linkTo="about" />
            <NavLink linkTo="blog" />
          </ul>
        </div>
      </nav>
    </header>
  )
}
