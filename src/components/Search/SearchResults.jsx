function SearchResults({ searchQuery = '' }) {
  const hasResults = false // Mặc định không có results

  return (
    <div className="flex-1">
      {hasResults ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Recipe cards would go here */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          {/* Search Icon */}
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f0e6f0]">
            <svg
              className="h-12 w-12 text-[#E04071]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <h2 className="mb-2 text-xl font-bold text-[#333333]">
            Sorry, no results were found for "{searchQuery}"
          </h2>

          <p className="mb-6 text-center text-sm text-[#a3a3a3]">
            We have all your independence Day sweets covered
          </p>

          <div className="flex gap-3">
            <button className="rounded-full bg-[#E04071] px-6 py-2 text-sm font-semibold text-white transition hover:brightness-95">
              View Cakes
            </button>
            <button className="rounded-full border-2 border-[#E04071] px-6 py-2 text-sm font-semibold text-[#E04071] transition hover:bg-[#f9e6f0]">
              Order Here
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResults
