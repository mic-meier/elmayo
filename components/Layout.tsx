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
      <div className="max-w-full mx-auto">
        <NavBar />
        <main className="max-w-prose mx-auto pt-4 pb-12 px-4">{children}</main>
      </div>
    </>
  )
}
