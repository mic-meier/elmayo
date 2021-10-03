import Layout from 'components/Layout'
import format from 'date-fns/format'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { IPost } from 'types/post'
import { SITE_NAME } from 'utils/constants'
import { getAllPostsFrontmatter } from 'utils/mdxUtils'

type Props = {
  posts: IPost[]
}

export default function BlogList({ posts }: Props) {
  return (
    <Layout title={`${SITE_NAME} | BLOG`}>
      <h1 className="text-6xl font-bold mt-12 mb-12 text-gray-800">
        Blog Posts
      </h1>
      <div className="space-y-12">
        {posts.map((post) => {
          let formattedDate
          if (post.date) {
            formattedDate = format(new Date(post.date), 'do MMM yyyy')
          }
          return (
            <div key={post.slug}>
              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              {formattedDate ? <div>{formattedDate}</div> : null}
              <p>{post.tagline}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsFrontmatter()

  return { props: { posts } }
}
