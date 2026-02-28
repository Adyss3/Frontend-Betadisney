import { Link } from 'react-router-dom'

const OrderManagement = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white flex h-screen overflow-hidden">
      <aside className="w-64 bg-white dark:bg-[#1a2632] border-r border-[#e5e7eb] dark:border-gray-800 flex-col hidden lg:flex flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-[#f0f2f4] dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <div>
              <h1 className="text-base font-bold leading-none tracking-tight">TechStore</h1>
              <p className="text-[#617589] dark:text-gray-400 text-xs font-normal mt-1">Admin Console</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/admin">
            <span className="material-symbols-outlined group-hover:text-[#111418] dark:group-hover:text-white">dashboard</span>
            <span className="text-sm font-medium group-hover:text-[#111418] dark:group-hover:text-white">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/order-management">
            <span className="material-symbols-outlined fill">shopping_bag</span>
            <span className="text-sm font-bold">Orders</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/product-management">
            <span className="material-symbols-outlined group-hover:text-[#111418] dark:group-hover:text-white">smartphone</span>
            <span className="text-sm font-medium group-hover:text-[#111418] dark:group-hover:text-white">Products</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/user-management">
            <span className="material-symbols-outlined group-hover:text-[#111418] dark:group-hover:text-white">people</span>
            <span className="text-sm font-medium group-hover:text-[#111418] dark:group-hover:text-white">Customers</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/admin">
            <span className="material-symbols-outlined group-hover:text-[#111418] dark:group-hover:text-white">bar_chart</span>
            <span className="text-sm font-medium group-hover:text-[#111418] dark:group-hover:text-white">Analytics</span>
          </Link>
          <div className="mt-4 pt-4 border-t border-[#f0f2f4] dark:border-gray-800">
            <p className="px-3 text-xs font-semibold text-[#617589] uppercase tracking-wider mb-2">Settings</p>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:text-gray-400 dark:hover:bg-gray-800 transition-colors group" to="/admin-settings">
              <span className="material-symbols-outlined group-hover:text-[#111418] dark:group-hover:text-white">settings</span>
              <span className="text-sm font-medium group-hover:text-[#111418] dark:group-hover:text-white">General</span>
            </Link>
          </div>
        </div>
        <div className="p-4 border-t border-[#f0f2f4] dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTJLHNY8T0qe4d7hzUg0Qr0lK4m1MZnsGzlcIP70XDc4UMXj5lyv7YywmTLP4VDzZAqC50Vt933N1UgfR8b-1_Gfvigj6t5dRZ89a5n9jFuWmDybefWiuzIu7uP_lYvw5c2RUDikJCTf0TiymB8aEu5ib-373I7p51ho5xmiHG0oApxdb-fV_rHXs4k5ZTGHKw1ASW5T3hN7if1-sz-M_o0YIEtJqYSTeIGEoXi53qKnOkKbzNR_lvx0ZcBvVFJVWaUs533jhBVuuu')"}}></div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium text-[#111418] dark:text-white truncate">Admin User</p>
              <p className="text-xs text-[#617589] dark:text-gray-400 truncate">admin@techstore.com</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
        <header className="h-16 bg-white dark:bg-[#1a2632] border-b border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between px-6 flex-shrink-0">
          <button className="lg:hidden p-2 text-[#617589]">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden md:flex max-w-md w-full ml-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589]">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-[#f0f2f4] dark:bg-gray-800 text-sm placeholder-[#617589] focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#101922] transition-colors" placeholder="Search orders, customers, or products..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#617589] transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a2632]"></span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#617589] transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Link className="text-[#617589] hover:text-primary transition-colors" to="/admin">Dashboard</Link>
              <span className="text-[#617589] material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-[#111418] dark:text-white font-medium">Order Management</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">Orders</h1>
                <p className="text-[#617589] dark:text-gray-400 mt-1">Manage and track all customer orders across platforms.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-[#111418] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Export
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  Create Manual Order
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">Total Orders</p>
                    <h3 className="text-2xl font-bold text-[#111418] dark:text-white mt-1">1,254</h3>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-green-600 font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">trending_up</span> +12.5%</span>
                  <span className="text-[#617589] dark:text-gray-500">from last month</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">Pending Shipment</p>
                    <h3 className="text-2xl font-bold text-[#111418] dark:text-white mt-1">24</h3>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-red-500 font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">trending_up</span> +4</span>
                  <span className="text-[#617589] dark:text-gray-500">orders since yesterday</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-[#111418] dark:text-white mt-1">$45,200</h3>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-green-600 font-medium flex items-center"><span className="material-symbols-outlined text-[16px]">trending_up</span> +8.2%</span>
                  <span className="text-[#617589] dark:text-gray-500">from last month</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-[#f0f2f4] dark:border-gray-800 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <div className="relative w-full sm:w-64">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589]">
                      <span className="material-symbols-outlined text-[20px]">search</span>
                    </span>
                    <input className="w-full pl-9 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search ID or Customer..." type="text" />
                  </div>
                  <div className="w-full sm:w-40">
                    <div className="relative">
                      <select className="w-full pl-3 pr-8 py-2 bg-white dark:bg-[#101922] border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary appearance-none text-[#111418] dark:text-white">
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#617589]">
                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <div className="relative w-full lg:w-auto flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589]">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </span>
                    <input className="w-full pl-9 pr-3 py-2 bg-white dark:bg-[#101922] border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Oct 1 - Oct 31, 2023" type="text" />
                  </div>
                  <button className="p-2 border border-[#dbe0e6] dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-[#617589]">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#f9fafb] dark:bg-[#101922] text-[#617589] dark:text-gray-400 font-medium border-b border-[#f0f2f4] dark:border-gray-800">
                    <tr>
                      <th className="px-6 py-3 w-10">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </th>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3 text-right">Total</th>
                      <th className="px-6 py-3">Payment</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-800">
                    <tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                      <td className="px-6 py-4">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </td>
                      <td className="px-6 py-4">
                        <Link className="font-bold text-primary hover:underline" to="#">#ORD-7723</Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3AMZT248kXYEdtxKZ9YisHyRaKsbz7pVFtvXj2wCL5Crp8iBfhugfUs5ba0LeaT7ZluoWZnpRvmuHyTubLOzX6DkJ1UFH6JylhX-D8TLcH9vFRQctCDXE1kk3RX87-uMlvLyex5bQGanz1jzWO3kmUt4uDLk45FeBiLPpc5WNP1FAVvgRzCiOA5zAUzPaaqbOCFc77YamlacsgwyCnT8FZTPqICl210KfiR45L0TbjAV02Na5DX2PRpHWshGFYQKIff8QcFV_OmEc')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#111418] dark:text-white">Sarah Miller</span>
                            <span className="text-xs text-[#617589]">sarah.m@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#111418] dark:text-gray-300">Oct 24, 2023</td>
                      <td className="px-6 py-4 text-right font-medium text-[#111418] dark:text-white">$1,299.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Paid</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                          Processing
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#617589] hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                      <td className="px-6 py-4">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </td>
                      <td className="px-6 py-4">
                        <Link className="font-bold text-primary hover:underline" to="#">#ORD-7722</Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">RJ</div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#111418] dark:text-white">Robert Johnson</span>
                            <span className="text-xs text-[#617589]">robert.j@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#111418] dark:text-gray-300">Oct 24, 2023</td>
                      <td className="px-6 py-4 text-right font-medium text-[#111418] dark:text-white">$89.50</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pending</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#617589] hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                      <td className="px-6 py-4">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </td>
                      <td className="px-6 py-4">
                        <Link className="font-bold text-primary hover:underline" to="#">#ORD-7721</Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDupQPVmzCM5lamZCIClVcE3kK88RDtLPUyFRRGo6tfqKYAMb8Q2h9dEXh2z3AMIIMRqcBpTdljIdRFdY9wsg8_SRpaWkG2svk5fbujyvmyz3_6a3TAwFmWpc4cER_6FnoFjmxbuWqC1l4FmiBK3NNs-r0WgciUWU0QNTqvlNcA5Wktx9hNtg4-AygNoaSCHxHytuVH67YDCTPg6qGLe8PkWl2igSVWjsaenXNanQOZ3Wb5hlFIwdWP0QmFOZPOjwVghuMh_Xp1VtQK')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#111418] dark:text-white">Michael Chen</span>
                            <span className="text-xs text-[#617589]">m.chen@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#111418] dark:text-gray-300">Oct 23, 2023</td>
                      <td className="px-6 py-4 text-right font-medium text-[#111418] dark:text-white">$2,450.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Paid</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                          Shipped
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#617589] hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                      <td className="px-6 py-4">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </td>
                      <td className="px-6 py-4">
                        <Link className="font-bold text-primary hover:underline" to="#">#ORD-7720</Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">EW</div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#111418] dark:text-white">Emily Wilson</span>
                            <span className="text-xs text-[#617589]">emily.w@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#111418] dark:text-gray-300">Oct 23, 2023</td>
                      <td className="px-6 py-4 text-right font-medium text-[#111418] dark:text-white">$120.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Refunded</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-400"></span>
                          Cancelled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#617589] hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                      <td className="px-6 py-4">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                      </td>
                      <td className="px-6 py-4">
                        <Link className="font-bold text-primary hover:underline" to="#">#ORD-7719</Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTT0dFXeiWgblK10tKdinvDdTUbWYNTiQv2l90GND9otq15MrEQtBxH69mAGdFte2Y_l7x7E-NF0mI1VNXtYJlCkCrhY2IpP9zOPAsmbhmtRUVwJeHHwV91Iq81BW6lnJVUhNpCciQAn8Gda7z1IQWORsH7ym-S5PDmptrP1CnyJiznu0Z2_bFDdnsB8ew7GzeS62aTutinIKxP6TPe8zKv3LbG8x2lwtNB4uRALqgTtuPpCY1wQz4Sw8Bp1eemBgyAyyYLI3Dx_gw')"}}></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-[#111418] dark:text-white">David Lee</span>
                            <span className="text-xs text-[#617589]">david.l@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#111418] dark:text-gray-300">Oct 22, 2023</td>
                      <td className="px-6 py-4 text-right font-medium text-[#111418] dark:text-white">$345.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Paid</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#617589] hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-[#f0f2f4] dark:border-gray-800 gap-4">
                <div className="hidden sm:block text-sm text-[#617589]">
                  Showing <span className="font-medium text-[#111418] dark:text-white">1</span> to <span className="font-medium text-[#111418] dark:text-white">10</span> of <span className="font-medium text-[#111418] dark:text-white">152</span> results
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <button className="p-2 border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-[#617589] hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button className="h-9 w-9 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-medium">1</button>
                  <button className="h-9 w-9 flex items-center justify-center border border-[#dbe0e6] dark:border-gray-700 text-[#617589] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">2</button>
                  <button className="h-9 w-9 flex items-center justify-center border border-[#dbe0e6] dark:border-gray-700 text-[#617589] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">3</button>
                  <span className="text-[#617589] px-1">...</span>
                  <button className="h-9 w-9 flex items-center justify-center border border-[#dbe0e6] dark:border-gray-700 text-[#617589] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">16</button>
                  <button className="p-2 border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-[#617589] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
                <div className="flex sm:hidden w-full justify-between">
                  <Link className="relative inline-flex items-center rounded-md border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] px-4 py-2 text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" to="#">Previous</Link>
                  <Link className="relative ml-3 inline-flex items-center rounded-md border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] px-4 py-2 text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" to="#">Next</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OrderManagement
