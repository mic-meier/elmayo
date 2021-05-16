import Link from 'next/link';

import { SITE_NAME } from '../utils/constants';

export default function Header() {
  return (
    <header className="py-2">
      <Link href="/">
        <a className="text-2xl font-bold text-purple-700">{SITE_NAME}</a>
      </Link>
    </header>
  );
}
