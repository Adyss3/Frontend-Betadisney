import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A2633] px-6 lg:px-10 py-3 z-20">
          <div className="flex items-center gap-4 text-[#111418] dark:text-white">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">devices</span>
            </div>
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TechStore</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 lg:gap-8 items-center">
            <div className="hidden md:flex items-center gap-9">
              <Link className="text-[#111418] dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/">Home</Link>
              <a className="text-[#111418] dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Shop</a>
              <Link className="text-[#111418] dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/support">Contact</Link>
            </div>
            <Link className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-bold leading-normal tracking-[0.015em]" to="/register">
              <span className="truncate">Sign Up</span>
            </Link>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-[1200px] h-auto lg:h-[800px] bg-white dark:bg-[#1A2633] rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-200 dark:border-slate-800">
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
              <div className="w-full max-w-[480px] mx-auto">
                <div className="mb-8">
                  <h1 className="text-[#111418] dark:text-white tracking-light text-3xl lg:text-4xl font-black leading-tight mb-3">
                    Welcome Back
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                    Log in to access your orders, wishlists, and exclusive tech deals.
                  </p>
                </div>

                <form className="flex flex-col gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-[#111418] dark:text-slate-200 text-sm font-medium leading-normal">Email Address</span>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 h-12 placeholder:text-slate-400 p-4 text-base font-normal leading-normal transition-all" placeholder="Enter your email" type="email" />
                  </label>

                  <label className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#111418] dark:text-slate-200 text-sm font-medium leading-normal">Password</span>
                    </div>
                    <div className="relative flex w-full items-center">
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white dark:bg-slate-800 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 h-12 placeholder:text-slate-400 p-4 pr-12 text-base font-normal leading-normal transition-all" placeholder="Enter your password" type="password" />
                      <button className="absolute right-0 h-full px-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 flex items-center justify-center" type="button">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </label>

                  <div className="flex justify-end">
                    <a className="text-primary hover:text-primary/80 text-sm font-medium leading-normal underline decoration-transparent hover:decoration-primary transition-all" href="#">Forgot Password?</a>
                  </div>

                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md transition-colors mt-2">
                    <span className="truncate">Log In</span>
                  </button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white dark:bg-[#1A2633] px-2 text-sm text-slate-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-transparent text-[#111418] dark:text-white text-sm font-medium">
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-transparent text-[#111418] dark:text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-[22px]">ios</span>
                    Apple
                  </button>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Don't have an account? 
                    <Link className="text-primary font-bold hover:underline" to="/register"> Sign up</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-1/2 relative bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIyXyU2IkyXAuQOuJXok_xcTdavLUQf72RL1JVMOQCl25rCPlRNZeHidwvN7ge5niOnIruqOm-x_4m3Zu3ceYrMkA8wP6SPiYxbFbwKmCq61_-rSRLWoB5hT7w6Y_3STEDeId0EQa3yaPmQDoGhBicpn2ZRFXeuiNt7jAniCgun3FxyDb8GEw_tNX6HdVr-ON4ebjIMIcYeVz34SBBjUT6wttaPGUOiBOYJxuUNVd0y0FPwHQSuGq2h3VBPAG8zectk3J9JmxNM6Z7')"}}></div>
              <div className="absolute bottom-0 left-0 p-12 z-20 w-full text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Secure Access</span>
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-2">The Latest Tech at Your Fingertips</h3>
                <p className="text-white/80 text-lg">Join thousands of tech enthusiasts getting the best deals on premium electronics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
