import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
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
  rest?: any // TODO: Figure this out
}

const NavLink = ({ href, children }: LinkProps) => {
  return (
    <li className="px-5 py-2 ">
      <Link href={`${href}`}>{children}</Link>
    </li>
  )
}

const NavMobileLink = (props: LinkProps) => {
  const { href, children, ...rest } = props
  return (
    <li className="px-8 py-2 list-none bg-white">
      <Link href={href}>
        <a
          className="underlined block whitespace-nowrap text-lg font-medium px-5vw py-9 border-b border-purple-200"
          {...rest}
        >
          {' '}
          {children}
        </a>
      </Link>
    </li>
  )
}

const MobileMenu = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div>
            <Popover.Button>
              {open ? (
                <MenuIcon className="transform rotate-90 w-7 h-7 -mb-1 text-purple-700 " />
              ) : (
                <MenuIcon className="w-7 h-7 -mb-1 text-purple-700" />
              )}
            </Popover.Button>
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
            <Popover.Panel className="absolute right-0 w-screen z-50">
              {LINKS.map((link) => (
                <Popover.Button
                  as={NavMobileLink}
                  key={link.name}
                  href={link.to}
                >
                  {link.name}
                </Popover.Button>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default function NavBar() {
  return (
    <header className="pt-6 pb-2">
      <nav className="max-w-prose lg:max-w-4xl mx-auto flex px-4 items-baseline justify-between">
        <div className="pr-2 py-2 text-2xl lg:text-4xl">
          <Link href="/">
            <a className="font-bold text-purple-700 border-b-2 border-transparent hover:border-purple-700 transition duration-300">
              {SITE_NAME}
            </a>
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex">
            {LINKS.map((link) => (
              <NavLink key={link.to} href={link.to}>
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
