import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from '@reach/menu-button'
import Link from 'next/link'
import { ReactChild, useEffect } from 'react'

import { SITE_NAME } from '../utils/constants'

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

type NavLinkProps = {
  to?: string
  children: ReactChild
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <li>
      <Link href={`${to}`}>{children}</Link>
    </li>
  )
}

const NavMobileLink = ({ to, children }: NavLinkProps) => {
  return (
    <li className="px-5 py-2 list-none bg-white">
      <Link href={`${to}`}>
        <a className="underlined block whitespace-nowrap text-lg font-medium hover:bg-secondary focus:bg-secondary text-primary px-5vw py-9 hover:text-team-current border-b border-gray-200 dark:border-gray-600">
          {' '}
          {children}
        </a>
      </Link>
    </li>
  )
}

const MobileMenuList = () => {
  const { isExpanded } = useMenuButtonContext()

  return (
    <>
      {isExpanded ? (
        <MenuPopover
          style={{ display: 'block' }}
          position={(r) => ({
            top: `calc(${Number(r?.top) + Number(r?.height)}px + 2.25rem)`, // 2.25 rem = py-9 from navbar
            left: 0,
            bottom: 0,
            right: 0,
          })}
          className="z-50"
        >
          <div className="bg-primary flex flex-col pb-12 h-full border-t border-gray-200 overflow-y-scroll">
            <MenuItems className="p-0 bg-transparent border-none">
              {LINKS.map((link) => (
                <MenuLink as={NavMobileLink} key={link.to} to={link.to}>
                  {link.name}
                </MenuLink>
              ))}
            </MenuItems>
          </div>
        </MenuPopover>
      ) : null}
    </>
  )
}

const MobileMenu = () => {
  return (
    <Menu>
      {({ isExpanded }) => {
        return (
          <>
            <MenuButton>
              {isExpanded ? 'Close' : 'Open'} <span aria-hidden="true">▾</span>
            </MenuButton>
            <MobileMenuList />
          </>
        )
      }}
    </Menu>
  )
}

export default function NavBar() {
  useEffect(() => {
    console.log('Rendered')
  })
  return (
    <header className="pt-6 pb-2">
      <nav className="max-w-prose mx-auto flex px-4 items-baseline justify-between">
        <div className="pr-2 py-2 text-2xl lg:text-4xl">
          <Link href="/">
            <a className="font-bold text-purple-500 border-b-2 border-transparent hover:border-white transition duration-300">
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
