function DashboardSidebar({ activeMenu, onMenuClick }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-white border-r border-[#ececec] pt-6">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2 text-[#E04071]">
          <span className="text-2xl">🍽</span>
          <span className="font-bold text-lg">Logo</span>
        </div>
      </div>

      <nav className="space-y-1 px-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
              activeMenu === item.id
                ? 'bg-[#E04071] text-white'
                : 'text-[#666666] hover:bg-[#f9f9f9]'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default DashboardSidebar
