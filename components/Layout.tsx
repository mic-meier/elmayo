import Header from './Header'
import Meta from './Meta'

type Props = {
  children: React.ReactNode
  pageTitle?: string
}

export default function Layout({ children, pageTitle }: Props) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <div className="max-w-prose mx-auto px-4">
        <Header />
        <main className="pt-4 pb=12">{children}</main>
      </div>
    </>
  )
}
