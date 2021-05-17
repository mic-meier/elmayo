import Head from 'next/head';

type Props = {
  title?: string;
};

export default function Meta({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      {/*TODO: Add favicons etc .*/}
    </Head>
  );
}
