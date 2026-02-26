import { Link } from 'react-router-dom'

const Homepage = () => {
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
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                  <label className="flex w-full cursor-text items-center rounded-lg bg-slate-100 dark:bg-slate-800 h-10 px-3 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">search</span>
                    <input className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-0 text-sm font-medium h-full ml-2" placeholder="Search computers, phones, accessories..." />
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <button className="md:hidden p-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                  <Link className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" to="/login">
                    <span className="material-symbols-outlined">person</span>
                    Sign In
                  </Link>
                  <button className="relative flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">2</span>
                  </button>
                  <button className="lg:hidden p-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                  </button>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-6 lg:gap-8 border-t border-slate-100 dark:border-slate-800 pt-3 overflow-x-auto">
                <a className="text-sm font-bold text-primary whitespace-nowrap" href="#">Deals</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Computers</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Phones</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Accessories</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Networking</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Office</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap" href="#">Sound</a>
                <a className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors ml-auto whitespace-nowrap" href="#">Clearance</a>
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
                  <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary/30">
                    Shop Deals
                  </button>
                  <button className="flex h-12 items-center justify-center rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                    Browse Categories
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-[1200px] px-4 py-8 md:px-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {['laptop_mac', 'smartphone', 'keyboard', 'memory', 'battery_charging_full', 'desktop_windows', 'router', 'print', 'headphones'].map((icon, idx) => (
                <a key={idx} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary/50 transition-all group" href="#">
                  <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <span className="text-xs font-bold text-center text-slate-700 dark:text-slate-300">Category</span>
                </a>
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
              <h2 className="text-2xl font-black text-slate-900 dark:text-white md:text-3xl">Computers & Office</h2>
              <a className="text-sm font-bold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute top-3 left-3 z-10 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">Best Seller</div>
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhNQgEiS-aemqpXhKB1YSNwIctpi9Nn7NZUeFHXL0R3YipyppQLDZrEv3kzPtigUJqhL7vGhwJkWfVUpfz7CBsl4L-FAdRHDu0bhD-gKRfKau3E7wQLJUZa25Mvvte-PIdnj81vOldgH2uuaY2v3-TwIM2OiQuyOR09KyTN3ngIGcls8EQW4YjZCasgS1wNnw94zh9GLjz0mJ5uXCpR8Yu7SoQUUy_lZoqu-C4laAg-55QNGD6VaO257vVj7Ml10SDQX9EAyM1MOQL")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(312)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">RGB Mechanical Keyboard</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$145.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-15%</div>
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT_ARes_sQswD5QkFVUjVxK8_Rwcoyea0JkwTpGc1q1VqhNXEngR04i3BncHh8Q4Zf5kQmrJOgDRZCxAemxDnksQ2v5myJ0LdbXa45uWV0UhC_rvMkHeT2nO8R_iZCZa3A4zPjF51t3Ox3zSY1UB_HNIQiHl8soMLF9Ne3f0iNLLdVUiBvdduwmRbFIuLpMUBYmZgK1-5DHN04XY3nUYS-prD1nTWrRORATLbdKF8WuMD0R99rnnuOXgXigNxGC3i7r0AOCvcZkqWn")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(45)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Ergo Office Chair</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$299.00</span>
                    <span className="text-sm text-slate-400 line-through">$349.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvcb0X-Rff249CLAcUyP1zVDfyVsIGb9-LeuzxpJab_PWTGSJI6l1pKj22k0W0ocw4E3wFmKaxdYUhC7WBioaAFBoziecOu-P94m2mNvp_fN8G9Zea9xgEJ7JZkch2KzzA5v5Ds-4cjBCmDKDM5trKtLvswhsWriwScZ6uR-CW9bkIy6jGRt6WVrSrwFm5D2xCKeLt-AMmyJkay00-WhD-OQbQUJzHR_ht54x2F0ZOEWclBmCI8Iwg-ruZmKJfy2UhJzWfq72p2EK7")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(89)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Premium Laptop Bag</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$120.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmmMqoshwr3OhbG5_pOh_1XL2MCd-xJ0E9VePYeWFllLw--KNZbv1_5nKB9h6e_C1KPyvFw1yoD8zZ2osm9uvFGlkbvT6db8aVnH_BMdTNs4ZOzArVTEmPMWaLbYXIDayHOJOVJDc_06_H4q82UKxuHTyFp5Wl9HmW4oKY-t5nsGweqFlWqeRuAZf467zJuOfHepKM_Bh6yn3bmBQ-lUjCezoeNdNCyNs_ZIEXhXBg72G3snqWXQmVqxpQ0Bo03J2faAiqD1K90bqq")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="material-symbols-outlined text-[16px] text-slate-300">star</span>
                    <span className="text-xs text-slate-400 ml-1">(24)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Blue Light Glasses</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$49.99</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-[1200px] px-4 pb-12 md:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white md:text-3xl">Sound & Electronics</h2>
              <a className="text-sm font-bold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-20%</div>
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBN8qA065lS2-xsQDFDV0tQ90RzJQhKqqbXBITPAB2w07Qq2mglkB2SArf4XlO7VWCsTixMgCwb0HUKmija4aq17rNVldg7Hqdoeut_w-dWqUqM9AbGORnzaFw4mRlhYG5G3oZ8lbC6ZYo6vL9OYkK3855ivz4XXve9E3q9GssEuufVClGjD7a3JM-n8kDe0ITUFgeYOXGBZ7j1UjcubLMqFzOZyMyfBPVmZUMd1UzOOvwcHrbStpEBO1b_hkeudB7IcdnFfKTyGjSv")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(120)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Studio Wireless Headphones</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$299.00</span>
                    <span className="text-sm text-slate-400 line-through">$375.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute top-3 left-3 z-10 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">New</div>
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGUVoG5gA0hgruLY1CX3v-eTL6FNrnBnnx55BNi79_CVmXQWTNRlldth5kW-2PGOcDLi2GB_GnSD52ph1RvlKhkrui0aO5ur3LEgINICahIw8qX_hSEXrkSaytb-vJpHsya260LBoA8cVafeoARwQfqUcs3TdbHLuodvWPw_knbbCqP_sceFouU8ct7WxjY7ZyuJWe_b37f7m8u1mOTne1Z6JmrB63yFhs7eRElKDUuO8XiO_3ejucPJAz0D6vfg87YbtZTggmLo5W")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(200)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Pro Smart Watch 2</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$199.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="absolute top-3 left-3 z-10 rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">Eco</div>
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2EX3JHh9olCACH3nfHCpyK2LIDRSCXHIlT4WuUgPmYDNXGber5Z1q80tCyAhYtU2k1yj0Y7K1G6DpATbu4ZjcEppkr0iL7faFV9m5VtYJLDYUa-Cyb2LTHsEa9qdVyH4FcEbtrJsr-di21E_ys3lG2LTpd4LINR6WUscyq6ho5OI0Z5XvyVJbMO0kUMrJuqDzhQgt0qbEaYqHPm9GF_iTqx3aGfJ3E0zwJ81SI7dCRf2NBYj2RD5Z19uLUqwpcPQnNcmlj32eV8w-")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="text-xs text-slate-400 ml-1">(15)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Temperature Smart Bottle</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$45.00</span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhNQgEiS-aemqpXhKB1YSNwIctpi9Nn7NZUeFHXL0R3YipyppQLDZrEv3kzPtigUJqhL7vGhwJkWfVUpfz7CBsl4L-FAdRHDu0bhD-gKRfKau3E7wQLJUZa25Mvvte-PIdnj81vOldgH2uuaY2v3-TwIM2OiQuyOR09KyTN3ngIGcls8EQW4YjZCasgS1wNnw94zh9GLjz0mJ5uXCpR8Yu7SoQUUy_lZoqu-C4laAg-55QNGD6VaO257vVj7Ml10SDQX9EAyM1MOQL")'}}></div>
                  <button className="absolute bottom-4 right-4 z-20 flex size-10 translate-y-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] text-yellow-400 icon-filled">star</span>)}
                    <span className="material-symbols-outlined text-[16px] text-slate-300">star</span>
                    <span className="text-xs text-slate-400 ml-1">(67)</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Slim Wireless Keypad</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">$65.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                View All Products
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
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
