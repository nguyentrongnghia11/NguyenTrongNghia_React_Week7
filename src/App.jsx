import { useState } from 'react'
import OnboardingModal from './components/OnboardingModal/OnboardingModal'
import LoginModal from './components/LoginModal/LoginModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f1f1f1] px-4 py-8">
      <div className="mx-auto w-full max-w-6xl rounded-sm bg-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
        <header className="flex h-14 items-center justify-between border-b border-[#ececec] bg-[#DCDCDC] px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[#E04071]">
            <span className="text-xl">🍽</span>
            <span className="text-xl font-extrabold tracking-tight">Chefify</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#6a6a6a] md:flex">
            <span>What to cook</span>
            <span>Recipes</span>
            <span>Ingredients</span>
            <span>About Us</span>
          </nav>
          <div className="hidden items-center gap-3 text-sm sm:flex">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-[#666666] transition hover:text-[#333333]"
            >
              Login
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-[#E04071] px-4 py-1.5 font-semibold text-white transition hover:brightness-95"
            >
              Subscribe
            </button>
          </div>
        </header>

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
  )
}

export default App
