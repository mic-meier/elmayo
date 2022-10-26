import Layout from 'components/Layout'
import Link from 'next/link'
import {SITE_NAME} from 'utils/constants'

export default function AboutPage() {
  return (
    <div>
      <Layout title={`${SITE_NAME} | ABOUT`}>
        <p>Under construction. Stay tuned...</p>
        <p>
          But while you&apos;re here, why not check out the{' '}
          <Link href="/blog" className="text-purple-700 hover:underline">
            Blog
          </Link>
        </p>
      </Layout>
    </div>
  )
}
