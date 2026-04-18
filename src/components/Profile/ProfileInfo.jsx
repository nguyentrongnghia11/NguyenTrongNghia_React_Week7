function ProfileInfo() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-[#FFD89B] to-[#FF9A76]">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Emma Gonzalez"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#333333]">Emma Gonzalez's Recipe Box</h1>
          <p className="mt-2 text-sm text-[#666666]">
            Emma (broadcast is a deputy editor at Chefify, bringing her expertise as a former cooking editor of The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide variety of cuisine.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button className="rounded-full border-2 border-[#E04071] px-6 py-2 text-sm font-semibold text-[#E04071] transition hover:bg-[#f9e6f0]">
              6 Subscribers
            </button>
            <button className="rounded-full bg-[#E04071] px-6 py-2 text-sm font-semibold text-white transition hover:brightness-95">
              Share +d
            </button>
          </div>
        </div>

        {/* Avatar on right for mobile (alternative layout) */}
        <div className="hidden flex-shrink-0 md:block" />
      </div>
    </div>
  )
}

export default ProfileInfo
