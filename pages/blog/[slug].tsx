import BlogImage from 'components/BlogImage'
import Layout from 'components/Layout'
import format from 'date-fns/format'
import {getMDXComponent} from 'mdx-bundler/client'
import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import Image, {ImageProps} from 'next/image'
import React, {HTMLProps} from 'react'
import {SITE_NAME} from 'utils/constants'
import {getAllPostsFrontmatter, getPost} from 'utils/mdxUtils'

type Props = {
  code: string
  frontmatter: {
    slug: string
    title: string
    date: string
    tagline: string
    published: boolean
    imgUrl: string
    imgAlt: string
  }
}

function Img(props: HTMLProps<HTMLImageElement>) {
  return (
    <div className="-mx-4">
      <Image {...(props as ImageProps)} />
    </div>
  )
}

export default function PostPage({code, frontmatter}: Props) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  const formattedDate = format(new Date(frontmatter.date), 'do MMM yyyy')

  return (
    <Layout title={`${SITE_NAME} | BLOG | ${frontmatter.title}`}>
      <Head>
        <meta name="tagline" content={frontmatter.tagline} key="tagline"></meta>
      </Head>
      <div className="mt-24">
        <h1 className="mb-0 text-5xl font-extrabold">{frontmatter.title}</h1>
        <div className="text-sm text-gray-500">{formattedDate}</div>
      </div>
      {frontmatter.imgUrl ? (
        <BlogImage url={frontmatter.imgUrl} alt={frontmatter.imgAlt} />
      ) : null}
      <article className="prose mx-auto mt-12">
        <Component components={{img: Img}} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug

  const {code, frontmatter} = await getPost(slug)

  return {
    props: {
      code,
      frontmatter,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsFrontmatter()

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post?.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
