import { Link } from 'react-router-dom'

const OrderHistoryPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <Link className="flex items-center gap-2 text-primary" to="/">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">devices</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">TechStore</h2>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/">Home</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/catalog">Products</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="#">Support</Link>
                <Link className="text-slate-900 dark:text-white text-sm font-bold border-b-2 border-primary py-5" to="#">My Account</Link>
              </nav>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
              <div className="hidden lg:flex flex-1 max-w-sm">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400">search</span>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Search products..." type="text" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="flex items-center gap-2 p-1 pl-2 pr-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <div className="size-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">JD</div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white hidden sm:block">John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="flex mb-6">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white" to="/">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-lg mx-1">chevron_right</span>
                <Link className="ml-1 text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white md:ml-2" to="#">My Account</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-lg mx-1">chevron_right</span>
                <span className="ml-1 text-sm font-bold text-slate-900 dark:text-white md:ml-2">Order History</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Your Orders</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Check the status of recent orders, manage returns, and discover similar products.</p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="whitespace-nowrap px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold shadow-md transition-transform active:scale-95">Last 30 days</button>
            <button className="whitespace-nowrap px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">Past 3 months</button>
            <button className="whitespace-nowrap px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">2023</button>
            <button className="whitespace-nowrap px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">Cancelled</button>
          </div>
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-shadow" placeholder="Search orders..." type="text" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-50 dark:bg-[#15202b] px-6 py-4 border-b border-border-light dark:border-border-dark flex flex-wrap gap-y-4 justify-between items-center text-sm">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order Placed</span>
                  <span className="text-slate-900 dark:text-white font-bold">Oct 24, 2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Total</span>
                  <span className="text-slate-900 dark:text-white font-bold">$1,499.00</span>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Ship To</span>
                  <span className="text-primary hover:underline cursor-pointer font-bold flex items-center gap-1">
                    John Doe <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order # 112-34234-23</span>
                <div className="flex gap-4 mt-1">
                  <Link className="text-primary hover:text-primary-dark font-semibold text-sm hover:underline" to="#">View Invoice</Link>
                </div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600 fill-1">check_circle</span>
                  Delivered Oct 26
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Package was left near the front porch.</p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 size-24 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden border border-border-light dark:border-border-dark">
                      <img alt="MacBook Pro" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGpeRZEs_haNP1bHq7yedJsCXYOPxPp79XuZrvbgT5Asstv2hy_gysY4Hb5Kd56qdVCwLte47YS5MHNKfz0aU0BaJumF_3pRFwdTRt6YpM6y_RWuvT5ae20UXXWXfE9tLnC8nBcCGjCtMQouqacMkyw7q0fX63UZVNO5Ul-ubJW_vO1GUoIuJjt5kVk2o9EYAP1iLL6lcjPcs493dXJb22wjXsrDuIqPCTDOYpMgLQfAnCMXXq-478I_a5fp9D8gjt3Ahw8TRo3AB3" />
                    </div>
                    <div>
                      <Link className="font-bold text-primary hover:underline text-base line-clamp-2" to="#">MacBook Pro 14" - Space Gray (M3 Pro, 18GB RAM, 512GB SSD)</Link>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Return window closed on Nov 24, 2023</p>
                      <button className="mt-3 px-3 py-1.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                        Buy it again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-sm transition-colors text-sm">Track Package</button>
                <button className="w-full py-2.5 px-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">View Order Details</button>
                <button className="w-full py-2.5 px-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">Write a Product Review</button>
              </div>
            </div>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-50 dark:bg-[#15202b] px-6 py-4 border-b border-border-light dark:border-border-dark flex flex-wrap gap-y-4 justify-between items-center text-sm">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order Placed</span>
                  <span className="text-slate-900 dark:text-white font-bold">Yesterday</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Total</span>
                  <span className="text-slate-900 dark:text-white font-bold">$89.98</span>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Ship To</span>
                  <span className="text-primary hover:underline cursor-pointer font-bold flex items-center gap-1">
                    John Doe <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order # 405-92834-11</span>
                <div className="flex gap-4 mt-1">
                  <Link className="text-primary hover:text-primary-dark font-semibold text-sm hover:underline" to="#">View Invoice</Link>
                </div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined fill-1">local_shipping</span>
                  Arriving Tomorrow by 8pm
                </h3>
                <div className="w-full max-w-md bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-6">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                  <div className="flex justify-between mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span>Ordered</span>
                    <span>Shipped</span>
                    <span className="text-primary font-bold">Out for Delivery</span>
                    <span>Delivered</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 size-20 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden border border-border-light dark:border-border-dark">
                      <img alt="iPhone Case" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6YQpYckQLfduO09UxARuudQnETBERemO0YYyUSaHiT_bzarWLvScgzqAQokiQBq2qhl4DPqFtLFoJPtluFVv3bv5uTKiXb8QH9dFGUdUNSSZZanHtXzmk9xp9l0IQLcuLfZYZc-TTdjKmHH3kyqiVXhFru-ETNPOp4l2oSjKye20kb0Fb19RSzWRjQN7O4h3JDWBTKZ1KIGexMtKyy3uakf4arrKWSeP2mSYlI36G6DwCpDz_Stc7kmq7kvW7iRty3Xg7QF2AXdml" />
                    </div>
                    <div>
                      <Link className="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline text-sm md:text-base" to="#">MagSafe Silicone Case for iPhone 15 Pro - Storm Blue</Link>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sold by: TechStore Inc.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 size-20 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden border border-border-light dark:border-border-dark">
                      <img alt="USB-C Cable" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkO8UYcHxn98L6k_3MbXX2xcotOJ8pnizcltMczjnSjVl3_g3qVgPWDF6Z_3sM-SGnKT5QXHlSCXFVaDGs1rBASIc7zPyxdTWjh7VAf75cl-2iuFHyTtNCP94xuyZHO7dU9PIu2rwdvkoGR1iwkFub67KskWEVEuFmFcL5vDytWh2-bDjvQF9B9aJMOLfr8Cyv1JzAuUERJL-GkilevRmP_FGUM53XhQ79VaYXYx8BEA6wFEssmEeuq351W4EC_hjAXYpLHccdp4L9" />
                    </div>
                    <div>
                      <Link className="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline text-sm md:text-base" to="#">USB-C to Lightning Cable (2m)</Link>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sold by: TechStore Accessories</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-sm transition-colors text-sm">Track Package</button>
                <button className="w-full py-2.5 px-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">View Order Details</button>
              </div>
            </div>
          </div>

          <div className="opacity-75 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm transition-shadow">
            <div className="bg-slate-50 dark:bg-[#15202b] px-6 py-4 border-b border-border-light dark:border-border-dark flex flex-wrap gap-y-4 justify-between items-center text-sm">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order Placed</span>
                  <span className="text-slate-900 dark:text-white font-bold">Sep 12, 2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Total</span>
                  <span className="text-slate-900 dark:text-white font-bold">$349.00</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Order # 223-11239-00</span>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined">cancel</span>
                  Cancelled
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0 size-20 grayscale bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden border border-border-light dark:border-border-dark">
                      <img alt="Monitor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkFcGTLfKDEoWRkBp6JESEVwBYYCCqR1Ox_Cdy7yk6dhFRc-P23X8IvuQX73bKdKdm9LEZbgXfXVEYZ2ZcEHOx7N7wvziGCW6V7cZ6dm8dlHuRCBThwC7KBk1eRMjkitdHutAsuvWly6nvm1a0d4DBmfSAOd6D2mgRy43HyYwsb7_HCAn4db5hFSUppdWt8evYn77-gNJa12xd9ERAlG59rSRIWQ-USqKengQhqRnRu-tUISRdSWdapF60vMJLLtXIil5J5rdEoBtu" />
                    </div>
                    <div>
                      <Link className="font-bold text-slate-700 dark:text-slate-300 hover:underline text-sm md:text-base" to="#">UltraSharp 27 4K USB-C Monitor - U2720Q</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-sm transition-colors text-sm">Buy Again</button>
                <button className="w-full py-2.5 px-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">View Order Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-light dark:border-border-dark text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors disabled:opacity-50">
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition-colors">2</button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition-colors">3</button>
          <span className="text-slate-400 mx-1">...</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition-colors">12</button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-light dark:border-border-dark text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors">
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </main>

      <footer className="mt-auto border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-8">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© 2023 TechStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default OrderHistoryPage
