import moment from "moment"
import Link from "next/link"

const PostPreview = (props) => {
  let date = new Date(props.date)
  let formattedDate = moment(date).format("ll")
  return (
    <div className="hover:-mx-4">
      <Link
        href={`/posts/${props.slug}`}
        className="rounded-md  transition duration-300 hover:ease-in md:hover:bg-neutral-600"
      >
        <div className="flex flex-col-reverse justify-between border-b border-neutral-200 py-6   md:flex-row">
          <div className="md:w-3/4">
            <h2 className="text-lg font-semibold text-neutral-100">
              {props.title}
            </h2>
          </div>
          <div className="flex justify-start md:w-1/4 md:justify-end">
            <p className="text-sm text-neutral-300">{formattedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostPreview
