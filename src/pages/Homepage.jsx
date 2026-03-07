import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../contexts/StoreContext'
import ProductCard from '../components/ProductCard'
import ThemeToggle from '../components/ThemeToggle'
import { useState } from 'react'

const Homepage = () => {
  const { filteredProducts, setSelectedCategory, cartCount } = useStore()
  const [localSearch, setLocalSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (localSearch.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(localSearch.trim())}`)
    }
  }

  const categories = ['all', 'computers', 'phones', 'accessories', 'office', 'sound']

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="layout-container flex w-full flex-col">
            <header className="flex flex-col gap-4 px-4 py-3 md:px-10 lg:px-20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-10 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined !text-3xl icon-filled">devices</span>
                  </div>
                  <h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight">TechStore</h2>
                </div>
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
                  <label className="flex w-full cursor-text items-center rounded-lg bg-slate-100 dark:bg-slate-800 h-10 px-3 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">search</span>
                    <input
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                      className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-0 text-sm font-medium h-full ml-2"
                      placeholder="Search computers, phones, accessories..."
                    />
                  </label>
                </form>
                <div className="flex items-center gap-4">
                  <button className="md:hidden p-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                  <ThemeToggle />
                  <Link className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" to="/login">
                    <span className="material-symbols-outlined">person</span>
                    Sign In
                  </Link>
                  <Link className="relative flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group" to="/cart">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">{cartCount}</span>
                    )}
                  </Link>
                  <button className="lg:hidden p-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                  </button>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-6 lg:gap-8 border-t border-slate-100 dark:border-slate-800 pt-3 overflow-x-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap capitalize"
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </header>
          </div>
        </div>

        <main className="flex-1 w-full flex flex-col items-center">
          <section className="w-full max-w-[1440px] px-4 py-6 md:px-10 lg:px-20">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeKQzJXjGwK5yqpdy5qQv2OLvJ0GQbeMSeQOfP6Q2_bNA4X9YDdN2v1-DdCIG3I6cGFLu9qFdH5XzYZsZRbe7cByDCjE6y68FZXNOjsEIP7Bzgn2jG2NOejgDrQAkNyTOysfuBxlV13ABSaFxYuUgrbQS3GiCVdm6MUgGfMC3RjgGwQlDC_YhcI_mz_TPI_TV_LLFmCpUmdgJ2DmEAQuY9UbLNCEF9NQnYoUFnV_R5hJzCi_b45UD84XV6wrerfBL7pWlJ3N0uKh1a")'}}></div>
              <div className="relative z-10 flex min-h-[480px] flex-col justify-center px-8 py-12 md:w-2/3 lg:w-1/2 lg:px-16">
                <span className="mb-4 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  Work From Anywhere
                </span>
                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                  Summer Tech Deals 2024
                </h1>
                <p className="mb-8 text-lg font-medium text-slate-200">
                  Upgrade your mobile office with the latest laptops, phones, and accessories. Up to 40% off on premium gear.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary/30" to="/catalog">
                    Shop Deals
                  </Link>
                  <Link className="flex h-12 items-center justify-center rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20" to="/catalog">
                    Browse Categories
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-[1200px] px-4 py-8 md:px-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {[
                { icon: 'laptop_mac', name: 'Computers', category: 'computers' },
                { icon: 'smartphone', name: 'Phones', category: 'phones' },
                { icon: 'headphones', name: 'Sound', category: 'sound' },
                { icon: 'chair', name: 'Office', category: 'office' },
                { icon: 'backpack', name: 'Accessories', category: 'accessories' },
                { icon: 'keyboard', name: 'Keyboards', category: 'computers' },
                { icon: 'mouse', name: 'Mice', category: 'computers' },
                { icon: 'watch', name: 'Wearables', category: 'phones' },
                { icon: 'shopping_bag', name: 'All', category: 'all' }
              ].map((item, idx) => (
                <Link key={idx} onClick={() => setSelectedCategory(item.category)} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary/50 transition-all group" to="/catalog">
                  <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-center text-slate-700 dark:text-slate-300">{item.name}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="w-full bg-white dark:bg-slate-900 py-10 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-center size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary shrink-0">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Fast & Free Shipping</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Free delivery on electronics over $50.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-center size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 shrink-0">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">2-Year Warranty</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Standard warranty on all devices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-center size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 shrink-0">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Tech Support</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">24/7 expert assistance for your setup.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-[1200px] px-4 py-12 md:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white md:text-3xl">Products</h2>
              <Link className="text-sm font-bold text-primary hover:underline" to="/catalog">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>

        <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-8 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-xl icon-filled">devices</span>
                  </div>
                  <h2 className="text-slate-900 dark:text-white text-lg font-extrabold tracking-tight">TechStore</h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Your trusted source for the latest computers, phones, and accessories. Quality gadgets, verified reviews, and fast shipping.
                </p>
                <div className="flex gap-4 mt-2">
                  <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                  <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                  <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
                </div>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-4">Shop</h3>
                <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">Computers</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Smartphones</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Networking</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Clearance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-4">Support</h3>
                <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">Product Support</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Order Status</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Returns & Exchanges</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Enterprise Sales</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold mb-4">Tech News</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Subscribe for the latest gadget releases.</p>
                <form className="flex flex-col gap-2">
                  <input className="w-full rounded-lg bg-slate-100 dark:bg-slate-800 border-none px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-500" placeholder="Enter your email" type="email" />
                  <button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-400">© 2024 TechStore Inc. All rights reserved.</p>
              <div className="flex gap-4 text-slate-300">
                <span className="material-symbols-outlined" title="Credit Card">credit_card</span>
                <span className="material-symbols-outlined" title="Bank">account_balance</span>
                <span className="material-symbols-outlined" title="Wallet">account_balance_wallet</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Homepage
