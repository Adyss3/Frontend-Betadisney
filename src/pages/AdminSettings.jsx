import { Link } from 'react-router-dom'

const AdminSettings = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
      <header className="w-full bg-card-light dark:bg-card-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Link className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" to="/admin">Dashboard</Link>
            <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-medium">Settings</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">Admin Settings</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-medium">Manage your store configuration, payments, and shipping preferences.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold transition-colors shadow-sm">Cancel</button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                <span className="material-symbols-outlined text-[20px]">save</span>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <nav className="sticky top-32 space-y-1">
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300" href="#general">
                <span className="material-symbols-outlined icon-fill">tune</span>
                General Settings
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#payments">
                <span className="material-symbols-outlined">payments</span>
                Payment Gateways
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#shipping">
                <span className="material-symbols-outlined">local_shipping</span>
                Shipping Options
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#notifications">
                <span className="material-symbols-outlined">notifications</span>
                Notification Settings
              </a>
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#integrations">
                <span className="material-symbols-outlined">extension</span>
                Integrations
              </a>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-8">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="general">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">General Settings</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Configure your store information and regional settings.</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl">storefront</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Store Name</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary placeholder-slate-400" type="text" defaultValue="TechHaven Electronics" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Support Email</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">mail</span>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary placeholder-slate-400" type="email" defaultValue="support@techhaven.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Support Phone</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">call</span>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary placeholder-slate-400" type="tel" defaultValue="+1 (555) 0123-4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Default Currency</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>NGN (₦)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Timezone</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                      <option>(GMT+00:00) UTC</option>
                      <option>(GMT+01:00) West Central Africa</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="payments">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Payment Gateway Configurations</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage API keys and active payment methods.</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl">credit_card</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">P</div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">Paystack</h3>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                        <input defaultChecked className="peer sr-only" type="checkbox" />
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                      </div>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200">Enabled</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-4 pl-13 md:pl-13">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Public Key</label>
                      <input className="w-full font-mono text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" type="text" defaultValue="pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Secret Key</label>
                      <input className="w-full font-mono text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" type="password" defaultValue="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">Pp</div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white opacity-70">PayPal</h3>
                        <p className="text-xs text-slate-500">Enable PayPal for international transactions.</p>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors">
                        <input className="peer sr-only" type="checkbox" />
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                      </div>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200">Disabled</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="shipping">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Shipping Options</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Set shipping zones, rates, and carrier preferences.</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl">local_shipping</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Flat Rate Shipping</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-8 pr-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" type="number" defaultValue="15.00" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Free Shipping Threshold</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-8 pr-3 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" type="number" defaultValue="500.00" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Enabled Carriers</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors">
                      <input defaultChecked className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox" />
                      <span className="ml-3 font-medium text-slate-900 dark:text-white">DHL Express</span>
                      <span className="ml-auto text-xs text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">International</span>
                    </label>
                    <label className="flex items-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors">
                      <input defaultChecked className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox" />
                      <span className="ml-3 font-medium text-slate-900 dark:text-white">FedEx Ground</span>
                      <span className="ml-auto text-xs text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">Domestic</span>
                    </label>
                    <label className="flex items-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors">
                      <input className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" type="checkbox" />
                      <span className="ml-3 font-medium text-slate-900 dark:text-white">Local Courier</span>
                      <span className="ml-auto text-xs text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">Local</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="notifications">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notification Settings</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Customize email templates and alert triggers.</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl">notifications</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Order Confirmation</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Sent immediately after a successful purchase.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-medium text-primary hover:underline">Edit Template</button>
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors cursor-pointer">
                      <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-5"></span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Shipping Update</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Sent when order status changes to 'Shipped'.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-medium text-primary hover:underline">Edit Template</button>
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors cursor-pointer">
                      <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-5"></span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Low Stock Alert (Admin)</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Internal notification when inventory is low.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-medium text-primary hover:underline">Configure</button>
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors cursor-pointer">
                      <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminSettings
