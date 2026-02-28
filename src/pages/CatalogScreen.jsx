import { Link } from 'react-router-dom'

const CatalogScreen = () => {
  const products = [
    { id: 1, name: "Nike Air Zoom Pegasus 39", rating: 4.8, reviews: 128, price: 99.99, oldPrice: 130, badge: "Sale", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmOiQTreVRZFZm27vRkR-HCCtfmCNhQBtU-i2z4gfrMdyjrUx7ad9oRETLdnG8rj0snMoRl3a46v46JEm90wPZhPPnHVpOexFjRp70vY1v9W5Knh5cFITfR6eja2DEwbrGHUySXoOSD6cyBFsGqR7LlR0uN4H-oe1VjLEUOx01e2FxbsRBP4VE3Xqa_Hq6zEmznBIAHAaskFy8SoD3snjrAS1kIOp4KUMUZz4en7JnY2zmLqiOxfeqp1SRLoFYdPAl5xnhd_tBM8Xr" },
    { id: 2, name: "Adidas Ultraboost Light", rating: 4.9, reviews: 85, price: 190, badge: "New", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrJDrW0qS6odrtzNQmfAR8YHFc3wpVUtBkJNE4EItijh-e4G6YuITlcy6SEpguC5e9msNE82X4_Vc8oAuqokj3PXiWxn697ipo3HcV3nXLDyi4EQ7LLhXYcgxXRhheWPly3DpdYz5ed2fi4GneKz4wp5XSP8ZMkCFUDFULezHiWGmIlUHQNz9Qi7S1tJm5pzYAHER5XEaiX1WK1Imn7FLCf2cC_P136fzjNNI4Y622R2RQVQH9teHv9zVSJtVXYNLMNkK7syPxDsUv" },
    { id: 3, name: "Puma Deviate Nitro 2", rating: 4.5, reviews: 42, price: 160, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1JoPBUJgvl5yAZ3hO7Fhi0BfXZGi0j44ne-4CFvC7AEOXCPD3enRYSqsIrTSSmcurKgrxEW27dUBZ-BEOat0Ve4S3Y_A1crW7HSTc5_gqtKahhxlaUpmDYrlA3O8roJZbC2MvuaiqMu_-GkUsCwj6dwZyuwsJGuxpHk8owfyo_m7CH4VpUUe4pO2mcTax2KkTv8CCz6Y5l74TU3lC7k1o2VTeARCwAhgCJEWfTLEIgWlwwPpyoQ6dUbLmvALOfNkXoyCKTYK0ldM" },
    { id: 4, name: "New Balance Fresh Foam X", rating: 4.7, reviews: 56, price: 149.99, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABWPXdEaKJxpPqru_HtrWbIN3XpyAwlWpiGepq3Pwx-kWzRDVf466uo6ed934xrhlD19cRKz_ANyW8bSqk-tZYeH8rkDyXzWfRC0uEekpUhHh3fJDdLeOJuZiFvLNBvi-rT-56S3Eaov2R392ZUkei3DgO-FjGwLh0N2YHo-seS0yd1tpZ874lT-wlKhXvJoZiOxrXVkV-pUKZ-VWGOVfpAfdwBFwmvd17eexOQVzwYXTiLmbMen77JJiB9zFpU07qTgeVZpszVppr" }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link to="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">hexagon</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">ShopEase</h2>
            </Link>
            <div className="hidden md:flex flex-1 max-w-lg">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Search for products..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Link to="/login" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold bg-primary text-white hover:bg-blue-600 transition-colors shadow-sm">
                  <span>Login</span>
                </Link>
                <Link to="/cart" className="relative p-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark text-slate-700 dark:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#1a2632]">2</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h3>
                <button className="text-sm text-primary font-medium hover:underline">Clear All</button>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Categories</h4>
                <div className="flex flex-col space-y-2">
                  {['Running Shoes', 'Training & Gym', 'Walking', 'Trail Running'].map((cat, i) => (
                    <label key={i} className="inline-flex items-center cursor-pointer group">
                      <input className="form-checkbox h-5 w-5 text-primary border-slate-300 rounded focus:ring-primary dark:bg-background-dark dark:border-slate-600" type="checkbox" defaultChecked={i === 0} />
                      <span className="ml-3 text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Men's Running Shoes</h1>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Showing 1-12 of 145 results</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="group relative bg-white dark:bg-[#1a2632] rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200">
                    <img alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src={product.img} />
                    {product.badge && (
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${product.badge === 'Sale' ? 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10' : 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10'}`}>{product.badge}</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-black/60 to-transparent flex justify-center gap-3">
                      <button className="bg-white text-slate-900 p-2 rounded-full hover:text-primary transition-colors shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                      <button className="bg-white text-slate-900 p-2 rounded-full hover:text-primary transition-colors shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mb-1">
                      <Link to="/product/1">{product.name}</Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="material-symbols-outlined filled text-amber-400 text-[16px]">star</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{product.rating}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        {product.oldPrice && <span className="text-xs text-slate-500 line-through">${product.oldPrice}.00</span>}
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                      </div>
                      <button className="bg-primary hover:bg-blue-600 text-white p-2 rounded-lg transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <a className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800" href="#">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </a>
                <a className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-sm" href="#">1</a>
                <a className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors text-sm font-medium" href="#">2</a>
                <a className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors text-sm font-medium" href="#">3</a>
                <span className="px-2 text-slate-400">...</span>
                <a className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors text-sm font-medium" href="#">12</a>
                <a className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800" href="#">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </nav>
            </div>
          </main>
        </div>
      </div>

      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">hexagon</span>
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white">ShopEase</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Your premium destination for sports and lifestyle footwear.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">Men's Shoes</a></li>
                <li><a className="hover:text-primary" href="#">Women's Shoes</a></li>
                <li><a className="hover:text-primary" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">Order Status</a></li>
                <li><a className="hover:text-primary" href="#">Shipping & Returns</a></li>
                <li><a className="hover:text-primary" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">About Us</a></li>
                <li><a className="hover:text-primary" href="#">Careers</a></li>
                <li><a className="hover:text-primary" href="#">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2024 ShopEase, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CatalogScreen
