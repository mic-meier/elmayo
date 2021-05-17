import Layout from 'components/Layout';
import BlogImage from 'components/mdx/BlogImage';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { IPost } from 'types/post';
import { SITE_NAME } from 'utils/constants';
import { getAllPosts, getPost } from 'utils/mdxUtils';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const components = {
  BlogImage,
};

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <Layout title={`${SITE_NAME} | BLOG | ${frontMatter.title}`}>
      <Head>
        <meta name="tagline" content={frontMatter.tagline} key="tagline"></meta>

        <link
          href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css"
          rel="stylesheet"
        />
      </Head>
      <article className="prose mx-auto">
        {/* TODO: Blog title component */}
        <MDXRemote {...source} components={components} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
