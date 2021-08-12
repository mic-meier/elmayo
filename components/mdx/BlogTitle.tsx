import format from 'date-fns/format'

export interface IProps {
  title: string
  date: string
}

const BlogTitle = ({ title, date }: IProps) => {
  const formattedDate = format(new Date(date), 'do MMM yyyy')

  return (
    <>
      <h1 className="pt-24 mb-0">{title}</h1>
      <div className="-mt-6 text-gray-500">{formattedDate}</div>
    </>
  )
}

export default BlogTitle
