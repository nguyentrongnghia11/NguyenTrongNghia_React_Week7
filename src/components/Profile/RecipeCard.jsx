function RecipeCard({ image, title, minutes }) {
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
        <p className="mt-2 text-xs text-[#a3a3a3]">{minutes} minutes</p>
      </div>
    </div>
  )
}

export default RecipeCard
