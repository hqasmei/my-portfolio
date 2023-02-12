import moment from "moment"
import Link from "next/link"

const PostPreview = (props) => {
  let date = new Date(props.date)
  let formattedDate = moment(date).format("ll")
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="rounded-md  p-4 transition duration-300 hover:bg-gray-700 hover:ease-in"
    >
      <div className="-my-4 flex flex-col justify-between border-b border-gray-200  py-6 md:flex-row">
        <div className="w-2/3">
          <h2 className="font-semibold text-gray-100 text-lg">{props.title}</h2>
          <p className="text-gray-300 text-sm">{props.subtitle}</p>
        </div>
        <div className="flex w-1/3 justify-end">
          <p className="text-sm text-gray-300">{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
