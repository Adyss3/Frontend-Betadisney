import { Link } from 'react-router-dom'

const OrderDetailsScreen = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="w-full mb-6">
          <div className="flex flex-wrap gap-2 items-center text-sm">
            <Link className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium leading-normal" to="#">Dashboard</Link>
            <span className="text-slate-400 dark:text-slate-600 font-medium leading-normal material-symbols-outlined text-base">chevron_right</span>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium leading-normal" to="#">Orders</Link>
            <span className="text-slate-400 dark:text-slate-600 font-medium leading-normal material-symbols-outlined text-base">chevron_right</span>
            <span className="text-slate-900 dark:text-slate-100 font-semibold leading-normal">Order #ORD-2023-001</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Order #ORD-2023-001</h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800">Processing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <p>Placed on Oct 24, 2023 at 10:30 AM</p>
            </div>
          </div>
          <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span className="truncate">Generate Invoice</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Order Items</h2>
                <span className="text-sm text-slate-500 dark:text-slate-400">3 Items</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-[#0f172a]/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-100 dark:border-slate-700">
                      <th className="px-6 py-4">Product</th>
                      <th className="px-6 py-4 text-right">Price</th>
                      <th className="px-6 py-4 text-center">Quantity</th>
                      <th className="px-6 py-4 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-600 bg-white">
                            <img alt="MacBook Pro Laptop" className="h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWK-mnOX2Lh2bZuNvbsYTo5Ikaf_u5sKx4ZV8Z2QqB-k54ryDbjzK8DBskSS9947dpl8Z97YmNKRUe2OuxjJii58Zt0tt_XKGx2vI_0U3w41etFSgfIpdhuybsgw39M7U1lWIRNZ65rElrpiG6nFydNl4uFmob6x1lKwv2mqk0yfkXPgJeYot81TsUayymzjiSwthKCzsHYb2VYwhywtLqGufKIkkkUf0ltdtsXNxEgmYq5NqpyruelKHsVLybMamYu5Ezv0gtPAEg" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">MacBook Pro 14" M2</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">SKU: MB-PRO-M2-14</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium text-slate-700 dark:text-slate-300">$1,999.00</td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">1</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-slate-900 dark:text-white">$1,999.00</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-600 bg-white">
                            <img alt="USB-C Hub Adapter" className="h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZRgZvu6GHI7BS7HsekR-PPrhbeGCAzEEywXZaU5JPXXsG4XIt4UHBHjR7PjGFGaCCchu9yTvO4-B1n4fkNHyQstBuh0px5I7Z_x7MTKGdNbU5spDvaU2CkeX8P-xQwWjSmVCgomtsyxVOJ_2Nb6Gu33k5ANii2j-O8zSAasCoiQEjgWDCrGkQj6m_eOJ2eqmHi--5ybSR6q8poTPKjdxuXRy6cfXFoi5NhLMV5_6CcbudYJpy9nB1Rbzv9Dp1T8Axd5GiEcqxSsxQ" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">USB-C Hub Adapter</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">SKU: USB-C-HUB-01</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium text-slate-700 dark:text-slate-300">$45.00</td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">2</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-slate-900 dark:text-white">$90.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 dark:bg-[#0f172a]/30 px-6 py-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex flex-col gap-3 ml-auto max-w-xs">
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">$2,089.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Shipping (Express)</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Tax (8%)</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">$167.12</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-600 my-1"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-slate-900 dark:text-white">Total Paid</span>
                    <span className="text-xl font-extrabold text-primary">$2,256.12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Order History & Notes</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3">
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white dark:ring-[#1e293b] dark:bg-blue-900">
                        <span className="material-symbols-outlined text-sm text-primary">inventory_2</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-sm font-semibold text-slate-900 dark:text-white">Order Placed</h3>
                      <time className="block mb-2 text-xs font-normal leading-none text-slate-400 dark:text-slate-500">Oct 24, 2023 10:30 AM</time>
                    </li>
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white dark:ring-[#1e293b] dark:bg-blue-900">
                        <span className="material-symbols-outlined text-sm text-primary">credit_card</span>
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">Payment Confirmed</h3>
                      <time className="block mb-2 text-xs font-normal leading-none text-slate-400 dark:text-slate-500">Oct 24, 2023 10:32 AM</time>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-4 ring-white dark:ring-[#1e293b] dark:bg-gray-700">
                        <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">local_shipping</span>
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-slate-500 dark:text-slate-400">Order Shipped</h3>
                      <p className="text-xs font-normal text-slate-400 dark:text-slate-500">Pending...</p>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-6 md:pt-0 md:pl-8">
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2" htmlFor="notes">Admin Notes</label>
                  <textarea className="block p-3 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-200 focus:ring-primary focus:border-primary dark:bg-[#0f172a] dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="notes" placeholder="Add a private note about this order..." rows="4"></textarea>
                  <button className="mt-3 text-sm font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400">Save Note</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4">
              <label className="flex flex-col w-full mb-4">
                <p className="text-slate-900 dark:text-white text-sm font-bold leading-normal pb-2">Update Order Status</p>
                <div className="relative">
                  <select className="form-select flex w-full appearance-none rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0f172a] h-12 pl-4 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="refunded">Refunded</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </div>
                </div>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold leading-normal tracking-[0.015em] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>Print</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold leading-normal tracking-[0.015em] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Resend</span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Customer</h2>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center text-white font-bold text-lg shadow-sm">JD</div>
                  <div>
                    <p className="text-base font-bold text-slate-900 dark:text-white">Jane Doe</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Customer since 2021</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px] mt-0.5">mail</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Email</p>
                      <a className="text-sm font-medium text-primary hover:underline" href="mailto:jane.doe@example.com">jane.doe@example.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px] mt-0.5">call</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Phone</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <Link className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center justify-between group" to="#">
                    View Profile
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Delivery Address</h2>
              </div>
              <div className="h-32 w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden group">
                <img alt="Map view of Silicon Valley" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnz0cuD4gr11L5XgmLOVUNtqyiiRVV7AycoLBwgY_pSiIWX8Hbcr2QOPJJjMqJEv_-4hBmbg2Zb395vuQ0d7y1OGpVoeCJI4ZYmzYAiWUEo3jFgBZYkBcmdeDtzeb3rAZfqVz78eJnUAuuSV_jqrr-2XlwgGuxQj_U2HPk12QX7mHhjrw-KyK2W0DFxz7tia2ncq08Sqt47gIeVMlLduSP-BK_j6ASx-UjZQNB4wNnvAHZriH9T3MOPvjFBgZsFloubGxWioGnlsYd" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary rounded-full border-2 border-white dark:border-[#1e293b] shadow-lg flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined text-white text-sm">home_pin</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-900 dark:text-white leading-relaxed">
                  <span className="font-bold block mb-1">Jane Doe</span>
                  123 Tech Park Blvd<br />
                  Suite 400<br />
                  San Jose, CA 95110<br />
                  United States
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-2">Billing Address</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">Same as shipping address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsScreen
