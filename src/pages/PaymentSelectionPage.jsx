import { Link } from 'react-router-dom'

const PaymentSelectionPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">devices</span>
            </div>
            <h2 className="text-[#111418] dark:text-white text-xl font-extrabold tracking-tight">TechStore</h2>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">lock</span>
              Secure Checkout
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        <main className="flex-1 px-4 lg:px-8 py-8 lg:py-12 border-r border-transparent lg:border-border-light dark:lg:border-border-dark">
          <nav className="flex flex-wrap items-center gap-2 mb-8 text-sm">
            <Link className="text-primary font-medium hover:underline" to="/cart">Cart</Link>
            <span className="text-gray-400 material-symbols-outlined text-base">chevron_right</span>
            <Link className="text-primary font-medium hover:underline" to="#">Information</Link>
            <span className="text-gray-400 material-symbols-outlined text-base">chevron_right</span>
            <Link className="text-primary font-medium hover:underline" to="#">Shipping</Link>
            <span className="text-gray-400 material-symbols-outlined text-base">chevron_right</span>
            <span className="text-[#111418] dark:text-white font-bold">Payment</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-2">Payment Method</h1>
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-green-500 text-lg">verified_user</span>
              All transactions are secure and encrypted.
            </p>
          </div>

          <form className="flex flex-col gap-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm">
              <div className="border-b border-border-light dark:border-border-dark">
                <div className="p-4 flex items-center gap-4 bg-primary/5 dark:bg-primary/10">
                  <input defaultChecked className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" id="payment-card" name="payment_method" type="radio" />
                  <label className="flex-1 flex justify-between items-center cursor-pointer" htmlFor="payment-card">
                    <span className="font-bold text-[#111418] dark:text-white">Credit/Debit Card</span>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] font-bold text-white italic">VISA</div>
                      <div className="w-8 h-5 bg-red-500 rounded flex items-center justify-center text-[8px] font-bold text-white">MC</div>
                      <div className="w-8 h-5 bg-orange-400 rounded flex items-center justify-center text-[8px] font-bold text-white">AMEX</div>
                    </div>
                  </label>
                </div>
                <div className="p-6 bg-surface-light dark:bg-surface-dark grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1.5">Card Number</label>
                    <div className="relative">
                      <input className="w-full h-11 pl-10 pr-4 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary" placeholder="0000 0000 0000 0000" type="text" />
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">credit_card</span>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">lock</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1.5">Name on Card</label>
                    <input className="w-full h-11 px-4 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary" placeholder="e.g. John Doe" type="text" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1.5">Expiration (MM/YY)</label>
                    <input className="w-full h-11 px-4 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary" placeholder="MM / YY" type="text" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1.5">Security Code</label>
                    <div className="relative">
                      <input className="w-full h-11 px-4 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary" placeholder="CVC" type="text" />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-help">help</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-border-light dark:border-border-dark">
                <div className="p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <input className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" id="payment-paystack" name="payment_method" type="radio" />
                  <label className="flex-1 flex flex-col cursor-pointer" htmlFor="payment-paystack">
                    <span className="font-bold text-[#111418] dark:text-white">Paystack</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">You will be redirected to Paystack to complete your purchase securely.</span>
                  </label>
                  <span className="material-symbols-outlined text-gray-400">open_in_new</span>
                </div>
              </div>

              <div>
                <div className="p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <input className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" id="payment-cash" name="payment_method" type="radio" />
                  <label className="flex-1 flex flex-col cursor-pointer" htmlFor="payment-cash">
                    <span className="font-bold text-[#111418] dark:text-white">Cash on Site</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Pay with cash upon delivery or at our pickup location.</span>
                  </label>
                  <span className="material-symbols-outlined text-gray-400">payments</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Billing Address</h3>
              <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm">
                <label className="flex items-center gap-4 p-4 border-b border-border-light dark:border-border-dark cursor-pointer">
                  <input defaultChecked className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" name="billing_address" type="radio" />
                  <span className="text-sm font-medium text-[#111418] dark:text-white">Same as shipping address</span>
                </label>
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <input className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" name="billing_address" type="radio" />
                  <span className="text-sm font-medium text-[#111418] dark:text-white">Use a different billing address</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              <Link className="text-primary font-bold hover:underline flex items-center gap-1" to="#">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Return to Shipping
              </Link>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2" type="button">
                <span>Place Order</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark text-xs text-gray-400 flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link className="hover:underline hover:text-primary" to="#">Refund Policy</Link>
              <Link className="hover:underline hover:text-primary" to="#">Privacy Policy</Link>
              <Link className="hover:underline hover:text-primary" to="#">Terms of Service</Link>
            </div>
          </form>
        </main>

        <aside className="w-full lg:w-[420px] bg-gray-50 dark:bg-surface-dark/50 lg:min-h-[calc(100vh-64px)] p-6 lg:p-10 border-l border-transparent lg:border-border-light dark:lg:border-border-dark">
          <div className="sticky top-24">
            <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4 items-center">
                <div className="relative size-16 rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden flex items-center justify-center p-2">
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm border border-white dark:border-surface-dark">1</span>
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#111418] dark:text-white truncate">MacBook Pro M2</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Space Grey / 16GB / 512GB</p>
                </div>
                <p className="text-sm font-bold text-[#111418] dark:text-white">$2400.00</p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="relative size-16 rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden flex items-center justify-center p-2">
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm border border-white dark:border-surface-dark">2</span>
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 rounded"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#111418] dark:text-white truncate">iPhone 15 Case</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Midnight Blue</p>
                </div>
                <p className="text-sm font-bold text-[#111418] dark:text-white">$45.00</p>
              </div>
            </div>

            <hr className="border-border-light dark:border-border-dark my-6" />

            <div className="flex gap-2 mb-6">
              <input className="flex-1 h-11 px-4 rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-[#111418] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary text-sm" placeholder="Gift card or discount code" type="text" />
              <button className="h-11 px-4 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" type="button">Apply</button>
            </div>

            <hr className="border-border-light dark:border-border-dark my-6" />

            <div className="space-y-2 text-sm text-[#111418] dark:text-white">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                <span className="font-medium">$2445.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">Calculated at next step</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Estimated Taxes</span>
                <span className="font-medium">$195.60</span>
              </div>
            </div>

            <hr className="border-border-light dark:border-border-dark my-6" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#111418] dark:text-white">Total</span>
              <div className="text-right">
                <span className="text-xs text-gray-500 dark:text-gray-400 block font-normal">USD</span>
                <span className="text-2xl font-extrabold text-[#111418] dark:text-white">$2640.60</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PaymentSelectionPage
