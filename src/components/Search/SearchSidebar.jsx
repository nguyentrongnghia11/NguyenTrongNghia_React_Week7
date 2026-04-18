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
    <aside className="w-full space-y-6 md:w-64">
      {/* Type Filter */}
      <div>
        <h3 className="mb-3 flex items-center justify-between font-bold text-[#333333]">
          Type
          <span className="text-xl">−</span>
        </h3>
        <div className="space-y-2">
          {['All Food', 'Vegan', 'Sea food', 'Dessert'].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="h-4 w-4 rounded border-[#dcdcdc] accent-[#E04071]"
              />
              <span className="text-sm text-[#666666]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Filter */}
      <div>
        <h3 className="mb-3 flex items-center justify-between font-bold text-[#333333]">
          Time
          <span className="text-xl">−</span>
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="120"
            value={filters.timeMin}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, timeMin: parseInt(e.target.value) }))
            }
            className="w-full accent-[#E04071]"
          />
          <div className="flex items-center justify-between text-xs text-[#666666]">
            <span>{filters.timeMin} min</span>
            <span>120 min</span>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="mb-3 flex items-center justify-between font-bold text-[#333333]">
          Rating
          <span className="text-xl">−</span>
        </h3>
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
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
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
        className="w-full rounded-full bg-[#E04071] py-2.5 font-semibold text-white transition hover:brightness-95"
      >
        Apply
      </button>
    </aside>
  )
}

export default SearchSidebar
