import { useState } from 'react'
import Header from './components/Header/Header'
import OnboardingModal from './components/OnboardingModal/OnboardingModal'
import LoginModal from './components/LoginModal/LoginModal'
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('cakescacsa')
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Mock logged in user
  const userAvatar = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'

  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onSubscribeClick={() => setIsModalOpen(true)}
        onSearchClick={() => handleNavClick('search')}
        onHomeClick={() => handleNavClick('home')}
        onProfileClick={() => handleNavClick('profile')}
        userAvatar={isLoggedIn ? userAvatar : null}
      />

      {currentPage === 'search' ? (
        <>
          <SearchPage searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
          <Footer />
        </>
      ) : currentPage === 'profile' ? (
        <>
          <ProfilePage onHomeClick={() => handleNavClick('home')} />
          <Footer />
        </>
      ) : (
        <>
          <main className="relative flex-1 overflow-hidden bg-[#f1f1f1] px-4 py-8">
            <div className="mx-auto w-full max-w-6xl rounded-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
              <section className="relative h-[620px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1800&q=80"
                  alt="Cooking background"
                  className="h-full w-full object-cover"
                />
              </section>
            </div>

            {isModalOpen && <OnboardingModal onClose={() => setIsModalOpen(false)} />}
            {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
