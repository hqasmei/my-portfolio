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
          className="rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300"
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Pagination
