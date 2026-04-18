import { useState } from 'react'

function RecipeResultCard({ image, title, minutes }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg">
      <div className="relative overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition hover:scale-105"
        />
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#E04071] hover:text-white">
          ♡
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-[#333333]">{title}</h3>
        <p className="mt-2 text-xs text-[#a3a3a3]">{minutes}</p>
      </div>
    </div>
  )
}

function SearchResults({ searchQuery = '' }) {
  const [sortBy, setSortBy] = useState('a-z')
  const [currentPage, setCurrentPage] = useState(1)

  // Mock recipe data based on search
  const allRecipes = [
    { id: 1, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60', title: 'Cucumber salad with cherry tomatoes', minutes: '10 minutes' },
    { id: 2, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Green-style tomato salad', minutes: '15 minutes' },
    { id: 3, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', title: 'Potato salad', minutes: '20 minutes' },
    { id: 4, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60', title: 'Salad with cabbage and shrimp', minutes: '18 minutes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', title: 'Five-color salad', minutes: '12 minutes' },
    { id: 6, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Corn salad', minutes: '8 minutes' },
    { id: 7, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60', title: 'Salad with cabbage and shrimp', minutes: '16 minutes' },
    { id: 8, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', title: 'Lotus delight salad', minutes: '14 minutes' },
    { id: 9, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Avocado salad', minutes: '10 minutes' },
  ]

  const hasResults = searchQuery && allRecipes.length > 0

  return (
    <div className="flex-1">
      {hasResults ? (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#333333]">
              {searchQuery} <span className="text-[#a3a3a3]">({allRecipes.length})</span>
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666666]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border border-[#dcdcdc] bg-white px-3 py-2 text-sm text-[#333333] transition focus:border-[#E04071] focus:outline-none"
              >
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allRecipes.map((recipe) => (
              <RecipeResultCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                minutes={recipe.minutes}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-[#E04071] hover:text-white">
              ‹
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded text-sm transition ${
                  currentPage === page
                    ? 'bg-[#E04071] text-white'
                    : 'hover:bg-[#ececec]'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-[#E04071] hover:text-white">
              ›
            </button>
          </div>
        </>
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
            No results found
          </h2>

          <p className="mb-6 text-center text-sm text-[#a3a3a3]">
            Try searching with different keywords
          </p>

          <button className="rounded-full bg-[#E04071] px-6 py-2 text-sm font-semibold text-white transition hover:brightness-95">
            Back to Home
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchResults
