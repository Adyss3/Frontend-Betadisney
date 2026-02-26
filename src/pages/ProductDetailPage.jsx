import { Link } from 'react-router-dom'

const ProductDetailPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-gray-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a242f] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-4 text-[#111418] dark:text-white group" to="/">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-4xl">equalizer</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">AudioStore</h2>
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden lg:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Categories</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Deals</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">New Arrivals</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </button>
              <button className="relative flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-6 lg:py-10">
        <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
          <Link className="text-slate-500 dark:text-gray-400 font-medium hover:text-primary" to="/">Home</Link>
          <span className="material-symbols-outlined text-xs text-slate-500">chevron_right</span>
          <span className="text-[#111418] dark:text-white font-semibold">Wireless Headphones X1</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB44B8AT9-OMi_8I4ovHl1tHCPuT-zJJzxzX5AFywiSCIsBaMpoTCHSVbWzZOrrbSjo6cgbpfa1mYivdLvOCT37IB-fgnmjyEESWNQsjm6Fs44UUlob1SXKk49pWiKWYjKbU8hI2sZONRHAmOYQCb-NaHhh3if3uxh9jX5Ow8qm76xHvpXjpNaJl1tHMAd0T4fxsTh1FFi4KzoHxFEsInaVR-9tizQRTiaOleB-bwYAVezKUl1m8vfKsCnFDlmLxEJqm1KI2tvquiC_')"}}></div>
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE -20%</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col h-full">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111418] dark:text-white mb-2">Wireless Noise Cancelling Headphones X1</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                ))}
              </div>
              <a className="text-sm font-medium text-primary hover:underline" href="#reviews">4.8 (24 Reviews)</a>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <p className="text-4xl font-bold text-[#111418] dark:text-white">$299.00</p>
              <p className="text-lg text-slate-500 line-through mb-1.5">$375.00</p>
            </div>
            <p className="text-slate-500 dark:text-gray-300 leading-relaxed mb-8">
              Experience industry-leading noise cancellation with the X1. Featuring 30-hour battery life, premium comfort for long listening sessions, and crystal-clear calls.
            </p>

            <div className="space-y-6 border-t border-b border-gray-100 dark:border-gray-800 py-6 mb-6">
              <div>
                <span className="block text-sm font-bold text-[#111418] dark:text-white mb-3">Color: <span className="font-normal text-slate-500">Midnight Black</span></span>
                <div className="flex gap-3">
                  <button className="size-10 rounded-full bg-gray-900 border-2 border-white dark:border-gray-700 ring-2 ring-primary shadow-sm"></button>
                  <button className="size-10 rounded-full bg-blue-700 border-2 border-transparent hover:border-gray-300 transition-all"></button>
                  <button className="size-10 rounded-full bg-gray-100 border-2 border-transparent hover:border-gray-300 transition-all"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-4">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg h-12 bg-white dark:bg-[#1a242f]">
                  <button className="px-3 h-full text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <input className="w-12 text-center border-none bg-transparent focus:ring-0 font-bold p-0 text-[#111418] dark:text-white" readOnly type="text" value="1" />
                  <button className="px-3 h-full text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg h-12 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Add to Cart
                </button>
                <button className="h-12 w-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">replay</span>
                <span>30-day returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lock</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
            <nav className="flex gap-8 overflow-x-auto">
              <button className="pb-4 border-b-2 border-primary text-primary font-bold whitespace-nowrap px-1">Description</button>
              <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium whitespace-nowrap px-1 transition-colors">Specifications</button>
              <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium whitespace-nowrap px-1 transition-colors">Shipping & Returns</button>
            </nav>
          </div>
          <div className="max-w-4xl text-slate-900 dark:text-gray-300 leading-7">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Immersive Sound Quality</h3>
            <p className="mb-6">The Wireless Headphones X1 are engineered to deliver a superior audio experience. Whether you are commuting, working, or relaxing at home, our advanced noise-cancelling technology blocks out the world so you can focus on your music.</p>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">All-Day Comfort</h3>
            <p className="mb-6">Designed with soft memory foam ear cups and a lightweight headband, these headphones provide exceptional comfort for extended wear. The foldable design makes them easy to pack and carry wherever you go.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-500 dark:text-gray-400">
              <li>Active Noise Cancelling (ANC)</li>
              <li>30-hour battery life with quick charge</li>
              <li>Bluetooth 5.2 connectivity</li>
              <li>Built-in microphone for clear calls</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-16 border-t border-gray-200 dark:border-gray-800" id="reviews">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white dark:bg-[#1a242f] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white">4.8</span>
                  <div className="mb-2">
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                    </div>
                    <span className="text-sm text-slate-500">Based on 24 reviews</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[{stars: 5, pct: 78}, {stars: 4, pct: 15}, {stars: 3, pct: 5}, {stars: 2, pct: 2}, {stars: 1, pct: 0}].map(({stars, pct}) => (
                    <div key={stars} className="flex items-center gap-3 text-sm">
                      <span className="font-medium w-3">{stars}</span>
                      <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400" style={{width: `${pct}%`}}></div>
                      </div>
                      <span className="text-slate-500 w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Share your thoughts</h3>
                <p className="text-sm text-slate-500 mb-4">If you've used this product, share your thoughts with other customers</p>
                <button className="w-full bg-white dark:bg-[#1a242f] border border-gray-200 dark:border-gray-700 hover:border-primary text-slate-900 dark:text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm">Write a Review</button>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-slate-900 dark:text-white font-bold">JD</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
                      <div className="flex text-amber-400 text-xs">
                        {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] fill-current">star</span>)}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">2 days ago</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Excellent Sound!</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">These headphones are amazing. The noise cancellation works perfectly in my loud office, and the battery lasts forever. Highly recommend!</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-slate-900 dark:text-white font-bold">AS</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Alice Smith</p>
                      <div className="flex text-amber-400 text-xs">
                        {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined text-[16px] fill-current">star</span>)}
                        <span className="material-symbols-outlined text-[16px] text-gray-300 dark:text-gray-600">star</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">1 week ago</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Good, but tight fit</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">Sound quality is top notch. My only complaint is they feel a bit tight after wearing them for 3+ hours. Otherwise, great value.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#1a242f] border-t border-gray-200 dark:border-gray-800 py-10 mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-slate-500">
            © 2023 AudioStore Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProductDetailPage
