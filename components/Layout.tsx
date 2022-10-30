import Meta from './Meta'
import NavBar from './NavBar'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Layout({children, title = "El Mayo's HOME"}: Props) {
  return (
    <>
      <Meta title={title} />
      <div className="mx-auto max-w-full">
        <NavBar />
        <main className="mx-auto max-w-prose px-4 pt-4 pb-12">{children}</main>
      </div>
    </>
  )
}
