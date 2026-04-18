function DashboardStats() {
  const stats = [
    { label: 'Turnover', value: '$92,405', change: '5.8%', trend: 'up' },
    { label: 'Profit', value: '$32,218', change: '3.2%', trend: 'up' },
    { label: 'New customer', value: '298', change: '5.4%', trend: 'up' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-[#ececec]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#a3a3a3] mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-[#333333]">{stat.value}</p>
              <p className="text-xs text-[#a3a3a3] mt-2">
                {stat.trend === 'up' ? '↑' : '↓'} {stat.change} percent of change
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e6f0]">
              <span className="text-lg">{['📊', '💰', '👤'][index]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats
