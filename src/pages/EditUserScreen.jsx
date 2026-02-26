import { Link } from 'react-router-dom'

const EditUserScreen = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-display min-h-screen flex overflow-hidden">
      <aside className="w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex-col hidden md:flex z-10 h-screen sticky top-0">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-center bg-no-repeat bg-cover rounded-lg size-10 bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">devices</span>
            </div>
            <div>
              <h1 className="text-base font-bold leading-none">TechAdmin</h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-1">Electronics Store</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors group" to="/admin">
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">pie_chart</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors group" to="#">
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">shopping_cart</span>
              <span className="text-sm font-medium">Orders</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors group" to="#">
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">inventory_2</span>
              <span className="text-sm font-medium">Products</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium" to="#">
              <span className="material-symbols-outlined text-primary fill-1">group</span>
              <span className="text-sm">Users</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors group" to="#">
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-border-light dark:border-border-dark">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-border-light dark:border-border-dark" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVrBnL_OJFT3Z7bETUVCPRe6y9TeetYBb2FyP17YgBFtmoF42BYMg8kCuSsOowyBMtFCwdl_oagXdRz3gN8lLWOMJgIdEV_bKC4na8Bcq6_7XHbKlEpbIHmJXIRu5VEZ6nuqbH_Hk1A3WpzFxx8tYzDlqXpzOh66hDHox1LMiFeYF-jgiKM-Af-C5t9gmhTHlaqj5Le4anyj6amMeGqjxVZ7Yalq4cEgM3Sd4OBLIH4PNQ3EmmM_UmSFN4MdxZ9YpzLd3Z67OSXHCy')"}}></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">Alex Morgan</p>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark px-6 py-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Link className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" to="/admin">Home</Link>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">/</span>
              <Link className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" to="/user-management">Users</Link>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">/</span>
              <span className="text-text-main-light dark:text-text-main-dark font-semibold">User Details</span>
            </div>
            <button className="md:hidden p-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-text-main-light dark:text-text-main-dark">Edit User: John Doe</h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Manage user profile, security, and role settings.</p>
            </div>
            <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 transition-colors text-sm font-bold border border-red-100 dark:border-red-900/30">
              <span className="material-symbols-outlined text-[20px]">delete</span>
              Delete User
            </button>
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">badge</span>
                  Identity
                </h2>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-background-light dark:bg-background-dark border-4 border-card-light dark:border-card-dark shadow-md bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4oTtyqmxzwekW9nSK8lisNeuAty8pIc3-M6mGeXJaj0f3s61UecmmRJlbftoOJGISEDhn7IyZVuLqn1yBJqzTtqU5TieFiuGWLpOmkBMy_lB9b2VDh79oq_WxGbzu9iJ4wjfDYAjbpFe-EtHEW1Y8SJonSfc0CprfxKvUsKR5L30-JmEi8cl3ZaWushG8ig1Fmry5og0G_TGxX9pKKinIiFBC_D2gMRUyWyOzRbEi9s0B5kTIHECc9Pjf5LN8WKv7XkFnVFxPi-V_')"}}></div>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white">edit</span>
                    </div>
                  </div>
                  <button className="mt-3 text-sm font-semibold text-primary hover:text-primary/80" type="button">Change Photo</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Full Name</label>
                    <input className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Email Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark text-[20px]">mail</span>
                      <input className="w-full h-10 pl-10 pr-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark text-sm focus:outline-none cursor-not-allowed" type="email" readOnly defaultValue="john.doe@example.com" title="Email cannot be changed directly" />
                    </div>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">To change email, please contact support.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Phone Number</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark text-[20px]">call</span>
                      <input className="w-full h-10 pl-10 pr-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lock</span>
                  Security
                </h2>
                <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark mb-4">
                  <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark mb-1">Password Reset</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">Send a link to the user to reset their password.</p>
                  <button className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[18px]">send</span> Send Reset Link
                  </button>
                </div>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors select-none">
                    Manually Reset Password
                    <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="mt-3 space-y-3 pt-3 border-t border-border-light dark:border-border-dark">
                    <input className="w-full h-9 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="New Password" type="password" />
                    <input className="w-full h-9 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Confirm Password" type="password" />
                    <button className="w-full py-2 bg-gray-800 text-white text-xs font-bold rounded-lg hover:bg-gray-700 transition-colors" type="button">Update Password</button>
                  </div>
                </details>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                  Access & Permissions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">User Role</label>
                    <div className="relative">
                      <select className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer">
                        <option value="customer">Customer</option>
                        <option value="admin" selected>Administrator</option>
                        <option value="support">Support Agent</option>
                        <option value="manager">Store Manager</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark pointer-events-none text-[20px]">expand_more</span>
                    </div>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">Determines access level within the dashboard.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Account Status</label>
                    <div className="flex items-center gap-0 h-10">
                      <label className="inline-flex items-center cursor-pointer">
                        <input defaultChecked className="peer sr-only" name="status" type="radio" value="active" />
                        <div className="px-4 py-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-l-lg peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 transition-all text-sm font-medium">Active</div>
                      </label>
                      <label className="inline-flex items-center cursor-pointer -ml-px">
                        <input className="peer sr-only" name="status" type="radio" value="suspended" />
                        <div className="px-4 py-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark peer-checked:bg-amber-50 peer-checked:border-amber-500 peer-checked:text-amber-700 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 transition-all text-sm font-medium">Suspended</div>
                      </label>
                      <label className="inline-flex items-center cursor-pointer -ml-px">
                        <input className="peer sr-only" name="status" type="radio" value="banned" />
                        <div className="px-4 py-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-r-lg peer-checked:bg-red-50 peer-checked:border-red-500 peer-checked:text-red-700 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 transition-all text-sm font-medium">Banned</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden flex flex-col">
                <div className="p-6 pb-0 border-b border-border-light dark:border-border-dark">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">local_shipping</span>
                      Address Management
                    </h2>
                    <div className="flex items-center gap-2">
                      <input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" />
                      <label className="text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium select-none">Billing same as Shipping</label>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm" type="button">Shipping Address</button>
                    <button className="pb-3 border-b-2 border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-text-main-light dark:hover:text-text-main-dark font-medium text-sm transition-colors" type="button">Billing Address</button>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Street Address</label>
                    <input className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" defaultValue="123 Tech Boulevard, Suite 400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Country</label>
                    <div className="relative">
                      <select className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-text-secondary-light dark:text-text-secondary-dark pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">City</label>
                    <input className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" defaultValue="San Francisco" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">State / Province</label>
                    <input className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" defaultValue="California" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-1.5">Postal Code</label>
                    <input className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" defaultValue="94107" />
                  </div>
                </div>
              </div>

              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    Recommended Products
                  </h2>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">psychology</span> AI-Driven
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group border border-border-light dark:border-border-dark rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer bg-background-light dark:bg-background-dark">
                    <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-white mb-3 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-gray-200">laptop_mac</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-text-main-light dark:text-text-main-dark line-clamp-2 group-hover:text-primary transition-colors">MacBook Pro 16" - M3 Max Chip</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-main-light dark:text-text-main-dark">$3,499.00</span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                          4.9
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Viewed by similar customers</p>
                    </div>
                  </div>
                  <div className="group border border-border-light dark:border-border-dark rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer bg-background-light dark:bg-background-dark">
                    <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-white mb-3 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-gray-200">smartphone</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-text-main-light dark:text-text-main-dark line-clamp-2 group-hover:text-primary transition-colors">iPhone 15 Pro Max - 256GB</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-main-light dark:text-text-main-dark">$1,199.00</span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                          4.8
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Often bought together</p>
                    </div>
                  </div>
                  <div className="group border border-border-light dark:border-border-dark rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer bg-background-light dark:bg-background-dark">
                    <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-white mb-3 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-gray-200">headphones</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-text-main-light dark:text-text-main-dark line-clamp-2 group-hover:text-primary transition-colors">Sony WH-1000XM5 Headphones</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-text-main-light dark:text-text-main-dark">$348.00</span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                          4.7
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Related accessory</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark p-4 md:px-10 z-30 flex justify-end gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button className="px-6 h-10 rounded-lg border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-bold text-sm hover:bg-background-light dark:hover:bg-background-dark transition-colors" type="button">
              Cancel
            </button>
            <button className="px-6 h-10 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 shadow-md transition-colors flex items-center gap-2" type="submit">
              <span className="material-symbols-outlined text-[20px]">check</span>
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EditUserScreen
