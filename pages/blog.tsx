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
      <h1 className="text-6xl font-bold mt-12 mb-8 text-gray-800">
        Blog Posts
      </h1>
      <div className="mb-12 flex flex-wrap">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleFiltering(category)}
            className={`rounded-3xl px-2 py-1 mr-2 my-1 text-gray-50 text-xs flex-none ${
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
                <h2 className="text-2xl font-bold mb-4">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
