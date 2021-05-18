import Link from 'next/link';

type Props = {
  linkTo?: string;
};

export default function NavLink({ linkTo }: Props) {
  return (
    <li className="uppercase text-white font-semibold">
      <Link href={`/${linkTo}`}>
        <a className="pl-4 py-2">{linkTo}</a>
      </Link>
    </li>
  );
}
