import { useState } from 'react'

function DashboardReport() {
  const [currentPage, setCurrentPage] = useState(1)

  const reports = [
    { id: 1, name: 'Elizabeth Lee', company: 'AutobySystem', value: '$869', date: '02/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SmoothPath', value: '$767', date: '24/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '28/08/2023', status: 'In progress' },
    { id: 4, name: 'Bryan Brown', company: 'CyberTech Corporation', value: '$543', date: '31/10/2023', status: 'In progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$789', date: '15/10/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', company: 'FlowHub', value: '$532', date: '10/10/2023', status: 'Completed' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#ececec] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#ececec]">
        <h3 className="text-lg font-bold text-[#333333]">Detailed report</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#ececec] bg-[#f9f9f9]">
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="h-4 w-4 accent-[#E04071]" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                PARTNER NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                COMPANY
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                ORDER VALUE
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                ORDER DATE
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                STATUS
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#666666]">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b border-[#ececec] hover:bg-[#f9f9f9]">
                <td className="px-6 py-4">
                  <input type="checkbox" className="h-4 w-4 accent-[#E04071]" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60"
                      alt={report.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-[#333333]">{report.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#666666]">{report.company}</td>
                <td className="px-6 py-4 text-sm font-semibold text-[#333333]">{report.value}</td>
                <td className="px-6 py-4 text-sm text-[#a3a3a3]">{report.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    report.status === 'Completed'
                      ? 'bg-[#e8f5e9] text-[#2e7d32]'
                      : report.status === 'In progress'
                      ? 'bg-[#fff3e0] text-[#f57c00]'
                      : 'bg-[#e3f2fd] text-[#1976d2]'
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[#E04071] hover:text-[#d63563] transition">
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-[#ececec]">
        <span className="text-sm text-[#a3a3a3]">62 results</span>
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-[#f9f9f9]">
            ‹
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-8 w-8 items-center justify-center rounded text-sm transition ${
                currentPage === page
                  ? 'bg-[#E04071] text-white'
                  : 'hover:bg-[#f9f9f9]'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="flex h-8 w-8 items-center justify-center rounded transition hover:bg-[#f9f9f9]">
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardReport
