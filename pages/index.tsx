import Layout from 'components/Layout'
import Link from 'next/link'
import { SITE_NAME } from 'utils/constants'

export default function BlogList() {
  return (
    <div>
      <Layout title={`${SITE_NAME} | HOME`}>
        <p>Under construction. Stay tuned...</p>
        <p>
          But while you&apos;re here, why not check out the{' '}
          <Link href="/blog">
            <a className="text-pink-500">Blog</a>
          </Link>
        </p>
      </Layout>
    </div>
  )
}
