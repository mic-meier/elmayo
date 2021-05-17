import Link from 'next/link';

import { SITE_NAME } from '../utils/constants';

export default function Header() {
  return (
    <header className="py-2">
      <div className="p-2 text-center">
        <Link href="/">
          <a className="p-4 text-4xl font-bold text-purple-700">{SITE_NAME}</a>
        </Link>
      </div>
      <nav className="p-2">
        <ul className="flex justify-center space-x-10">
          <li className="uppercase ">
            <Link href="/">About</Link>
          </li>
          <li className="uppercase ">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
