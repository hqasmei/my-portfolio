import moment from "moment"
import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
  let date = new Date(props.date)
  let formattedDate = moment(date).format("LL")
  return (
    <div className="border-t-2 border-gray-300 p-4 bg-white mb-10">
      <div className="container flex">
        <div className="w-1/3">
          <p className="text-sm text-slate-400">{formattedDate}</p>
        </div>

        <div className="w-2/3">
          <Link href={`/posts/${props.slug}`}>
            <h2 className="text-xl text-teal-600 font-semibold hover:underline mb-4">
              {props.title}
            </h2>
          </Link>
          <p className="text-slate-700">{props.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
