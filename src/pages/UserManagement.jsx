import { Link } from 'react-router-dom'

const UserManagement = () => {
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
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="#">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">inventory_2</span>
                <span className="font-medium text-sm">Products</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="#">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">shopping_bag</span>
                <span className="font-medium text-sm">Orders</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-primary transition-colors" to="#">
                <span className="material-symbols-outlined icon-fill">group</span>
                <span className="font-medium text-sm">Users</span>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="#">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-[#111418] dark:group-hover:text-white">analytics</span>
                <span className="font-medium text-sm">Analytics</span>
              </Link>
            </div>
            <div>
              <p className="px-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Settings</p>
              <Link className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group" to="#">
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
                <span className="font-medium text-[#111418] dark:text-white">User Management</span>
              </nav>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Users</h1>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">Total Users: 1,240</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-all">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Add New User</span>
                </button>
              </div>
              <div className="flex flex-col rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#111418] shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#e5e7eb] dark:border-gray-800 p-4">
                  <div className="relative w-full md:w-96">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                    </div>
                    <input className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] py-2.5 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:text-white dark:placeholder-gray-400 transition-colors" placeholder="Search by name or email..." type="text" />
                  </div>
                  <div className="flex w-full md:w-auto items-center gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
                      <span className="material-symbols-outlined text-[20px] text-gray-500">filter_list</span>
                      Role
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a202c] px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
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
                        <th className="px-4 py-3 font-medium">User</th>
                        <th className="px-4 py-3 font-medium">Email</th>
                        <th className="px-4 py-3 font-medium">Role</th>
                        <th className="px-4 py-3 font-medium">Joined</th>
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKez0_lQFqO0LxwbkN9UBkI8wc1_-KFWAM-WyAmkHcsnUJNGpI5xUCfbzYiEN30ot1EavPaPGVwGUDSE-86-nHGGQ1GNp7TQDA5eaNfhCWLP1CSjcgaQioptpYs0pWYES5ZCK1Vex9cBd3y4yRVpP6xs7NIxO4zydXmKwyu0NriIcAd6ILhYhrN5L2SQFArK_vqojpJpSBDuxY3dE6XJ31pqVz5-19bKheREWJnJNjkCivaDo5ejP5VUbi3F8yep6os6apazNFlmSt')"}}></div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Jane Doe</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1024</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">jane.doe@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">Active</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 24, 2023</td>
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC536YgEtqqz2gSRVfFo18VrV0dGrvPvrt56I4IYEjf2YFF9sHhwlHuR-3hovOUx_lwwGlqAbTTA4qgMs0tU-pik30z6FyuY0Y541VQ3R2ammLL5loTRyWnjEfCBxypHZ-KR7-aKGEL4EU2AD-E2sxKq7SQDThBv3QoBomjknInQllBxbmT539YcetQSp0F3LaEjU1u8zCbvK_NfGA0U5S6DidKYZSLO5xlyALwdUarWaa_Il9pkTaOZ6gl0Mgi0UhKjRGkQ16O8FHj')"}}></div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">John Smith</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1023</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">john.smith@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:text-red-400">Suspended</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 23, 2023</td>
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">AJ</div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Alice Johnson</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1022</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">alice.j@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">Active</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 22, 2023</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                            Pending
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvnYKV5orMyO2hZaN2nQGFdks1w0HN7mH459qLn_ewemMpAnUQYsYKI3Dr1inMkzf0zKT2lKBk7KEsnh70V0jyDm1EH5h98TrqlKkKLRNmMZIZ36gier1TC9xVNVvvDWZ1Tx0b1EEsC_IzlEU7sxOXaltkslKLthnrWX1lBqLC1XWSXLwkIUzSIp2EbA3UY5vWymnohSidPlIM5sj4_B-_msyDZx_nV94DtePI166ZOAJzochawFDw7q95GzSxnLe8yUDNIaGJRUms')"}}></div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Bob Brown</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1021</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">bob.brown@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">Active</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 21, 2023</td>
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm dark:bg-purple-900/30 dark:text-purple-400">CD</div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Charlie Davis</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1020</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">charlie.d@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-400">Pending</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 20, 2023</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/20 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                            Pending
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
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7onK1wCM6c8JSeKNNROmZ3a5JljH_x1rTqEkEh7mQ9iXnkwBc00OjTPDbgjFwa6ji4ej76xjslp_j6Evss73S33sruWLgYGI7jxCXFICZuw7ODV4ha629UtPFQPtkoB1hsrCmVqaZLDTw4Aqs3UuneraC7mh3MMEHBPYPW-PDCqfcOkzpG_K4LrZdLoKQh18Q4Uw4y95Eqvo8YCgl99_fFumX-FinjQfHSKM7pU2mkrwbXSZ9v22TnOyS0jPZ-xAUBcGN6YDl3EE9')"}}></div>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Diana Evans</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">ID: USR-1019</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">diana.e@example.com</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">Active</span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 dark:text-gray-300">Oct 19, 2023</td>
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
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between border-t border-[#e5e7eb] dark:border-gray-800 px-4 py-3 sm:px-6">
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Showing <span className="font-bold text-[#111418] dark:text-white">1</span> to <span className="font-bold text-[#111418] dark:text-white">6</span> of <span className="font-bold text-[#111418] dark:text-white">1,240</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <Link className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c]" to="#">
                          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </Link>
                        <Link className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white" to="#">1</Link>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c]" to="#">2</Link>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c]" to="#">3</Link>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700">...</span>
                        <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c]" to="#">12</Link>
                        <Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a202c]" to="#">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </Link>
                      </nav>
                    </div>
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

export default UserManagement
