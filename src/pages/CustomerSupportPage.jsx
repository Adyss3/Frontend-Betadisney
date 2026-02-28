import { Link } from 'react-router-dom'

const CustomerSupportPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-x-hidden transition-colors duration-200">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a3441] px-4 md:px-10 py-3 bg-white dark:bg-[#1a2632]">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4 text-[#111418] dark:text-white cursor-pointer">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined !text-[32px]">hexagon</span>
            </div>
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TechStore</h2>
          </div>
          <div className="hidden md:flex items-center gap-9">
            <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Shop</Link>
            <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/support">Support</Link>
            <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/orders">Account</Link>
            <Link className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/cart">Cart</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-4 md:gap-8">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#617589] dark:text-gray-400 flex border-none bg-[#f0f2f4] dark:bg-[#24303f] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-[#24303f] focus:border-none h-full placeholder:text-[#617589] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search products" />
            </div>
          </label>
          <div className="flex gap-2">
            <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
              <span className="truncate">Sign In</span>
            </Link>
            <Link to="/cart" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] dark:bg-[#24303f] text-[#111418] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col min-h-screen">
        <div className="@container">
          <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative" style={{backgroundImage: "linear-gradient(rgba(17, 25, 34, 0.7) 0%, rgba(17, 25, 34, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC1giVlvR5KPvRMKnwZ1moztjmC4eSiRnCnJPA8v39dFH0RyjKEMLwOnHvcqlAPq-hopl5bVb3QdIHknAWmj-So7GiBfsJ0Sgig5buViR9XyuXIHED3o_S2lGeQXbGQjlDnH5mLFzxU8WYSMuiG64qZTTY0KA4cACLXEutjPt590aOuSHtINN6jPoE8dcgKFFonTi4sQ9UTxi972yS5_ozBmhjymvAmOaX79jSV3ExssQK_BoRHXDwjIpE4NW6QD2f8x7lXENZrXwJ')"}}>
            <div className="flex flex-col gap-2 text-center max-w-[800px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">How can we help you today?</h1>
              <h2 className="text-gray-200 text-sm font-normal leading-normal @[480px]:text-base mt-2">24/7 Support for all your tech needs. From troubleshooting to tracking orders.</h2>
            </div>
            <label className="flex flex-col min-w-40 h-14 w-full max-w-[580px] z-10 mt-4 shadow-lg">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden">
                <div className="text-[#617589] flex bg-white items-center justify-center pl-5 border-r-0">
                  <span className="material-symbols-outlined text-[24px]">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] focus:outline-0 focus:ring-0 border-0 bg-white h-full placeholder:text-[#617589] px-4 pl-2 text-base font-normal leading-normal" placeholder="Search for troubleshooting, product guides..." />
                <div className="flex items-center justify-center bg-white pr-2">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="layout-container flex flex-col lg:flex-row gap-8 px-4 md:px-10 py-10 max-w-[1280px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-10">
            <section>
              <h3 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight mb-6">Browse by Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Shipping & Delivery</h4>
                    <p className="text-[#617589] dark:text-gray-400 text-sm">Track orders, shipping rates, and delivery times.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">settings_backup_restore</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Returns & Refunds</h4>
                    <p className="text-[#617589] dark:text-gray-400 text-sm">Start a return, check status, or read policies.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">build</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Product Support</h4>
                    <p className="text-[#617589] dark:text-gray-400 text-sm">Troubleshooting guides for laptops, phones, and more.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">account_circle</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#111418] dark:text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Account & Billing</h4>
                    <p className="text-[#617589] dark:text-gray-400 text-sm">Manage password, payment methods, and invoices.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight mb-6">Still need help?</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 p-6 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#f0f2f4] dark:bg-[#24303f] flex items-center justify-center text-[#111418] dark:text-white mb-4">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 dark:text-white">Email Support</h4>
                  <p className="text-[#617589] dark:text-gray-400 text-sm mb-4">We usually respond within 24 hours.</p>
                  <button className="w-full py-2 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 text-[#111418] dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Send Email</button>
                </div>

                <div className="flex-1 p-6 rounded-xl bg-white dark:bg-[#1a2632] border border-[#f0f2f4] dark:border-[#2a3441] shadow-sm flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-[#f0f2f4] dark:bg-[#24303f] flex items-center justify-center text-[#111418] dark:text-white mb-4">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 dark:text-white">Phone Support</h4>
                  <p className="text-[#617589] dark:text-gray-400 text-sm mb-4">Mon-Fri, 9am - 6pm EST</p>
                  <button className="w-full py-2 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 text-[#111418] dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Call Us</button>
                </div>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
            <div className="sticky top-24 flex flex-col h-[600px] bg-white dark:bg-[#1a2632] rounded-xl shadow-xl overflow-hidden border border-[#f0f2f4] dark:border-[#2a3441]">
              <div className="bg-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full border-2 border-primary"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">TechBot</h3>
                    <p className="text-blue-100 text-xs">Always online • Instant replies</p>
                  </div>
                </div>
                <button className="text-white/80 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50 dark:bg-[#15202b]">
                <div className="flex justify-center">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Today</span>
                </div>

                <div className="flex items-end gap-3">
                  <div className="size-8 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center shrink-0 text-primary dark:text-white">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                  </div>
                  <div className="flex flex-col gap-1 items-start max-w-[85%]">
                    <span className="text-[#617589] dark:text-gray-400 text-[11px] ml-1">TechBot • 10:00 AM</span>
                    <div className="p-3 bg-white dark:bg-[#24303f] rounded-2xl rounded-bl-none shadow-sm text-[#111418] dark:text-white text-sm leading-relaxed border border-gray-100 dark:border-gray-700">
                      Hi there! 👋 I'm TechBot. I can help you track an order, find the perfect laptop, or answer warranty questions. How can I help you today?
                    </div>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="size-8 shrink-0"></div>
                  <div className="flex flex-col gap-1 items-start max-w-[85%]">
                    <div className="p-3 bg-white dark:bg-[#24303f] rounded-2xl rounded-bl-none shadow-sm text-[#111418] dark:text-white text-sm leading-relaxed border border-gray-100 dark:border-gray-700">
                      I see you were looking at the <strong>UltraBook Pro X1</strong> recently. Do you have questions about it?
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pl-11">
                  <button className="flex h-8 items-center justify-center px-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors border border-primary/10">Track My Order</button>
                  <button className="flex h-8 items-center justify-center px-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors border border-primary/10">Return Policy</button>
                  <button className="flex h-8 items-center justify-center px-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors border border-primary/10">Speak to Human</button>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-[#1a2632] border-t border-[#f0f2f4] dark:border-[#2a3441]">
                <form className="flex items-end gap-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 bg-[#f0f2f4] dark:bg-[#24303f] rounded-xl flex items-center min-h-[44px] px-3 border border-transparent focus-within:border-primary/50 transition-colors">
                    <input className="bg-transparent border-none focus:ring-0 text-sm text-[#111418] dark:text-white w-full placeholder:text-gray-400 p-0" placeholder="Type your message..." type="text" />
                    <button className="text-gray-400 hover:text-primary transition-colors ml-2" type="button">
                      <span className="material-symbols-outlined text-[20px]">attach_file</span>
                    </button>
                  </div>
                  <button className="size-[44px] flex items-center justify-center bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors shadow-sm" type="submit">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </form>
                <div className="text-center mt-2">
                  <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">lock</span>
                    Encrypted & Secure Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#1a2632] border-t border-[#f0f2f4] dark:border-[#2a3441] py-8 mt-auto">
        <div className="layout-container px-4 md:px-10 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#617589] dark:text-gray-400">© 2023 TechStore Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-sm text-[#617589] hover:text-primary dark:text-gray-400 dark:hover:text-white" to="#">Privacy Policy</Link>
            <Link className="text-sm text-[#617589] hover:text-primary dark:text-gray-400 dark:hover:text-white" to="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CustomerSupportPage
