import { Link } from 'react-router-dom'

const CategoryManagement = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark antialiased overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        <aside className="w-64 flex flex-col border-r border-border-light dark:border-border-dark bg-white dark:bg-surface-dark shrink-0 transition-colors duration-200 hidden md:flex">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">admin_panel_settings</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <h1 className="text-text-main-light dark:text-text-main-dark text-base font-medium leading-normal truncate">Admin Console</h1>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal truncate">TechStore Manager</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark group transition-colors" to="/admin">
                  <span className="material-symbols-outlined text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">dashboard</span>
                  <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium leading-normal">Dashboard</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark group transition-colors" to="#">
                  <span className="material-symbols-outlined text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">package_2</span>
                  <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium leading-normal">Products</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" to="#">
                  <span className="material-symbols-outlined text-primary fill-current">category</span>
                  <p className="text-primary text-sm font-bold leading-normal">Categories</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark group transition-colors" to="#">
                  <span className="material-symbols-outlined text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">shopping_bag</span>
                  <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium leading-normal">Orders</p>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark group transition-colors" to="#">
                  <span className="material-symbols-outlined text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">settings</span>
                  <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium leading-normal">Settings</p>
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 cursor-pointer text-red-600 dark:text-red-400 mt-auto">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Log Out</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
          <header className="bg-white dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-5 shrink-0">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark text-sm">
                  <span>Admin</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span className="text-text-main-light dark:text-text-main-dark font-medium">Categories</span>
                </div>
                <h2 className="text-text-main-light dark:text-text-main-dark text-3xl font-black leading-tight tracking-[-0.033em]">Categories</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal">Manage your product taxonomy and hierarchy</p>
              </div>
              <button className="hidden sm:flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors gap-2">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>Add New Category</span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                <label className="flex items-center gap-2 flex-1 min-w-[280px]">
                  <div className="relative w-full">
                    <input className="w-full h-11 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark border border-border-light dark:border-border-dark rounded-lg pl-11 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm font-medium" placeholder="Search categories..." />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                  </div>
                </label>
                <div className="flex items-center gap-2">
                  <button className="h-11 px-4 border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-main-light dark:text-text-main-dark rounded-lg text-sm font-medium hover:bg-background-light dark:hover:bg-background-dark flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    Filter
                  </button>
                  <button className="h-11 px-4 border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-main-light dark:text-text-main-dark rounded-lg text-sm font-medium hover:bg-background-light dark:hover:bg-background-dark flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">sort</span>
                    Sort
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark">
                            <th className="px-6 py-4 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider w-[40%]">Category Name</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider hidden sm:table-cell">Slug</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider w-[15%] text-center">Items</th>
                            <th className="px-6 py-4 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider w-[15%] text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                          <tr className="group hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark cursor-grab active:cursor-grabbing text-[18px]">drag_indicator</span>
                                <span className="material-symbols-outlined text-primary text-[20px]">computer</span>
                                <div className="flex flex-col">
                                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-bold">Computers</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded text-xs text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">/computers</code>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">120</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors p-1" title="Edit">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors p-1" title="Delete">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="group hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3 pl-10 relative">
                                <div className="absolute left-4 top-[-26px] bottom-1/2 w-[1px] bg-border-light dark:bg-border-dark"></div>
                                <div className="absolute left-4 top-1/2 w-4 h-[1px] bg-border-light dark:bg-border-dark"></div>
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark cursor-grab active:cursor-grabbing text-[18px]">drag_indicator</span>
                                <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">Laptops</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded text-xs text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">/laptops</code>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">85</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="group hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3 pl-20 relative">
                                <div className="absolute left-14 top-[-26px] bottom-1/2 w-[1px] bg-border-light dark:bg-border-dark"></div>
                                <div className="absolute left-14 top-1/2 w-4 h-[1px] bg-border-light dark:bg-border-dark"></div>
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark cursor-grab active:cursor-grabbing text-[18px]">drag_indicator</span>
                                <span className="text-text-main-light dark:text-text-main-dark text-sm">Gaming Laptops</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded text-xs text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">/gaming-laptops</code>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">30</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="group hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark cursor-grab active:cursor-grabbing text-[18px]">drag_indicator</span>
                                <span className="material-symbols-outlined text-primary text-[20px]">smartphone</span>
                                <div className="flex flex-col">
                                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-bold">Phones</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded text-xs text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">/phones</code>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">200</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="group hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark cursor-grab active:cursor-grabbing text-[18px]">drag_indicator</span>
                                <span className="material-symbols-outlined text-primary text-[20px]">headphones</span>
                                <div className="flex flex-col">
                                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-bold">Accessories</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              <code className="bg-background-light dark:bg-background-dark px-2 py-1 rounded text-xs text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">/accessories</code>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">450</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors p-1">
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="px-6 py-4 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark flex items-center justify-between">
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Showing 5 of 24 categories</p>
                      <div className="flex gap-2">
                        <button className="p-1 rounded hover:bg-white dark:hover:bg-surface-dark disabled:opacity-50 text-text-main-light dark:text-text-main-dark transition-colors">
                          <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="p-1 rounded hover:bg-white dark:hover:bg-surface-dark text-text-main-light dark:text-text-main-dark transition-colors">
                          <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm sticky top-6">
                    <div className="px-6 py-5 border-b border-border-light dark:border-border-dark">
                      <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Add New Category</h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">Fill in the details below to create a new product category.</p>
                    </div>
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-center">
                        <div className="w-full relative group cursor-pointer">
                          <div className="aspect-video w-full rounded-lg border-2 border-dashed border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors">
                            <div className="h-10 w-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center">
                              <span className="material-symbols-outlined text-primary">add_photo_alternate</span>
                            </div>
                            <p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">Upload Cover Image</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">Category Name</label>
                        <input className="w-full h-10 px-3 rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark" placeholder="e.g. Gaming Laptops" type="text" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark flex justify-between">
                          <span>Slug</span>
                          <span className="text-xs font-normal text-text-secondary-light dark:text-text-secondary-dark">Auto-generated</span>
                        </label>
                        <input className="w-full h-10 px-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-sm text-text-secondary-light dark:text-text-secondary-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="e.g. gaming-laptops" readOnly type="text" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">Parent Category</label>
                        <div className="relative">
                          <select className="w-full h-10 pl-3 pr-10 rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none transition-all cursor-pointer">
                            <option value="">None (Top Level)</option>
                            <option value="1">Computers</option>
                            <option value="2">-- Laptops</option>
                            <option value="3">Phones</option>
                            <option value="4">Accessories</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary-light dark:text-text-secondary-dark">
                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">Description</label>
                        <textarea className="w-full p-3 rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all" placeholder="Brief description for SEO..." rows="3"></textarea>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark rounded-b-xl flex gap-3 justify-end">
                      <button className="px-4 py-2 rounded-lg text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark hover:bg-white dark:hover:bg-surface-dark border border-transparent hover:border-border-light dark:hover:border-border-dark transition-all">Cancel</button>
                      <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 shadow-sm transition-colors">Save Category</button>
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

export default CategoryManagement
