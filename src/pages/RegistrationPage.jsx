import { Link } from 'react-router-dom'

const RegistrationPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        <div className="flex w-full flex-col justify-between bg-white dark:bg-[#111a22] p-8 lg:w-1/2 lg:p-12 xl:p-16 relative z-10 shadow-xl lg:shadow-none">
          <header className="flex items-center gap-3">
            <Link to="/" className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">local_mall</span>
            </Link>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">TechStore</h2>
          </header>

          <div className="mx-auto flex w-full max-w-[480px] flex-col justify-center py-10 lg:py-0">
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Create your account
              </h1>
              <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                Join us to get exclusive access to the latest tech deals.
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Full Name</span>
                <input className="form-input h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-base text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="John Doe" type="text" />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Email Address</span>
                <input className="form-input h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-base text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="name@example.com" type="email" />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Password</span>
                <div className="relative flex items-center">
                  <input className="form-input h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 pr-12 text-base text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="Create a password" type="password" />
                  <button className="absolute right-4 flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" type="button">
                    <span className="material-symbols-outlined text-xl">visibility_off</span>
                  </button>
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Confirm Password</span>
                <div className="relative flex items-center">
                  <input className="form-input h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 pr-12 text-base text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="Confirm your password" type="password" />
                  <button className="absolute right-4 flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" type="button">
                    <span className="material-symbols-outlined text-xl">visibility_off</span>
                  </button>
                </div>
              </label>

              <div className="flex items-center gap-3 py-2">
                <input className="size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800" id="terms" type="checkbox" />
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="terms">
                  I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                </label>
              </div>

              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#111a22]">
                Create Account
              </button>
            </form>

            <div className="relative my-8 flex items-center py-2">
              <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="mx-4 shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">or continue with</span>
              <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:hover:bg-[#23303d]">
              Sign up with Google
            </button>
          </div>

          <footer className="mt-8 flex justify-center gap-1 text-sm font-medium">
            <span className="text-gray-500 dark:text-gray-400">Already have an account?</span>
            <Link className="font-bold text-primary hover:underline" to="/login">Log In</Link>
          </footer>
        </div>

        <div className="hidden lg:relative lg:block lg:w-1/2">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
          <img alt="Modern laptop and headphones on a sleek desk setup" className="absolute inset-0 size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjdHH4XbpNs-wLwHemvdFFNfuQB0Xdhhqx0ii5McPBKxL4KNAYCtxRbhiLCwZeHopRCgTwtWf4RkU3zmJL60v-2NjM6c58S1AtVPJkRSYbO-TzUHsw67JX582fFFicENJ14jh8za5fVI2jxU6MmbiNRJBq4RbeHRgAwxH37aPdSj7cw9opYPnwT1FbDrV2qMCruB7Omnsf1cIwVRZqcC3A8Rawp0X1MOVuAywmrtqghYNUnjBLWfloRXqGRDZbkkaUgDhSkwqaxIh" />
          <div className="absolute bottom-0 left-0 z-20 w-full p-12 text-white">
            <div className="mb-6 flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-1">star</span>
              ))}
            </div>
            <h3 className="mb-2 text-3xl font-bold leading-tight">
              "TechStore is my go-to for all things electronics. Best prices and fastest shipping!"
            </h3>
            <div className="flex items-center gap-3">
              <div className="size-10 overflow-hidden rounded-full bg-gray-300"></div>
              <div>
                <p className="font-bold">Alex Johnson</p>
                <p className="text-sm opacity-80">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
