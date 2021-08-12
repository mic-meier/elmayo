import Link from 'next/link'

type Props = {
  linkTo?: string
}

export default function NavLink({ linkTo }: Props) {
  return (
    <li className="uppercase px-2 py2 text-white font-semibold">
      <Link href={`/${linkTo}`}>
        <a className="border-b-2 border-transparent hover:border-white transition duration-300">
          {linkTo}
        </a>
      </Link>
    </li>
  )
}
