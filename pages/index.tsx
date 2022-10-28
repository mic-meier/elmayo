import Layout from 'components/Layout'
import Link from 'next/link'
import {SITE_NAME} from 'utils/constants'

export default function Page() {
  return (
    <Layout title={`${SITE_NAME} | HOME`}>
      <p>Under construction. Stay tuned...</p>
      <p>
        But while you&apos;re here, why not check out the{' '}
        <Link href="/blog" className="text-purple-700">
          Blog
        </Link>
      </p>
    </Layout>
  )
}
