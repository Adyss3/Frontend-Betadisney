import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white antialiased">
      <div className="relative flex h-screen w-full overflow-hidden">
        <aside className="flex flex-col w-64 h-full bg-white dark:bg-[#1A2633] border-r border-[#f0f2f4] dark:border-[#2C3B4E] flex-shrink-0 transition-all duration-300">
          <div className="flex items-center gap-3 px-6 py-6 border-b border-[#f0f2f4] dark:border-[#2C3B4E]">
            <div className="bg-primary aspect-square rounded-lg size-10 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight">TechStore</h1>
              <p className="text-[#617589] dark:text-[#9BA8B8] text-xs font-medium mt-1">Admin Panel</p>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            <div className="flex flex-col gap-1">
              <div className="px-2 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider mb-2">Main</div>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group transition-colors" to="#">
                <span className="material-symbols-outlined icon-fill">dashboard</span>
                <span className="text-sm font-semibold">Overview</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/product-management">
                <span className="material-symbols-outlined">inventory_2</span>
                <span className="text-sm font-medium">Products</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/order-management">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="text-sm font-medium">Orders</span>
                <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">4</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/user-management">
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm font-medium">Users</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/category-management">
                <span className="material-symbols-outlined">category</span>
                <span className="text-sm font-medium">Categories</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="px-2 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider mb-2">Management</div>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/dispute-management">
                <span className="material-symbols-outlined">error</span>
                <span className="text-sm font-medium">Disputes</span>
                <span className="ml-auto bg-[#e73908] text-white text-xs font-bold px-2 py-0.5 rounded-full">12</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] hover:text-[#111418] dark:hover:text-white transition-colors" to="/admin-settings">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t border-[#f0f2f4] dark:border-[#2C3B4E]">
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#e73908] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] transition-colors" to="#">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Log Out</span>
            </Link>
          </div>
        </aside>

        <div className="flex flex-col flex-1 h-full overflow-hidden bg-background-light dark:bg-background-dark">
          <header className="flex items-center justify-between h-20 px-8 bg-white dark:bg-[#1A2633] border-b border-[#f0f2f4] dark:border-[#2C3B4E] flex-shrink-0">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">Dashboard Overview</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative hidden md:block w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#617589] dark:text-[#9BA8B8]">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-[#f0f2f4] dark:bg-[#2C3B4E] text-[#111418] dark:text-white placeholder-[#617589] dark:placeholder-[#9BA8B8] focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#374659] transition duration-150 ease-in-out sm:text-sm" placeholder="Search products, orders, or users..." type="text" />
              </div>
              <div className="flex items-center gap-3 border-l border-[#f0f2f4] dark:border-[#2C3B4E] pl-6">
                <button className="relative p-2 rounded-full text-[#617589] dark:text-[#9BA8B8] hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E] transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                </button>
                <button className="flex items-center gap-3 pl-2 focus:outline-none">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-[#111418] dark:text-white leading-none">Jane Admin</p>
                    <p className="text-xs text-[#617589] dark:text-[#9BA8B8] mt-1">Super Admin</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-[#2C3B4E] shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBimhuwvmBjNURZFGHjkkBJy8-wdQAfhSim_rHmv4T75iAXka3o7wWzPFPyfs78qd68RWpZP4E5dtu7npi_5kt4muKdu73w9DLRG4qMekY-CZFIpUWX7dQTTUkd4MUJmlnOpZXVc_bLkv7UfmT0M3s6n--NaSaXNi0-Z6SNsqHOgMZj1q1Q8jp4oZ5PoxHkGLVQWYDDDwDkxV6m8QH1rqDZibrFMpAbFRKSHqTErQtRxyR4ad8SpHcpe_W0F36PmaolCUHHZYmBNhoh')"}}></div>
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white">Performance Metrics</h3>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Live</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A2633] border border-[#dbe0e6] dark:border-[#2C3B4E] rounded-lg text-sm font-bold text-[#111418] dark:text-white shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#253341] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    <span>Last 30 Days</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Export Report</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-[#1A2633] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm flex flex-col justify-between h-36">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#617589] dark:text-[#9BA8B8] text-sm font-medium mb-1">Total Revenue</p>
                      <h4 className="text-2xl font-extrabold text-[#111418] dark:text-white tracking-tight">$124,500</h4>
                    </div>
                    <div className="bg-[#ecfdf3] dark:bg-[#078838]/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-[#078838] dark:text-[#4ade80]">payments</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="material-symbols-outlined text-[#078838] text-[16px]">trending_up</span>
                    <span className="text-[#078838] text-sm font-bold">+5.2%</span>
                    <span className="text-[#617589] dark:text-[#9BA8B8] text-sm ml-1">vs last month</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1A2633] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm flex flex-col justify-between h-36">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#617589] dark:text-[#9BA8B8] text-sm font-medium mb-1">New Orders</p>
                      <h4 className="text-2xl font-extrabold text-[#111418] dark:text-white tracking-tight">45</h4>
                    </div>
                    <div className="bg-[#fff1f2] dark:bg-[#e73908]/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-[#e73908] dark:text-[#fb7185]">shopping_cart</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="material-symbols-outlined text-[#e73908] text-[16px]">trending_down</span>
                    <span className="text-[#e73908] text-sm font-bold">-1.4%</span>
                    <span className="text-[#617589] dark:text-[#9BA8B8] text-sm ml-1">vs last month</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1A2633] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm flex flex-col justify-between h-36">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#617589] dark:text-[#9BA8B8] text-sm font-medium mb-1">Active Users</p>
                      <h4 className="text-2xl font-extrabold text-[#111418] dark:text-white tracking-tight">1,200</h4>
                    </div>
                    <div className="bg-[#eff6ff] dark:bg-primary/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-primary dark:text-blue-400">group</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="material-symbols-outlined text-[#078838] text-[16px]">trending_up</span>
                    <span className="text-[#078838] text-sm font-bold">+12%</span>
                    <span className="text-[#617589] dark:text-[#9BA8B8] text-sm ml-1">vs last month</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1A2633] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm flex flex-col justify-between h-36">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#617589] dark:text-[#9BA8B8] text-sm font-medium mb-1">Pending Disputes</p>
                      <h4 className="text-2xl font-extrabold text-[#111418] dark:text-white tracking-tight">12</h4>
                    </div>
                    <div className="bg-[#fff7ed] dark:bg-orange-900/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">gavel</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="material-symbols-outlined text-[#e73908] text-[16px]">warning</span>
                    <span className="text-[#e73908] text-sm font-bold">Action Required</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-[#1A2633] rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#111418] dark:text-white">Sales Revenue</h3>
                      <p className="text-sm text-[#617589] dark:text-[#9BA8B8]">Revenue over time</p>
                    </div>
                    <div className="flex bg-[#f0f2f4] dark:bg-[#2C3B4E] rounded-lg p-1">
                      <button className="px-3 py-1 rounded-md bg-white dark:bg-[#374659] text-xs font-bold shadow-sm text-[#111418] dark:text-white">Week</button>
                      <button className="px-3 py-1 rounded-md text-xs font-bold text-[#617589] dark:text-[#9BA8B8] hover:text-[#111418] dark:hover:text-white transition">Month</button>
                      <button className="px-3 py-1 rounded-md text-xs font-bold text-[#617589] dark:text-[#9BA8B8] hover:text-[#111418] dark:hover:text-white transition">Year</button>
                    </div>
                  </div>
                  <div className="relative w-full h-64">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#137fec',stopOpacity:0.2}} />
                          <stop offset="100%" style={{stopColor:'#137fec',stopOpacity:0}} />
                        </linearGradient>
                      </defs>
                      <line stroke="#f0f2f4" strokeWidth="1" x1="0" y1="250" x2="800" y2="250" />
                      <line stroke="#f0f2f4" strokeWidth="1" x1="0" y1="190" x2="800" y2="190" />
                      <line stroke="#f0f2f4" strokeWidth="1" x1="0" y1="130" x2="800" y2="130" />
                      <line stroke="#f0f2f4" strokeWidth="1" x1="0" y1="70" x2="800" y2="70" />
                      <path d="M0 250 L100 180 L200 210 L300 120 L400 150 L500 80 L600 100 L700 40 L800 60" fill="none" stroke="#137fec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path d="M0 250 L100 180 L200 210 L300 120 L400 150 L500 80 L600 100 L700 40 L800 60 V 300 H 0 Z" fill="url(#gradient)" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] px-2">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Sales by Category</h3>
                  <div className="flex-1 flex items-center justify-center relative">
                    <svg className="donut" width="200" height="200" viewBox="0 0 42 42">
                      <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent" />
                      <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f0f2f4" strokeWidth="6" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#137fec" strokeWidth="6" strokeDasharray="40 60" strokeDashoffset="25" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#0ea5e9" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="85" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#bae6fd" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="55" />
                      <g className="chart-text">
                        <text className="chart-number text-[8px] font-bold fill-[#111418] dark:fill-white text-center" x="50%" y="50%" textAnchor="middle" dy="0.3em">100%</text>
                      </g>
                    </svg>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#137fec]"></div>
                        <span className="text-sm font-medium text-[#111418] dark:text-white">Computers</span>
                      </div>
                      <span className="text-sm font-bold text-[#617589] dark:text-[#9BA8B8]">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#0ea5e9]"></div>
                        <span className="text-sm font-medium text-[#111418] dark:text-white">Phones</span>
                      </div>
                      <span className="text-sm font-bold text-[#617589] dark:text-[#9BA8B8]">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#bae6fd]"></div>
                        <span className="text-sm font-medium text-[#111418] dark:text-white">Accessories</span>
                      </div>
                      <span className="text-sm font-bold text-[#617589] dark:text-[#9BA8B8]">30%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#dbe0e6] dark:border-[#2C3B4E] shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 pb-4 gap-4">
                  <h3 className="text-lg font-bold text-[#111418] dark:text-white">Recent Orders</h3>
                  <div className="flex gap-2">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-[#617589] text-[18px]">filter_list</span>
                      </span>
                      <select className="pl-9 pr-8 py-2 bg-[#f0f2f4] dark:bg-[#2C3B4E] border-none rounded-lg text-sm font-medium text-[#111418] dark:text-white focus:ring-0 cursor-pointer appearance-none">
                        <option>All Status</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Dispute</option>
                      </select>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">View All</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f9fafb] dark:bg-[#253341] border-y border-[#dbe0e6] dark:border-[#2C3B4E]">
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider w-32">Order ID</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider">Product</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider text-right">Amount</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-[#9BA8B8] uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2C3B4E]">
                      <tr className="hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">#ORD-4422</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOP-x6K1iGCN_RTB64HtCeXhBW13Fa9UOs-ARZr9sU34SSD-dlyo1KkzHp4Rk0Z2YJLYeJml56K64JUN9IkPwUmlb1B_zv-LmIhPbyA2MOo7pgT8LpEu21DiqmMibx5tLDPulZUss1JFgID2LFnD5Vr01JYOHo8oEn54GFj3kjeQ6o7pbq8Q3A8XScwQOf87XpsGl4ln4qO3oHX4V0tXIaUQMl6ontJNo-3ELdOLpUNngZ7JYh87vMdeSWRjoBuNwSIXikOd6UtGPq')"}}></div>
                            <div className="text-sm font-medium text-[#111418] dark:text-white">John Doe</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">MacBook Pro M2</td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">Oct 24, 2023</td>
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white text-right">$2,499.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Completed</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#617589] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">#ORD-4423</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">AS</div>
                            <div className="text-sm font-medium text-[#111418] dark:text-white">Alice Smith</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">iPhone 15 Pro</td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">Oct 24, 2023</td>
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white text-right">$1,199.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Pending</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#617589] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">#ORD-4424</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAT69XFyF9Y9H73JmJeBxuIai7qgZkVs1K5TDwgSl1m3jPBf5vyFn16HvvSq8sCriPgrYCOiE6upKfy6aLY4ClqjI6oVm2S0qvMuTH91tuedudBoO_C6gubNVaI5-0KFcvW-LxK1BxGa9JHl1a4jk72oRHWedXZLDg4_rjXNfywMFh4by2sdyc4kpFlmsgVR68Z2i03vqvv8EnS5fBFtC8LCBH90x0Bylsmdb4pPGEfBNhmUETgR4y2RwUnBJpN2bVOCGpqE_1PMCtL')"}}></div>
                            <div className="text-sm font-medium text-[#111418] dark:text-white">Robert Fox</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">USB-C Hub</td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">Oct 23, 2023</td>
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white text-right">$89.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Dispute</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#617589] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f0f2f4] dark:hover:bg-[#2C3B4E]/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white">#ORD-4425</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">EM</div>
                            <div className="text-sm font-medium text-[#111418] dark:text-white">Eleanor M.</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">Samsung S23 Ultra</td>
                        <td className="px-6 py-4 text-sm text-[#617589] dark:text-[#9BA8B8]">Oct 23, 2023</td>
                        <td className="px-6 py-4 text-sm font-bold text-[#111418] dark:text-white text-right">$1,199.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Completed</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#617589] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
