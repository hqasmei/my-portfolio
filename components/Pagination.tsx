import React from "react"

interface PaginationProps {
  totalBooks: number
  booksPerPage: number
  setBooksPerPage: (booksPerPage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalBooks,
  booksPerPage,
  setBooksPerPage,
}) => {
  const handleLoadMore = () => {
    setBooksPerPage(booksPerPage + 6)
  }

  return (
    <div className="flex items-center justify-center">
      {booksPerPage < totalBooks && (
        <button
          onClick={() => handleLoadMore()}
          type="button"
          className="mt-6 rounded-lg border border-stone-500 bg-stone-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-stone-700 hover:bg-stone-700 focus:ring focus:ring-stone-200 disabled:cursor-not-allowed disabled:border-stone-300 disabled:bg-stone-300"
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Pagination
