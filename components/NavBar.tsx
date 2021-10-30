import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, ReactChild } from 'react'

import { SITE_NAME } from '../utils/constants'

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

type LinkProps = {
  href: string
  children: ReactChild
}

const NavLink = ({ href, children }: LinkProps) => {
  return (
    <li className="px-5 py-2 ">
      <Link href={`${href}`}>{children}</Link>
    </li>
  )
}

const NavMobileLink = ({ href, children }: LinkProps) => {
  return (
    <li className="px-5 py-2 list-none bg-white">
      <Link href={href}>
        <a className="underlined block whitespace-nowrap text-lg font-medium px-5vw py-9 border-b border-purple-200">
          {' '}
          {children}
        </a>
      </Link>
    </li>
  )
}

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button>{open ? 'Close' : 'Open'}</Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-screen px-5">
              {LINKS.map((link) => (
                <NavMobileLink key={link.name} href={link.to}>
                  {link.name}
                </NavMobileLink>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default function NavBar() {
  return (
    <header className="pt-6 pb-2">
      <nav className="max-w-prose lg:max-w-4xl mx-auto flex px-4 items-baseline justify-between">
        <div className="pr-2 py-2 text-2xl lg:text-4xl">
          <Link href="/">
            <a className="font-bold text-purple-700 border-b-2 border-transparent hover:border-white transition duration-300">
              {SITE_NAME}
            </a>
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
