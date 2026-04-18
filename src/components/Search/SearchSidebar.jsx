import { useState } from 'react'

function SearchSidebar() {
  const [filters, setFilters] = useState({
    type: [],
    timeMin: 0,
    timeMax: 120,
    rating: 0,
  })

  const handleTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }))
  }

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? 0 : rating,
    }))
  }

  const handleApplyFilters = () => {
    console.log('Applied filters:', filters)
  }

  return (
    <aside className="w-full space-y-6 md:w-64 flex-shrink-0">
      <div className="bg-white p-5 rounded-lg">
        <h3 className="mb-1 text-sm font-bold text-[#333333]">FILTERS</h3>

        {/* Type Filter */}
        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#333333]">Type</label>
            <span className="text-lg text-[#dcdcdc]">−</span>
          </div>
          <div className="space-y-2">
            {['Pan-fried', 'Grilled', 'Sea food', 'Baked', 'Stewed'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="h-4 w-4 rounded border-[#dcdcdc] accent-[#E04071]"
                />
                <span className="text-xs text-[#666666]">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#333333]">Time</label>
            <span className="text-lg text-[#dcdcdc]">−</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#666666]">30 minutes</span>
              <div className="flex-1 h-1 bg-[#E04071] rounded-full"></div>
              <span className="text-xs text-[#666666]">90 minutes</span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#333333]">Rating</label>
            <span className="text-lg text-[#dcdcdc]">−</span>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="h-4 w-4 accent-[#E04071]"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < rating ? 'text-[#FFB800]' : 'text-[#dcdcdc]'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApplyFilters}
          className="mt-5 w-full rounded-full bg-[#E04071] py-2 font-semibold text-white text-sm transition hover:brightness-95"
        >
          Apply
        </button>
      </div>
    </aside>
  )
}

export default SearchSidebar
