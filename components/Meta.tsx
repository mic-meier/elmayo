import Head from 'next/head'

type Props = {
  pageTitle?: string
}

export default function Meta({ pageTitle }: Props) {
  return (
    <Head>
      <title>{pageTitle}</title>
      {/*TODO: Add favicons etc .*/}
    </Head>
  )
}
