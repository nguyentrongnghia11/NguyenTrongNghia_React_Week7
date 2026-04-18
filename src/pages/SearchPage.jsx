import { useState } from 'react'
import SearchSidebar from '../components/Search/SearchSidebar'
import SearchResults from '../components/Search/SearchResults'

function SearchPage({ searchQuery, onSearchQueryChange }) {
  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="w-full rounded-full border border-[#dcdcdc] bg-[#f9f9f9] px-4 py-2.5 text-sm placeholder-[#a3a3a3] transition focus:border-[#E04071] focus:bg-white focus:outline-none"
          />
        </div>
        <div className="flex gap-8">
          <SearchSidebar />
          <SearchResults searchQuery={searchQuery} />
        </div>
      </div>
    </main>
  )
}

export default SearchPage
