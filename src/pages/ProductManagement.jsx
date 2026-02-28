import { Link } from 'react-router-dom'

const ProductManagement = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white antialiased">
      <div className="flex h-screen w-full overflow-hidden">
        <aside className="hidden w-64 flex-col border-r border-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#111418] lg:flex">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center gap-2 text-[#111418] dark:text-white">
              <span className="material-symbols-outlined text-primary text-3xl">hexagon</span>
              <span className="text-xl font-bold tracking-tight">TechStore</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <div className="mb-6">
              <p className="px-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Main Menu</p>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="/admin">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">dashboard</span>
                <span className="font-medium text-sm">Dashboard</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-primary transition-colors" to="#">
                <span className="material-symbols-outlined icon-fill">inventory_2</span>
                <span className="font-medium text-sm">Products</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="/order-management">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">shopping_bag</span>
                <span className="font-medium text-sm">Orders</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="/user-management">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">group</span>
                <span className="font-medium text-sm">Customers</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="/admin">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">analytics</span>
                <span className="font-medium text-sm">Analytics</span>
              </Link>
            </div>
            <div>
              <p className="px-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Settings</p>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="/admin-settings">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">settings</span>
                <span className="font-medium text-sm">General</span>
              </Link>
            </div>
          </nav>
          <div className="border-t border-[#e5e7eb] dark:border-gray-800 p-4">
            <div className="flex items-center gap-3">
              <img alt="Admin Profile" className="h-9 w-9 rounded-full object-cover border border-gray-200 dark:border-gray-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7ri_eoje_pcaJBk9fWkqcBKV4aBGxe1sFPFOjTRKmdA2zaOx5207kplZA7-jYgpV8dUdkHpBzE3AEFsrjZvOOBioBethGvQGI0a0Y1wM6VAAnphMJRlzeRn35GIArA2JXbmaLq1eI9iuRqW9Od-D7TrDk1aJk5-nhEnYRI0Loq9W6ClBxAc7FWTyCVJJhAys5F_vpnADstuujhYCafdgmLHZ3tKN2Ps8UsDYg_8NXKZLsRSYRd1mqAz9a8gWoq8Q2iBaQP2znGU4" />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-[#111418] dark:text-white">Alex Morgan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          <header className="flex lg:hidden items-center justify-between border-b border-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#111418] px-4 py-3">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="material-symbols-outlined text-primary">hexagon</span> TechStore
            </div>
            <button className="text-gray-500">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </header>
          <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-6">
              <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Link className="hover:text-primary transition-colors" to="/admin">Dashboard</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-medium text-[#111418] dark:text-white">Products</span>
              </nav>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Product Management</h1>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">Manage your inventory, prices, and stock levels.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Add New Product</span>
                </button>
              </div>
              <div className="flex flex-col rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#111418] shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#e5e7eb] dark:border-gray-800 p-4">
                  <div className="relative w-full md:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                    </div>
                    <input className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] py-2.5 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white dark:placeholder-gray-400 transition-colors" placeholder="Search by name, SKU, or category..." type="text" />
                  </div>
                  <div className="flex w-full md:w-auto items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                    <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-1 hidden md:block"></div>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
                      <span className="material-symbols-outlined text-[20px] text-gray-500">filter_list</span>
                      Category
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
                      <span className="material-symbols-outlined text-[20px] text-gray-500">tune</span>
                      Status
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap ml-auto md:ml-0">
                      <span className="material-symbols-outlined text-[20px] text-gray-500">download</span>
                      Export
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-[#1a202c] text-gray-500 dark:text-gray-400 border-b border-[#e5e7eb] dark:border-gray-800">
                      <tr>
                        <th className="w-12 px-4 py-3 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </th>
                        <th className="px-4 py-3 font-medium">Product Name</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium w-48">Stock</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb] dark:divide-gray-800 bg-white dark:bg-[#111418]">
                      <tr className="group hover:bg-gray-50 dark:hover:bg-[#1a202c] transition-colors">
                        <td className="px-4 py-4 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                              <img alt="Macbook Laptop" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5TYA5U-XZLYjGOgA4EGNklVYL_j9kyKYorqVoh67e2TaQc9HcAHTdQTiIwZJ3-qGyOWOakITNhsPZRyxT3hf1cFEVJFAxM1eViPHJBzq7jBlZlfDeFHwfz0nI7QeBSZNPNo-1apJAVJpFsTKQPJ1mO7RU1s3J3pMwgPyqgp4zGJ9j1FfgjyeegC4Mjux-bqfSlYc31kB4YDGSoKPSzQ51xhp0a9xZ2iwfBLPpmmchyC-Ch0fne_-UsGOGRDCFq3kqvWcw8BZfxNZr" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">MacBook Pro 14"</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">SKU: MB-14-2024</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">Computers</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-[#111418] dark:text-white">$1,999.00</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-200">45 in stock</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                              <div className="h-1.5 rounded-full bg-green-500" style={{width: '45%'}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            Active
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="group hover:bg-gray-50 dark:hover:bg-[#1a202c] transition-colors">
                        <td className="px-4 py-4 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                              <img alt="Smartphone" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClhUWqtQelBDAGkCS2NEidpOelm930_bhIxfHzDdcGjeHqOt49LlgjN0ns99cxYjTZgcd5qqQFDSnFaexsMNhdtNhownLc5lKY2bIfpsXpRdz5E210IjmgEQ87RDi3W5xX2px977tV3-fn_nv-Sl1-HMw0cMGXagL4ipwQ2NFbdmUbGEp_eP6A01rEZytQP6N5wRbMm76Jl9HAqcHU27aVAiFk1U3BS-1msQN0nUozCZKpFvW_OEnMzhok2Ws8prjNv0Y3tuPk1H-n" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">iPhone 15 Pro</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">SKU: PH-15-PRO</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">Phones</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-[#111418] dark:text-white">$1,199.00</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-medium text-red-600 dark:text-red-400">4 in stock</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                              <div className="h-1.5 rounded-full bg-red-500" style={{width: '15%'}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                            Low Stock
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr className="group hover:bg-gray-50 dark:hover:bg-[#1a202c] transition-colors">
                        <td className="px-4 py-4 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                              <img alt="Headphones" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyHCXM8ejK2Gkhl4sjJfLt_dazkRkMBzrsnpOW3hpOKeNyfoYnrzWJwAbNYB8fqCXLeWwDhUx6WURAPryszDvnL0XdagKVNy49CiFh4soZx4LIrqO4WOA4z9OqSKA3kcCyGQuPG57C3M7FBLTIzXbE1LEcEKYIF0zzYcLVfX9BvL3LQbgBsI3PDdYjipHwyxOHVQPVOlVEioFhSD7XLzmR41UZWvYiLtroepVlacLJMQENkDMhMlVW8ik8ciMsahPH4xYkzZvnfBi4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Sony WH-1000XM5</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">SKU: SN-XM5-BLK</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">Accessories</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-[#111418] dark:text-white">$348.00</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-200">120 in stock</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                              <div className="h-1.5 rounded-full bg-green-500" style={{width: '90%'}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                            Draft
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="group hover:bg-gray-50 dark:hover:bg-[#1a202c] transition-colors">
                        <td className="px-4 py-4 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                              <img alt="Camera Lens" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwF1C0M-pp_jfTBZakrOs8EZW_FhaOQvMb9pq73bhg7KrpYX-iTaTjRnG9BP-Db9e6s84SCXVijF8XTw3Wnqlo4Wu695b1tqLriSTTHEFbMsFmDCwLbez_uC-yT487DZaG_UmDiBUh-Rxy5IYsjXWJ86o5Dlnwg-8rx0eJmOsUpSNS3ZwNrUtaHGd63DkYD8AR-NvumidewItqiBEm7_0mCOtTwfehpeRs40OJCKsxx_l8DHgVXofNEc1UgzngKe1cWMeOVrWv_j80" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Canon RF 50mm</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">SKU: CA-RF-50</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">Photography</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-[#111418] dark:text-white">$199.00</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-200">12 in stock</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                              <div className="h-1.5 rounded-full bg-green-500" style={{width: '30%'}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            Active
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="group hover:bg-gray-50 dark:hover:bg-[#1a202c] transition-colors">
                        <td className="px-4 py-4 text-center">
                          <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                              <img alt="Smartwatch" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuN6tUZ3n-udveT3UG3B86oGPPaYdc44Pjxfods7lqIM7D25O6PJdTDogA_GEiD8I--Ih1xa1DYwdlbjTiC8guL8FaSRyPJ2dIhj5VYTzMuSQIVdMSEFFw1Eyk6U3RbNRv_0SiZI71XS4_R_h1tKZh5zTiWrDdJKhV7r3KLe-ZAOxHLa7GPlTxLEyvMgpNKcXIHo65VgPTLweOljuewaYFHz0jM_kC39liJbLQXpT7MMcN0QOO749OX28aCVqhky1X3RSksTO4cNXe" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Apple Watch Series 9</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">SKU: AW-S9-41</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">Wearables</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-[#111418] dark:text-white">$399.00</td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="font-medium text-gray-400 dark:text-gray-500">0 in stock</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                              <div className="h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" style={{width: '0%'}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-900/20 px-2.5 py-0.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                            Out of Stock
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="rounded-lg p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between border-t border-[#e5e7eb] dark:border-gray-800 px-4 py-3 sm:px-6">
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Showing <span className="font-bold text-[#111418] dark:text-white">1</span> to <span className="font-bold text-[#111418] dark:text-white">10</span> of <span className="font-bold text-[#111418] dark:text-white">42</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <Link className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c] focus:z-20 focus:outline-offset-0" to="#">
                          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </Link>
                        <Link className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20" to="#">1</Link>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c] focus:z-20" to="#">2</Link>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c] focus:z-20" to="#">3</Link>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700">...</span>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c] focus:z-20" to="#">8</Link>
                        <Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c] focus:z-20" to="#">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </Link>
                      </nav>
                    </div>
                  </div>
                  <div className="flex sm:hidden w-full justify-between">
                    <Link className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" to="#">Previous</Link>
                    <Link className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" to="#">Next</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductManagement
