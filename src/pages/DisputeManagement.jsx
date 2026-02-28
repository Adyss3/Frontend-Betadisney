import { Link } from 'react-router-dom'

const DisputeManagement = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-row overflow-hidden">
        <aside className="hidden lg:flex flex-col w-72 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex-shrink-0 transition-colors duration-200">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2 py-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfMJKtmv8mqPo36dJ5emLQYDh1UxouyLmTUM9z7xevBPCx3rHtlkuJuZTWciW60JqmzXVzwL-yPvzqMC86HaP5TIV9VvD_ffuZHBljIfQ1gEtHbW5Z2EfiPUnt_Hkv7q_EAhrvMx8ODH96P3Ne1BowQvgOym_EtZvTYwGMXGWZWr7Q0nHRmxkXbNUvAObvGM6KVu8FvnziY8-b5fKxtINAESP-yEMGlgd17yzfVJXkGVU5EMALYEURKMo4-I31NiVeglAL4KBwHH5n')"}}></div>
                <div className="flex flex-col">
                  <h1 className="text-text-main-light dark:text-text-main-dark text-base font-bold leading-tight">Admin Console</h1>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium">super_admin@techshop.com</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2 mt-4">
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors" to="/admin">
                  <span className="material-symbols-outlined text-[24px]">dashboard</span>
                  <p className="text-sm font-medium">Dashboard</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors" to="/order-management">
                  <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                  <p className="text-sm font-medium">Orders</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors" to="/product-management">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                  <p className="text-sm font-medium">Products</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors" to="/dispute-management">
                  <span className="material-symbols-outlined text-[24px] fill-1">gavel</span>
                  <p className="text-sm font-bold">Disputes</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors" to="/user-management">
                  <span className="material-symbols-outlined text-[24px]">group</span>
                  <p className="text-sm font-medium">Customers</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors" to="/admin-settings">
                  <span className="material-symbols-outlined text-[24px]">settings</span>
                  <p className="text-sm font-medium">Settings</p>
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 cursor-pointer transition-colors mt-auto">
              <span className="material-symbols-outlined text-[24px]">logout</span>
              <p className="text-sm font-medium">Logout</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-background-light dark:bg-background-dark">
          <div className="flex-1 p-6 md:p-10 max-w-[1400px] mx-auto w-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 items-center text-sm">
                <Link className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary font-medium" to="/admin">Dashboard</Link>
                <span className="text-text-secondary-light dark:text-text-secondary-dark/50 font-medium">/</span>
                <span className="text-text-main-light dark:text-text-main-dark font-medium">Dispute Management</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-text-main-light dark:text-text-main-dark tracking-tight text-3xl font-bold leading-tight">Dispute Management</h1>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal">Manage and resolve customer disputes efficiently to maintain trust.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Export Report</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span>Create Ticket</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Total Disputes</p>
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark/50">folder_open</span>
                </div>
                <p className="text-text-main-light dark:text-text-main-dark text-3xl font-bold tracking-tight">1,248</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-green-600 text-sm">trending_up</span>
                  <p className="text-green-600 text-xs font-bold">+2.5%</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark/60 text-xs ml-1">vs last month</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1 bg-orange-400"></div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Pending Review</p>
                  <span className="material-symbols-outlined text-orange-400">pending_actions</span>
                </div>
                <p className="text-text-main-light dark:text-text-main-dark text-3xl font-bold tracking-tight">42</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-red-500 text-sm">trending_up</span>
                  <p className="text-red-500 text-xs font-bold">+5%</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark/60 text-xs ml-1">needs attention</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Resolved (Week)</p>
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                </div>
                <p className="text-text-main-light dark:text-text-main-dark text-3xl font-bold tracking-tight">156</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-green-600 text-sm">trending_up</span>
                  <p className="text-green-600 text-xs font-bold">+12%</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark/60 text-xs ml-1">efficiency up</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Avg Resolution Time</p>
                  <span className="material-symbols-outlined text-primary">timer</span>
                </div>
                <p className="text-text-main-light dark:text-text-main-dark text-3xl font-bold tracking-tight">48h</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-green-600 text-sm">trending_down</span>
                  <p className="text-green-600 text-xs font-bold">-2h</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark/60 text-xs ml-1">improved</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-card-light dark:bg-card-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">search</span>
                  </div>
                  <input className="block w-full p-2.5 pl-10 text-sm text-text-main-light dark:text-text-main-dark bg-background-light dark:bg-background-dark rounded-lg border border-transparent focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-card-light dark:focus:bg-card-dark transition-all placeholder-text-secondary-light/70 dark:placeholder-text-secondary-dark/70" placeholder="Search by Dispute ID, Order ID, or Name" type="text" />
                </div>
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                  <div className="relative">
                    <select className="appearance-none h-10 pl-3 pr-8 bg-background-light dark:bg-background-dark border border-transparent text-text-main-light dark:text-text-main-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <option>Status: All</option>
                      <option value="new">New</option>
                      <option value="review">Under Review</option>
                      <option value="resolved">Resolved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div className="relative">
                    <select className="appearance-none h-10 pl-3 pr-8 bg-background-light dark:bg-background-dark border border-transparent text-text-main-light dark:text-text-main-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                      <option>Reason: All</option>
                      <option value="damaged">Damaged Item</option>
                      <option value="wrong">Wrong Item</option>
                      <option value="missing">Never Arrived</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="flex items-center gap-2 h-10 px-3 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="material-symbols-outlined text-[20px] text-text-secondary-light dark:text-text-secondary-dark">calendar_today</span>
                      <span>Last 30 Days</span>
                      <span className="material-symbols-outlined text-[20px] text-text-secondary-light dark:text-text-secondary-dark ml-1">expand_more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <thead className="bg-gray-50 dark:bg-[#1f2e3d] text-xs uppercase font-semibold text-text-main-light dark:text-text-main-dark">
                    <tr>
                      <th className="p-4 w-4" scope="col">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </th>
                      <th className="px-6 py-4" scope="col">Dispute ID</th>
                      <th className="px-6 py-4" scope="col">Customer</th>
                      <th className="px-6 py-4" scope="col">Order Ref</th>
                      <th className="px-6 py-4" scope="col">Date Submitted</th>
                      <th className="px-6 py-4" scope="col">Reason</th>
                      <th className="px-6 py-4" scope="col">Status</th>
                      <th className="px-6 py-4 text-right" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    <tr className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">#DSP-9021</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYGZdNlsPsRBDaqY1_j783vsplnxbUwt_fMr5Kd7CYrPM15NFBk7yZgg3Z2abxyqr5pkYiLDklACn-KNjTAkkBtSHe54pqfboX6URhEPHs-6U1KN4HPdWmMIT7zHnNxublpyFUz0jePM5v0oB18Uf3KRzNbrUAQ8n4drLFcJR7xOxEjz5RTTqg21SijVQAyG8jlFg7eOeYX_xhYni1hQ_CFxfmwdE6f1KBnx0y9W6pEVVzETO_TsmLIOjwlBLGSGOPLUv34M0FccnA')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-text-main-light dark:text-text-main-dark">Sarah Jenkins</span>
                            <span className="text-xs">sarah.j@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Link className="text-primary hover:underline font-medium" to="#">#ORD-4452</Link></td>
                      <td className="px-6 py-4">Oct 24, 2023</td>
                      <td className="px-6 py-4">Product Damaged</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          Under Review
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary dark:text-blue-400 hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">#DSP-9020</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">MR</div>
                          <div className="flex flex-col">
                            <span className="font-medium text-text-main-light dark:text-text-main-dark">Mike Ross</span>
                            <span className="text-xs">mike.r@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Link className="text-primary hover:underline font-medium" to="#">#ORD-4451</Link></td>
                      <td className="px-6 py-4">Oct 23, 2023</td>
                      <td className="px-6 py-4">Wrong Item</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          New
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary dark:text-blue-400 hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">#DSP-9019</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3A7fcznfzdketcdEYJnjNkl57bpPe85Ub8g1gLuvbwGkYLTqHm3tE_gLOZ2R_Skizp1T-GZ7M0UQlSQqw8so-94dzwkRTMRUVCzJkgEbZB4ZmO7fB95rZ6Dhpor-7eu05qjStSy9hSKxVBTKSxzVXDamyX9fRSddh0mPNNDgNVgNdk34-m_xmi_eo6LFyl-3VsXMJFoTBt_ehtJDXiPj1NnpLfohrObVfpAxrKOC5io_p6y3oxpZ7PLccrjifZl0iJKAGIG21wabY')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-text-main-light dark:text-text-main-dark">Rachel Zane</span>
                            <span className="text-xs">rachel.z@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Link className="text-primary hover:underline font-medium" to="#">#ORD-4450</Link></td>
                      <td className="px-6 py-4">Oct 22, 2023</td>
                      <td className="px-6 py-4">Never Arrived</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Resolved
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary dark:text-blue-400 hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">#DSP-9018</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjSEkXsTbksLrnMG1A40I2ehSw0tPyJs9lXM2UrS61qrDsMYAlmfIwJToslpXnOfoEeOzvCKD88nNKqHhcdvxriLzXdwRC4f_OV_PH6YK__vy2podMumzV1Zol0igW3_JsukcHJtqz0QSrI59zfOQZh1TiQjQFLboWX7yRdQx05X_ndnY07luVns_kQvsKOg1V-Bi-Hf7ft_th7WhDtjv5lGvfOZssDaYPEug0QzDz6V4LKdVBZcIhoUVTkxus-TYqDh92q9SVRDRi')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-text-main-light dark:text-text-main-dark">Harvey Specter</span>
                            <span className="text-xs">harvey.s@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Link className="text-primary hover:underline font-medium" to="#">#ORD-4449</Link></td>
                      <td className="px-6 py-4">Oct 21, 2023</td>
                      <td className="px-6 py-4">Product Damaged</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          Rejected
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary dark:text-blue-400 hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-text-main-light dark:text-text-main-dark">#DSP-9017</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4UG2ztupM70OaBbUArDFseN-8k3qk5hLitpTkTVBpbse9noUVFcGhdVDniOT_lqPYilg2ILBqEHBTC2Tu2DveaW1rdLY1JyoWN6iLJJg5xGBT2p3ds1GiMD63jKXno3WUInqxcE151r_O6fBBpoIXviowJWQ9PGqy4rLgmJ0HaRzrSTmWqSOHoi1LK2aYP_VNe5fPohyUkCgCKkaYeqH6andj-UlfAVJcpmusSru3lfOONoC7k7BXbLdkMzyWNnroi347UHYSSh7')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-text-main-light dark:text-text-main-dark">Louis Litt</span>
                            <span className="text-xs">louis.l@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Link className="text-primary hover:underline font-medium" to="#">#ORD-4448</Link></td>
                      <td className="px-6 py-4">Oct 20, 2023</td>
                      <td className="px-6 py-4">Wrong Item</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Resolved
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary dark:text-blue-400 hover:underline">View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-border-light dark:border-border-dark gap-4">
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Showing <span className="font-semibold text-text-main-light dark:text-text-main-dark">1-10</span> of <span className="font-semibold text-text-main-light dark:text-text-main-dark">50</span>
                </span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-center h-8 w-8 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium">1</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">2</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">3</button>
                  <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm px-1">...</span>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">5</button>
                  <button className="flex items-center justify-center h-8 w-8 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            <footer className="mt-auto pt-6 text-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
              © 2023 TechShop Admin Console. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DisputeManagement
