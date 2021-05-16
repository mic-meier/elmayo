import Layout from 'components/Layout';
import BlogImage from 'components/mdx/BlogImage';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { IPost } from 'types/post';
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
    <Layout pageTitle={frontMatter.title}>
      <Head>
        <meta name="tagline" content={frontMatter.tagline} key="tagline"></meta>
      </Head>
      <article>
        {/* TODO: Blog title component */}
        <MDXRemote {...source} components={components} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

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
