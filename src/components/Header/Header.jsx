import { useState } from 'react'

function Header({ onLoginClick, onSubscribeClick, onSearchClick, onHomeClick, onProfileClick, userAvatar, onSearch, searchQuery }) {
  const [query, setQuery] = useState(searchQuery || '')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
      onSearchClick()
    }
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[#ececec] bg-[#DCDCDC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <div
            className="flex cursor-pointer items-center gap-2 text-[#E04071] flex-shrink-0"
            onClick={onHomeClick}
          >
            <span className="text-xl">🍽</span>
            <span className="text-xl font-extrabold tracking-tight">Chefify</span>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xs hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-[#dcdcdc] bg-white px-4 py-2 text-sm placeholder-[#a3a3a3] transition focus:border-[#E04071] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a3a3a3] transition hover:text-[#E04071]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          <nav className="hidden items-center gap-6 text-sm text-[#6a6a6a] md:flex flex-shrink-0">
            <span
              className="cursor-pointer transition hover:text-[#E04071]"
              onClick={onHomeClick}
            >
              What to cook
            </span>
            <span
              className="cursor-pointer transition hover:text-[#E04071]"
              onClick={onSearchClick}
            >
              Recipes
            </span>
            <span className="cursor-pointer transition hover:text-[#E04071]">
              Ingredients
            </span>
            <span className="cursor-pointer transition hover:text-[#E04071]">
              About Us
            </span>
          </nav>

          <div className="flex items-center gap-3 text-sm flex-shrink-0">
            <button
              onClick={onLoginClick}
              className="text-[#666666] transition hover:text-[#333333]"
            >
              Login
            </button>
            <button
              onClick={onSubscribeClick}
              className="rounded-full bg-[#E04071] px-4 py-1.5 font-semibold text-white transition hover:brightness-95"
            >
              Subscribe
            </button>
            {userAvatar && (
              <button
                onClick={onProfileClick}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#E04071] overflow-hidden transition hover:border-[#d63563]"
              >
                <img
                  src={userAvatar}
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
