import moment from "moment"
import Link from "next/link"

const PostPreview = (props) => {
  let date = new Date(props.date)
  let formattedDate = moment(date).format("ll")
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="rounded-md  transition duration-300 hover:bg-gray-600 hover:ease-in md:p-4"
    >
      <div className="flex flex-col-reverse justify-between border-b border-gray-200 py-6  md:-my-4 md:flex-row">
        <div className="md:w-3/4">
          <h2 className="text-lg font-semibold text-gray-100">{props.title}</h2>
          <p className="text-sm text-gray-300">{props.subtitle}</p>
        </div>
        <div className="flex justify-start md:w-1/4 md:justify-end">
          <p className="text-sm text-gray-300">{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
