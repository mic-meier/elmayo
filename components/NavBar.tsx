import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {Fragment, ReactChild} from 'react'

import {SITE_NAME} from '../utils/constants'

const LINKS = [
  {name: 'Home', to: '/'},
  {name: 'About', to: '/about'},
  {name: 'Blog', to: '/blog'},
]

type LinkProps = {
  href: string
  children: ReactChild
  rest?: any // TODO: Figure this out
}

const NavLink = ({href, children}: LinkProps) => {
  return (
    <div className="px-5 py-2">
      <Link href={`${href}`}>
        <a data-test-id={`${href}-desktop`} className="hover:text-purple-700">
          {children}
        </a>
      </Link>
    </div>
  )
}

const NavMobileLink = (props: LinkProps) => {
  const {href, children, ...rest} = props
  return (
    <div className="py-2 list-none bg-white border-b border-purple-200">
      <Link href={href}>
        <a
          data-test-id={`${href}-mobile`}
          className="underlined block whitespace-nowrap text-lg text-center font-medium px-5vw py-9"
          {...rest}
        >
          {' '}
          {children}
        </a>
      </Link>
    </div>
  )
}

const MobileMenu = () => {
  return (
    <Popover className="relative">
      {({open}) => (
        <>
          <div>
            <Popover.Button>
              {open ? (
                <Bars3Icon className="transform rotate-90 w-7 h-7 -mb-1 text-purple-700 " />
              ) : (
                <Bars3Icon className="w-7 h-7 -mb-1 text-purple-700" />
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
            <Popover.Panel className="absolute right-0 -mr-4 mt-4 border-t border-purple-200 w-screen h-screen z-50 bg-white">
              {LINKS.map((link) => (
                <Popover.Button
                  as={NavMobileLink}
                  key={link.name}
                  href={link.to}
                >
                  {link.name}
                </Popover.Button>
              ))}
              <Popover.Button
                as="div"
                className="flex justify-center  py-2 list-none bg-white border-b border-purple-200"
              >
                <a
                  href="https://www.github.com/mic-meier"
                  className="underlined block mx-auto whitespace-nowrap px-5vw py-9 "
                >
                  <span>
                    <svg className="w-7 h-7">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </Popover.Button>
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
          <div className="hidden lg:flex">
            {LINKS.map((link) => (
              <NavLink key={link.to} href={link.to}>
                {link.name}
              </NavLink>
            ))}
            <a href="https://www.github.com/mic-meier" className="px-5 py-2">
              <span>
                <svg className="w-7 h-7">
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
