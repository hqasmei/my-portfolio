import React from "react"

interface PaginationProps {
  totalPosts: number
  postsPerPage: number
  setPostsPerPage: (postsPerPage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  setPostsPerPage,
}) => {
  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 9)
  }

  return (
    <div className="flex items-center justify-center">
      {postsPerPage < totalPosts && (
        <button
          onClick={() => handleLoadMore()}
          type="button"
          className="rounded-lg border border-stone-500 bg-stone-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-stone-700 hover:bg-stone-700 focus:ring focus:ring-stone-200 disabled:cursor-not-allowed disabled:border-stone-300 disabled:bg-stone-300"
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Pagination
