import { useState } from 'react'
import ProfileInfo from '../components/Profile/ProfileInfo'
import RecipeCard from '../components/Profile/RecipeCard'

function ProfilePage({ onHomeClick }) {
  const [activeTab, setActiveTab] = useState('saved')
  const [currentPage, setCurrentPage] = useState(1)

  const recipes = [
    { id: 1, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=60', title: 'Italian-style tomato salad', minutes: '10 minutes' },
    { id: 2, image: 'https://images.unsplash.com/photo-1473093295203-cad00df16e50?auto=format&fit=crop&w=500&q=60', title: 'Vegetable and shrimp spaghetti', minutes: '20 minutes' },
    { id: 3, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', title: 'Lotus delight salad', minutes: '15 minutes' },
    { id: 4, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60', title: 'Snack cakes', minutes: '30 minutes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Salad with cabbage and shrimp', minutes: '18 minutes' },
    { id: 6, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60', title: 'Bean, shrimp, and potato salad', minutes: '25 minutes' },
    { id: 7, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Sunny-side up fried eggs', minutes: '10 minutes' },
    { id: 8, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60', title: 'Lotus delight salad', minutes: '12 minutes' },
  ]

  return (
    <main className="flex-1 bg-[#f9f9f9] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-[#666666]">
          <button
            onClick={onHomeClick}
            className="transition hover:text-[#E04071]"
          >
            Home
          </button>
          <span>›</span>
          <span className="text-[#E04071]">Your Recipe Box</span>
        </div>

        {/* Profile Info */}
        <div className="mb-8">
          <ProfileInfo />
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-[#ececec]">
          <div className="flex gap-6">
            {['saved', 'folders', 'by-gonzalez'].map((tab) => {
              const labels = {
                saved: 'Saved Recipes',
                folders: 'Folders',
                'by-gonzalez': 'Recipes by Gonzalez',
              }
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-1 py-3 text-sm font-semibold transition ${
                    activeTab === tab
                      ? 'border-[#E04071] text-[#E04071]'
                      : 'border-transparent text-[#999999] hover:text-[#666666]'
                  }`}
                >
                  {labels[tab]}
                </button>
              )
            })}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
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
          {[1, 2, 3, 4, 5].map((page) => (
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
      </div>
    </main>
  )
}

export default ProfilePage
