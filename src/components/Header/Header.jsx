function Header({ onLoginClick, onSubscribeClick, onSearchClick, onHomeClick, onProfileClick, userAvatar }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ececec] bg-[#DCDCDC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <div
            className="flex cursor-pointer items-center gap-2 text-[#E04071]"
            onClick={onHomeClick}
          >
            <span className="text-xl">🍽</span>
            <span className="text-xl font-extrabold tracking-tight">Chefify</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#6a6a6a] md:flex">
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
          <div className="flex items-center gap-3 text-sm">
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
