import Layout from 'components/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { IPost } from 'types/post';
import { SITE_NAME } from 'utils/constants';
import { getAllPosts } from 'utils/mdxUtils';

type Props = {
  posts: IPost[];
};

export default function BlogList({ posts }: Props) {
  return (
    <Layout pageTitle={SITE_NAME}>
      <h1 className="text-4xl font-bold mb-4 text-purple-700">Blog</h1>
      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <p>{post.tagline}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'tagline', 'title']);

  return { props: { posts } };
};
