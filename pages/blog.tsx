import Layout from 'components/Layout'
import format from 'date-fns/format'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import {useState} from 'react'
import {IPost} from 'types/post'
import {SITE_NAME} from 'utils/constants'
import {getAllPostsFrontmatter} from 'utils/mdxUtils'

type Props = {
  posts: IPost[]
}

export default function BlogList({posts}: Props) {
  const blogCategories = [
    ...new Set(
      posts
        .flatMap((post) => {
          return post.categories
        })
        .filter((category) => category !== undefined),
    ),
  ]

  const [filter, setFilter] = useState('')

  const handleFiltering = (category: string) => {
    if (category === filter) {
      setFilter('')
    } else {
      setFilter(category)
    }
  }

  return (
    <Layout title={`${SITE_NAME} | BLOG`}>
      <h1 className="mt-12 mb-8 text-6xl font-bold text-gray-800">
        Blog Posts
      </h1>
      <div className="mb-12 flex flex-wrap">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleFiltering(category)}
            className={`my-1 mr-2 flex-none rounded-3xl px-2 py-1 text-xs text-gray-50 ${
              category === filter ? 'bg-purple-500' : ' bg-purple-700'
            }
          `}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-12">
        {posts.map((post) => {
          if (post.categories?.includes(filter) || filter === '') {
            let formattedDate
            if (post.date) {
              formattedDate = format(new Date(post.date), 'do MMM yyyy')
            }
            return (
              <div key={post.slug}>
                <h2 className="mb-4 text-2xl font-bold">
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
                {formattedDate ? <div>{formattedDate}</div> : null}
                <p>{post.tagline}</p>
              </div>
            )
          }
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsFrontmatter()

  return {props: {posts}}
}
