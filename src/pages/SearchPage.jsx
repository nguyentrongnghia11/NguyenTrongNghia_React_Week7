import { useState } from 'react'
import SearchSidebar from '../components/Search/SearchSidebar'
import SearchResults from '../components/Search/SearchResults'

function SearchPage({ searchQuery, onSearchQueryChange }) {
  const [localQuery, setLocalQuery] = useState(searchQuery)

  const handleSearch = (e) => {
    const query = e.target.value
    setLocalQuery(query)
    onSearchQueryChange(query)
  }

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search recipes..."
            value={localQuery}
            onChange={handleSearch}
            className="flex-1 rounded-full border border-[#dcdcdc] bg-[#f9f9f9] px-4 py-2.5 text-sm placeholder-[#a3a3a3] transition focus:border-[#E04071] focus:bg-white focus:outline-none"
          />
          <svg className="h-5 w-5 text-[#a3a3a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex gap-8">
          <SearchSidebar />
          <SearchResults searchQuery={localQuery} />
        </div>
      </div>
    </main>
  )
}

export default SearchPage
