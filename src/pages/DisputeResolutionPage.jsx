import { Link } from 'react-router-dom'

const DisputeResolutionPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-slate-100 overflow-x-hidden">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-slate-800 bg-white dark:bg-surface-dark px-10 py-3 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#111418] dark:text-white">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-xl">devices</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">TechStore</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-[#111418] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/catalog">Shop</Link>
            <Link className="text-[#111418] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/orders">Orders</Link>
            <Link className="text-[#111418] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/support">Support</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full group">
              <div className="text-[#617589] dark:text-slate-400 flex border-none bg-[#f0f2f4] dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0 group-focus-within:ring-2 group-focus-within:ring-primary/20">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-slate-800 focus:border-none h-full placeholder:text-[#617589] dark:placeholder:text-slate-500 px-4 pl-2 text-sm font-normal leading-normal" placeholder="Search orders..." />
            </div>
          </label>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-slate-700 cursor-pointer" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALXrOnhWtUzajjTYEcae2cloCnfcEznZ3Uk9mfXOQQyOCtFLl4DXdWczI7nkseg-ZLWY0AFsr6Nzrvovvv58UgMK0XfVgM_6qyBQbc9xhY6bpfAbVj1GQMsU399ucLx6JYglDKXbZ6m4xra8e2MIzH_SUH0NYHu8K7xdVqqGkgcRmHohXF16TCoT8r9dn9ItwYSTc144Nff-yE6IxDFkT_h1sXj-r-zS2a2AfMa8mU7BB5Y-cEGrnlb9-Tp6N7i81XLwquwmfnOmca')"}}></div>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-10 px-4 sm:px-8">
        <div className="flex flex-col max-w-[1200px] flex-1 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111418] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Dispute Resolution Center</h1>
            <p className="text-[#617589] dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">We are here to help make things right. Please fill out the form below to start your claim for Order #12345 or select a different order.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">Step 2 of 4</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Order Details</span>
                </div>
                <div className="w-full bg-[#f0f2f4] dark:bg-slate-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="flex justify-between mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    <span>Select Order</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                    <span className="material-symbols-outlined text-sm fill-current">radio_button_checked</span>
                    <span>Issue Details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">radio_button_unchecked</span>
                    <span>Evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">radio_button_unchecked</span>
                    <span>Review</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-[#e5e7eb] dark:border-slate-800 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Selected Order</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                      <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <select className="w-full appearance-none rounded-lg border border-[#dbe0e6] dark:border-slate-600 bg-white dark:bg-surface-dark text-[#111418] dark:text-white p-4 pl-12 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow cursor-pointer">
                      <option value="12345">Order #12345 - MacBook Pro M2 (Delivered Oct 24)</option>
                      <option value="12342">Order #12342 - USB-C Hub (Delivered Oct 10)</option>
                      <option value="search">Find another order...</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4 p-3 bg-[#f6f7f8] dark:bg-slate-800/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-700">
                    <div className="size-12 rounded bg-white dark:bg-slate-700 bg-center bg-cover flex-shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVHvgsW0KioBdALsbZ2sua9QNPSrhjOxJeZH1BuDD2Wo-3MY7T4FTfB8yYMAB-BhFs2iELHLnN-CVLJC0yukZ5oaQoNc194jm3NwLiwam-1XnU8EpydaXRBeabsjv18X6Nulsy98cKKKxAcugGFNHiJ-504r8EbMY9IdxcizC3YcP5CCI92VafdMA_neewEJMIm9YDVjuk34ilzL2ps3_ymJ4DDx5BmYMEd9vEK0V3_c9OOfkq8i3BUgwSGmlHZowfe-3jbD6nIBBM')"}}></div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#111418] dark:text-white">MacBook Pro 14" M2 Pro</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Sold by TechStore Official • $1,999.00</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#f0f2f4] dark:bg-slate-700 w-full"></div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Reason for Dispute</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                      <span className="material-symbols-outlined">report_problem</span>
                    </div>
                    <select className="w-full appearance-none rounded-lg border border-[#dbe0e6] dark:border-slate-600 bg-white dark:bg-surface-dark text-[#111418] dark:text-white p-4 pl-12 pr-10 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow cursor-pointer">
                      <option disabled value="">Select the main issue...</option>
                      <option value="not_received">Item not received</option>
                      <option value="damaged">Item arrived damaged</option>
                      <option value="defective">Item is defective/not working</option>
                      <option value="wrong_item">Received wrong item</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Describe the Issue</label>
                  <textarea className="w-full min-h-[160px] resize-y rounded-lg border border-[#dbe0e6] dark:border-slate-600 bg-white dark:bg-surface-dark text-[#111418] dark:text-white p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow placeholder:text-[#617589] dark:placeholder:text-slate-500" placeholder="Please provide specific details about the issue. For example, if the item is damaged, describe where the damage is located."></textarea>
                  <p className="text-xs text-slate-500 text-right">0/500 characters</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Evidence (Optional)</label>
                  <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#dbe0e6] dark:border-slate-600 rounded-xl bg-[#f8f9fa] dark:bg-slate-800/30 hover:bg-[#f0f2f4] dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                      <div className="mb-3 p-3 rounded-full bg-white dark:bg-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
                      </div>
                      <p className="mb-1 text-sm text-[#111418] dark:text-white font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or PDF (MAX. 10MB)</p>
                    </div>
                    <input className="hidden" type="file" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button className="text-slate-600 dark:text-slate-400 font-medium text-sm hover:text-[#111418] dark:hover:text-white transition-colors">Cancel</button>
                  <button className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                    <span>Continue to Evidence</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[360px] flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-slate-800">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  What happens next?
                </h3>
                <ul className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-6 pb-2">
                  <li className="ml-6 relative">
                    <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white dark:ring-surface-dark">
                      <span className="text-[10px] font-bold">1</span>
                    </span>
                    <h4 className="font-bold text-sm text-[#111418] dark:text-white">Submit Claim</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Fill out the details and attach any necessary proof.</p>
                  </li>
                  <li className="ml-6 relative">
                    <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 ring-4 ring-white dark:ring-surface-dark">
                      <span className="text-[10px] font-bold">2</span>
                    </span>
                    <h4 className="font-bold text-sm text-[#111418] dark:text-white">Seller Review</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">The seller has 48 hours to respond or offer a solution.</p>
                  </li>
                  <li className="ml-6 relative">
                    <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 ring-4 ring-white dark:ring-surface-dark">
                      <span className="text-[10px] font-bold">3</span>
                    </span>
                    <h4 className="font-bold text-sm text-[#111418] dark:text-white">Resolution</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">If not resolved, our team steps in to make a final decision.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f0f5ff] dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-white dark:bg-blue-900/40 rounded-full text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111418] dark:text-white">Buyer Protection</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">You are covered by our 100% money-back guarantee if the item is not as described.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white dark:bg-blue-900/40 rounded-full text-primary">
                    <span className="material-symbols-outlined">headset_mic</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111418] dark:text-white">24/7 Support</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Need help with this form? <Link className="text-primary font-medium hover:underline" to="/support">Chat with us</Link>.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-slate-800">
                <h4 className="font-bold text-sm text-[#111418] dark:text-white mb-3">Common Questions</h4>
                <div className="space-y-3">
                  <Link className="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-between" to="/support">
                    <span>How long do refunds take?</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </Link>
                  <Link className="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-between" to="/support">
                    <span>Can I update my claim later?</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DisputeResolutionPage
