import { useState } from 'react'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import DashboardSidebar from '../components/Dashboard/DashboardSidebar'
import DashboardStats from '../components/Dashboard/DashboardStats'
import DashboardReport from '../components/Dashboard/DashboardReport'

function DashboardPage({ userAvatar }) {
  const [activeMenu, setActiveMenu] = useState('dashboard')

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <DashboardHeader userAvatar={userAvatar} />
      <DashboardSidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />

      <div className="ml-56 pt-20 px-6 pb-6">
        <div className="flex gap-6">
          {/* Left side - Illustration */}
          <div className="hidden lg:flex flex-shrink-0 flex-col items-center justify-center w-48">
            <div className="relative mb-4">
              <div className="w-40 h-40 bg-gradient-to-br from-[#FFE5B4] to-[#FFD89B] rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="30" r="20" strokeWidth="2" className="text-[#E04071]" />
                  <path d="M 30 50 Q 50 70 70 50" strokeWidth="2" className="text-[#E04071]" />
                  <rect x="25" y="60" width="50" height="20" strokeWidth="2" className="text-[#E04071]" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-center text-[#333333] mb-2">V2.0 is available</h3>
            <button className="rounded-full bg-[#E04071] text-white px-6 py-2 text-sm font-semibold transition hover:brightness-95">
              Try now
            </button>
          </div>

          {/* Right side - Main content */}
          <div className="flex-1">
            <DashboardStats />
            <DashboardReport />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
