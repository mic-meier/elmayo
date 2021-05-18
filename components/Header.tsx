import Link from 'next/link';

import { SITE_NAME } from '../utils/constants';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="py-6 bg-indigo-600">
      <nav className="max-w-prose mx-auto flex items-baseline justify-between">
        <Link href="/">
          <a className="pr-2 py-2 text-4xl font-bold text-white">{SITE_NAME}</a>
        </Link>
        <div>
          <ul className="flex">
            <NavLink linkTo="about" />
            <NavLink linkTo="blog" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
