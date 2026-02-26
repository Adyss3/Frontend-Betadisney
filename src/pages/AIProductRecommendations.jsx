import { Link } from 'react-router-dom'

const AIProductRecommendations = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white min-h-screen flex flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-[#f0f2f4] dark:border-[#2a3642]">
        <div className="flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3 text-[#111418] dark:text-white group" to="/">
              <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">bolt</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">TechStore</h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="#">Computers</Link>
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="#">Phones</Link>
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="#">Accessories</Link>
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="#">Deals</Link>
            </nav>
          </div>
          <div className="flex items-center justify-end gap-4 flex-1 lg:flex-none">
            <div className="hidden md:flex flex-1 max-w-[320px]">
              <div className="relative w-full text-gray-500 focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="block w-full h-10 pl-10 pr-3 py-2 border-none rounded-lg bg-[#f0f2f4] dark:bg-[#1f2b37] text-sm text-[#111418] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#1f2b37] transition-all" placeholder="Search for products..." type="text" />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center size-10 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-[#1f2b37] text-[#111418] dark:text-white transition-colors relative">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
              </button>
              <button className="flex items-center justify-center size-10 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-[#1f2b37] text-[#111418] dark:text-white transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 py-8">
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 bg-white dark:bg-card-dark rounded-xl p-8 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="relative w-full max-w-[500px] aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSsq0Rg3rfZEY4xJfJQT2Ylpxj8v_weGxVtTn9klmw059JtAaIKRVSzyKNrvXnf-rO9Pvxl7ZT-gtSmhDT-Gf6BhPFu3M1QvAnisaRtTzSJWBztkLjqcNPLUo9q3QzR4WumAVYOLDjR7FUgFFctb6wacPfCjrw-xs_BkNqLuD2s8BPN0UxjPheD3drx6nEUZiMFL0qlen2e2s47Nrlmxs1MbSUdBY_KOfw-T0-qtivGc1YqyR5xN1zMj-j_5Qfw1RNIHGZeNqU-j3s')"}}></div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold uppercase rounded">In Stock</span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <span className="material-symbols-outlined icon-filled text-[18px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[18px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[18px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[18px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[18px]">star_half</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(450 reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#111418] dark:text-white">MacBook Pro 16-inch M3 Max</h1>
              <p className="text-xl text-primary font-bold">$3,499.00</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                The most powerful MacBook Pro ever is here. With the blazing-fast M3 Max chip, incredible battery life, and a stunning Liquid Retina XDR display, it's a pro laptop without equal.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
                <button className="bg-gray-100 dark:bg-[#2a3642] hover:bg-gray-200 dark:hover:bg-[#374552] text-[#111418] dark:text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 py-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Recommended for You</h2>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800">
                  <span className="material-symbols-outlined text-[14px] text-purple-600 dark:text-purple-300">auto_awesome</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">AI Pick</span>
                </div>
              </div>
              <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">
                Based on your viewing history of <strong>Laptops</strong> and <strong>Pro Accessories</strong>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="size-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Sale</div>
              <div className="relative w-full aspect-square bg-[#f8f9fa] dark:bg-[#151e29] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjp9A8JQDhtYWWfvlMGaXi6DG8kl_OgQIM7DsSpv7_KOa4fCUPs2QtrpZSVn-oEP8bmNzw-k6gJsjlA0qWajbkitqffNWVWFtxeFVPYiSofGb7q-VTapGUzoEUi2GsD5TfxMAF8-hhynRAvPbggGOPmebqg4H9-lXbucIrN2F32-ONEnOpPkBEI__u5Dtie1j54A948bceJW77QLtL7rwZfLN4NEDcBco7Zbg4mZ1zCCtZHRI9zYfhAFIeSqQlMczoBvLNd8CQ1LjK')"}}></div>
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <button className="w-full h-10 bg-primary/90 hover:bg-primary backdrop-blur-sm text-white text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="flex justify-between items-start">
                  <Link className="text-[#111418] dark:text-white text-base font-medium leading-tight hover:text-primary transition-colors line-clamp-2" to="#">Apple Magic Mouse 2 - Wireless</Link>
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-500">
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star_half</span>
                  <span className="text-gray-400 ml-1">(1,024)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 line-through font-medium">$99.00</span>
                    <span className="text-[#111418] dark:text-white text-lg font-bold">$79.00</span>
                  </div>
                  <button className="lg:hidden size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="relative w-full aspect-square bg-[#f8f9fa] dark:bg-[#151e29] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu6crXaKKLLJ82oKc0tn8bQmmoB9lD26g8f_9tG_jh83BnP-IbrB3fjZc-ucK6YVN8pwwBiZewhYl-1SLItLwjx6aavsaUO8Yj3Y0qCXHHgWJoLmDtRvOt4Um35By9i8HRjxZhVtHzWIpEL4T3jwqfP1ifLHSoW7flT8mVt0qAQ6w5r5_BTE2h1HAqnIdEePftnayXzKhThw9Bimp8_7vmmPORYoI2zCwrzXPyxQpameLfy4oGIfKUDupmh3_Uly23ebVXun82VlIV')"}}></div>
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <button className="w-full h-10 bg-primary/90 hover:bg-primary backdrop-blur-sm text-white text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="flex justify-between items-start">
                  <Link className="text-[#111418] dark:text-white text-base font-medium leading-tight hover:text-primary transition-colors line-clamp-2" to="#">Satechi USB-C Multi-Port Adapter</Link>
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-500">
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star_border</span>
                  <span className="text-gray-400 ml-1">(342)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-[#111418] dark:text-white text-lg font-bold">$89.99</span>
                  </div>
                  <button className="lg:hidden size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">New Arrival</div>
              <div className="relative w-full aspect-square bg-[#f8f9fa] dark:bg-[#151e29] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOqpiNmUbdKtikSZAC4VTExERbf2kyR_yeiq07k_R8JaDJTePPuFz16G98PAQIEzEuNV-UAuvAlWq2b2UPIpJvG4-K58Q6-qSQegUcczVjv5ezn_NJb3_SWIP20gV_Y9y08JHzOdNd3NmF_IH1VXaFxNbM-KytF-15_Wo4tMXGsbUdylwhEKTE2ydCtD9iL05RXD_vpq86HbXy5wigQXVFu2GR7o_8jq8N0pu8kBcFVpKVaNPiy5EyOwadF_Z9TvHmiJbMBfsy9kRG')"}}></div>
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <button className="w-full h-10 bg-primary/90 hover:bg-primary backdrop-blur-sm text-white text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="flex justify-between items-start">
                  <Link className="text-[#111418] dark:text-white text-base font-medium leading-tight hover:text-primary transition-colors line-clamp-2" to="#">LG UltraFine 5K Display - 27 Inch</Link>
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-500">
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="text-gray-400 ml-1">(58)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-[#111418] dark:text-white text-lg font-bold">$1,299.00</span>
                  </div>
                  <button className="lg:hidden size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="relative w-full aspect-square bg-[#f8f9fa] dark:bg-[#151e29] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnu0UBafzx5BWlBE6T1PtFFxMrLEF2iL5Qtj6h9vvxIP3gCqQmi7WbZwM-rWFUWGpTFZov3OLpsDok2DR-qFtVjjSuoHuMB9hUG0WaCmBTwPDOJmQSMAM_h9qYDKJfDgMTXkNYbJd8sbLAWivmo0enKIZOy2J78t9OmqSZ-0V90UGaDU2acjjaaOQWqvtsyc-vGHp5AwAfx90-ak1qhQAZtSOqxPLeuAcdtqprrzhQQzQRAwwty1yAMszayBzo0kk4wt1fEK7Otbql')"}}></div>
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <button className="w-full h-10 bg-primary/90 hover:bg-primary backdrop-blur-sm text-white text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="flex justify-between items-start">
                  <Link className="text-[#111418] dark:text-white text-base font-medium leading-tight hover:text-primary transition-colors line-clamp-2" to="#">Leather Laptop Sleeve - 16 inch</Link>
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-500">
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                  <span className="material-symbols-outlined icon-filled text-[14px]">star_half</span>
                  <span className="text-gray-400 ml-1">(125)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-[#111418] dark:text-white text-lg font-bold">$59.50</span>
                  </div>
                  <button className="lg:hidden size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-card-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </div>
                <h3 className="text-lg font-bold">TechStore</h3>
              </div>
              <p className="text-[#617589] dark:text-gray-400 text-sm">Empowering your digital life with AI-driven technology.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-sm" to="#">Privacy Policy</Link>
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-sm" to="#">Terms of Service</Link>
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors text-sm" to="#">Help Center</Link>
            </div>
            <div className="flex gap-4">
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" to="#">
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" to="#">
                <span className="material-symbols-outlined">share</span>
              </Link>
              <Link className="text-[#617589] dark:text-gray-400 hover:text-primary transition-colors" to="#">
                <span className="material-symbols-outlined">mail</span>
              </Link>
            </div>
          </div>
          <div className="text-center mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[#617589] dark:text-gray-500 text-sm">© 2024 TechStore AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AIProductRecommendations
