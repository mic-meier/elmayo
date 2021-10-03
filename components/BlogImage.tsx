import Image from 'next/image'

type Props = {
  url: string
  alt: string
}

export default function BlogImage({ url, alt }: Props) {
  return (
    <div className="mt-12">
      <Image src={`${url}`} alt={alt} width={720} height={405} />
    </div>
  )
}
