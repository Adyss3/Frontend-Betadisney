import { Link } from 'react-router-dom'

const EditProductScreen = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-200">
      <header className="sticky top-0 z-30 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4 text-text-main-light dark:text-text-main-dark">
          <div className="size-8 text-primary flex items-center justify-center rounded-lg bg-primary/10">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">Admin Dashboard</h2>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-border-light dark:ring-border-dark overflow-hidden">
              <div className="text-text-secondary-light dark:text-text-secondary-dark flex border-none bg-background-light dark:bg-background-dark items-center justify-center pl-3">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-main-light dark:text-text-main-dark focus:outline-0 bg-background-light dark:bg-background-dark h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-3 text-sm font-normal leading-normal border-none focus:ring-0" placeholder="Search..." />
            </div>
          </label>
          <button className="flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white dark:ring-gray-800 shadow-sm cursor-pointer" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtDJ5lUMnSl7NPAPyYqLGA2Q1DkZ8gampSuHeGmhTUtt50yQf0LiACtgh5CvqE7pYDL4uZ_P05qOGgJQmw5PkzpRJ9GlWCVll0LOtJ0UyM0e0w0tEWfRt6bAh097HKFj-DToHDRKYVbOe0fasIPZtTUCNvcFPJ6zOAjXyOGGELhzv8IgJ5g6f8lVJ0Le1KoXEU4zRg4w3NZTgpbEF6RwZURQ57JmCpTSpnmR11EKpNP5NgpQ2KNrHbFKgfWmW1txJuEBL8EQ5k1CQd')"}}></div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-4 md:px-8 py-6 md:py-8 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            <Link className="hover:text-primary transition-colors" to="/admin">Dashboard</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/product-management">Products</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-text-main-light dark:text-text-main-dark font-medium">Add New</span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-text-main-light dark:text-text-main-dark text-3xl font-extrabold tracking-tight">Add New Product</h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">Fill in the details below to add a new item to the catalog.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-main-light dark:text-text-main-dark font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Cancel</button>
              <button className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">save</span>
                Save Product
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                <h3 className="text-text-main-light dark:text-text-main-dark font-bold text-lg">General Information</h3>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Product Name</span>
                  <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark transition-all" placeholder="e.g. Wireless Noise-Cancelling Headphones" />
                </label>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Description</span>
                  <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                    <div className="flex items-center gap-1 p-2 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#15202b]">
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Bold">
                        <span className="material-symbols-outlined text-lg">format_bold</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Italic">
                        <span className="material-symbols-outlined text-lg">format_italic</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Underline">
                        <span className="material-symbols-outlined text-lg">format_underlined</span>
                      </button>
                      <div className="w-px h-4 bg-border-light dark:bg-border-dark mx-1"></div>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Bullet List">
                        <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary-light dark:text-text-secondary-dark transition-colors" title="Numbered List">
                        <span className="material-symbols-outlined text-lg">format_list_numbered</span>
                      </button>
                    </div>
                    <textarea className="w-full bg-transparent text-text-main-light dark:text-text-main-dark border-none focus:ring-0 min-h-36 p-4 text-base placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark resize-y" placeholder="Enter detailed product description..."></textarea>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                <h3 className="text-text-main-light dark:text-text-main-dark font-bold text-lg">Product Media</h3>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <div className="border-2 border-dashed border-primary/40 hover:border-primary bg-primary/5 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                  </div>
                  <p className="text-text-main-light dark:text-text-main-dark font-medium text-lg">Click to upload or drag and drop</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="relative group aspect-square rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                    <img alt="Headphones product shot front view" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZxJ3y3onFtV_xcM46S0DWxQnua0w72QfMulIDnr57EwfdOsgJwsViO4RyzknugPWsd2cT-wQ-DwmazQhPUzk5U4vkjIXMEFI_8_ASuodYKyzuVD4YqqqmMy6uI5diEJiWRBNYZ3pNh8vBXcjpYbkOob8A-9V0dWKQE8C7ozk96ipKDhLSuotbyeL2tG1MPZ4BfmXT_GNFoY7RldarRzuxFuLvfYZ8xbm4lMwTafwxIXpIXAovmjeocPVkh1P5BWDzfv3PxO_w3uDS" />
                    <button className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2 text-center backdrop-blur-sm">Main Image</div>
                  </div>
                  <div className="relative group aspect-square rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                    <img alt="Headphones product shot side view" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBumZg0iHfkyMgxGDuIFD0UdHic5As7GTCy0Sbc1f1wfhBw-rBOQC-kRWzxireh3D2p7YsmmamWCWz9N4sRAl7ueRLh_hizmmCEGhL9nFK7s6DKmW1F9R6M6w42z73ZTS0L7C1YC2AFkogJJSpjqhW6z89Fg6OBfxia7zTKBoR5zXrW4YmBRcqQJ8gRkyBIt6XkRK4NcuTCph-FBvGHoGUFShx4Kre-eZMJRfKrDDbKzeNgQpMm2IK6oeYaP2VdUOJPJnhGZszcut95" />
                    <button className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  </div>
                  <div className="relative group aspect-square rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                    <img alt="Headphones lifestyle shot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8rR43KiiiREyPVe1ZH5bjcDFtU9IKpmdt98zS-qn_OmkaezRrc8-nnv9JYQc6Z4jY9E8NptdfXF95RS7l0rxdMpsRaRUxq3ZlY1VRGXNRKSIIqM6VesOWm-nhyeacGSRCW_phllgLKWeDXrARf012ID_qohTcIkU40X4wSgObyx2aaE6OESgfKHzoV5TgxOElOgq3E4XgnfF6GQRi-LxZ5ks87AImd9zGp9eseNuUB7OEs7m6pkmZ4lX0kbIBC2kwIzn-DdsiZn6P" />
                    <button className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white">
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                <h3 className="text-text-main-light dark:text-text-main-dark font-bold text-lg">Pricing & Inventory</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Base Price</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">$</span>
                    </div>
                    <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 pl-8 pr-4 text-base transition-all" placeholder="0.00" type="number" defaultValue="299.99" />
                  </div>
                </label>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Discount Price</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">$</span>
                    </div>
                    <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 pl-8 pr-4 text-base transition-all" placeholder="0.00" type="number" />
                  </div>
                </label>
                <div className="col-span-1 md:col-span-2 h-px bg-border-light dark:bg-border-dark my-2"></div>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">SKU</span>
                  <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base transition-all" placeholder="e.g. WH-1000XM4" />
                </label>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Quantity in Stock</span>
                  <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base transition-all" placeholder="0" type="number" defaultValue="45" />
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="px-6 py-4 border-b border-border-light dark:border-border-dark">
                <h3 className="text-text-main-light dark:text-text-main-dark font-bold text-lg">Status</h3>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-text-main-light dark:text-text-main-dark font-medium">Product Status</span>
                  <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Active
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">Published</span>
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Visible to all users</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Publish Date</span>
                  <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base text-text-secondary-light dark:text-text-secondary-dark transition-all" type="date" />
                </label>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
              <div className="px-6 py-4 border-b border-border-light dark:border-border-dark">
                <h3 className="text-text-main-light dark:text-text-main-dark font-bold text-lg">Organization</h3>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Category</span>
                  <div className="relative">
                    <select className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base appearance-none transition-all cursor-pointer">
                      <option disabled value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="home">Home & Garden</option>
                      <option value="toys">Toys</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </label>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Brand / Vendor</span>
                  <div className="relative">
                    <select className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base appearance-none transition-all cursor-pointer">
                      <option disabled value="">Select Brand</option>
                      <option value="apple">Apple</option>
                      <option value="samsung">Samsung</option>
                      <option value="sony">Sony</option>
                      <option value="nike">Nike</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </label>
                <label className="flex flex-col w-full gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Tags</span>
                  <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary/20 focus:border-primary h-11 px-4 text-base placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark transition-all" placeholder="Enter tags separated by comma" />
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                      New Arrival <button className="hover:text-red-500"><span className="material-symbols-outlined text-[10px]">close</span></button>
                    </span>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                      Featured <button className="hover:text-red-500"><span className="material-symbols-outlined text-[10px]">close</span></button>
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden sticky bottom-0 left-0 right-0 p-4 bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <button className="flex-1 py-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-main-light dark:text-text-main-dark font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Cancel</button>
          <button className="flex-1 py-3 rounded-lg bg-primary text-white font-medium shadow-md">Save Product</button>
        </div>
      </div>
    </div>
  )
}

export default EditProductScreen
