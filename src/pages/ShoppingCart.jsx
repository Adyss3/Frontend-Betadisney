import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  const cartItems = [
    { id: 1, name: "MacBook Pro 14\"", desc: "Space Grey, 512GB SSD, M3 Pro Chip", price: 1999, qty: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm9BHdpnBOTaKYg-6mkOPPuciHc27taasELb2CNrvnKW58i6t4HNt2mZurjw-yRjd0QoiMQdWzywTYfBY2cSumCF94fKDqCtIcXd9-uqt3Ntkyd5X-7gnNMfAXmygXl1zuNcbBrNuqk4Z4a495typAc0lnDKHTugcvKfiellXjep3_JDyGImLX27NOaj5UAWgEaH_9EC_wkgFmJKGZWHzySgk5hXx3TAiOf67gzJXfUTzU_eqTit-PA32qhGK22k9qISj2odGhjaTb" },
    { id: 2, name: "iPhone 15 Pro Case", desc: "Midnight Blue, Silicone, MagSafe Compatible", price: 49, qty: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1a3WxAiq5KXrU0Uji7EuaAaFEq5IgF_UhNgORRTUEnOv4jTho5HYq7qXi3-qO7bBQunXI6uJB32VeOYSbiWVRa4a9x6Y_2ZmujQ_7LcJzcyz-sZCDT1QynPPOrVVfFkfd4l_BVzlUmnA3TnoYXdNoiTLuuVIK0sp-5NCtf3qmxXSA1uuNQPitcxG0B42zVWFYrWOHZOIEb45imMl-qQUBbvkqRRyYMCxAo04mEp94aHTGPE3pMtnzK5YF8HZLfgCd50YS1PGaBjgi" },
    { id: 3, name: "USB-C Hub", desc: "7-in-1 Adapter, 4K HDMI, 100W PD", price: 89, qty: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW5_wKoPKv1iK5UqVj4WI6i9LUPFiGX71f3KB_R6qjCx5HoVL7bqvK4h8Wa3DE0aemZ4Pdn361HwdHeUeFfZzWg7o1CE6VXjGyaBAVpMhC0bvijFbhTue6WE3QEAh5_i9ZBlbMpxTlD3v1fE6arEN1zSjSdBk511wAEeFqZxLUUkmeqr3dX98H3ChOoilZfzAb_HC-V_2REJjk-SrQ_A2uZ_nRDH0IAeTVfHcmOKNMX5g06Rt69_Lckf4GG0beoZTUAZ4WzqFsHc8Q" }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a3642] px-4 md:px-10 py-3 bg-white dark:bg-[#1a232e]">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">hexagon</span>
            </div>
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TechStore</h2>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-6 md:py-10 px-4 md:px-10">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-2">
            <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Your Shopping Cart ({cartItems.length} Items)</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 px-4">
            <div className="flex-1 flex flex-col gap-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-[#1a232e] p-4 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2a3642]">
                  <div className="shrink-0">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 sm:size-32" style={{backgroundImage: `url("${item.img}")`}}></div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{item.name}</h3>
                        <p className="text-[#617589] dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                      </div>
                      <p className="text-[#111418] dark:text-white text-lg font-bold">${item.price}.00</p>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <button className="text-[#617589] dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-sm font-medium flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                        Remove
                      </button>
                      <div className="flex items-center gap-1 bg-[#f0f2f4] dark:bg-[#2b3540] rounded-lg p-1">
                        <button className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-[#1a232e] text-[#111418] dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-[#344050] transition-colors font-bold">-</button>
                        <input className="w-10 p-0 text-center bg-transparent border-none text-[#111418] dark:text-white text-sm font-bold focus:ring-0" type="number" value={item.qty} readOnly />
                        <button className="size-8 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-blue-600 transition-colors font-bold">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-white dark:bg-[#1a232e] rounded-xl shadow-lg border border-[#f0f2f4] dark:border-[#2a3642] p-6 sticky top-4">
                <h2 className="text-[#111418] dark:text-white text-xl font-bold mb-6">Order Summary</h2>
                <div className="mb-6">
                  <label className="block text-[#617589] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input className="flex-1 bg-[#f0f2f4] dark:bg-[#2b3540] border-none rounded-lg text-sm px-4 py-2 text-[#111418] dark:text-white placeholder:text-[#617589] focus:ring-1 focus:ring-primary" placeholder="Enter code" />
                    <button className="bg-[#f0f2f4] dark:bg-[#2b3540] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-[#344050] font-bold text-sm px-4 py-2 rounded-lg transition-colors">Apply</button>
                  </div>
                </div>
                <div className="space-y-3 pb-6 border-b border-[#f0f2f4] dark:border-[#2a3642]">
                  <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span className="text-[#111418] dark:text-white font-medium">$2,137.00</span>
                  </div>
                  <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                    <span>Shipping estimate</span>
                    <span className="text-[#111418] dark:text-white font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                    <span>Tax estimate</span>
                    <span className="text-[#111418] dark:text-white font-medium">Calculated at checkout</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-6">
                  <span className="text-[#111418] dark:text-white text-lg font-bold">Order Total</span>
                  <span className="text-[#111418] dark:text-white text-2xl font-black">$2,137.00</span>
                </div>
                <Link to="/payment" className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]">
                  Proceed to Checkout
                </Link>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-2 text-[#617589] dark:text-gray-500 text-xs">
                    <span className="material-symbols-outlined text-base">lock</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex gap-4 opacity-60">
                    <div className="w-8 h-5 bg-[#1a1f71] rounded flex items-center justify-center" title="Visa">
                      <span className="text-[6px] font-bold text-white italic">VISA</span>
                    </div>
                    <div className="w-8 h-5 bg-[#eb001b] rounded flex items-center justify-center relative overflow-hidden" title="Mastercard">
                      <div className="absolute left-0 w-5 h-5 bg-[#eb001b] rounded-full opacity-80"></div>
                      <div className="absolute right-0 w-5 h-5 bg-[#f79e1b] rounded-full opacity-80"></div>
                    </div>
                    <div className="w-8 h-5 bg-[#003087] rounded flex items-center justify-center" title="PayPal">
                      <span className="text-[6px] font-bold text-white italic">Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#f0f2f4] dark:border-[#2a3642] px-4">
            <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-6">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{name: 'Wireless Headphones', price: 129.99, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczIYFAv0W6GPTk0Ey0Rr4EENjmTDbccB2jSzyLkaVDN5q1tiKww52SgbVNH1TjiB0BnmpCVozlYRtFx9pyFlttbdbI-i3k2Px7GejdxQ5KIDQQ2vRhS2Y5H3KzxWoqt8iJDOdb2OTczYfB42TWCvjmH7I839S1cbJzQlEF224eCttvEBKJPp2yjXy08SGYk33fC50fomleafJowJ6Ajbwurw4XRNNiIL81szMSAatdMwFVmIDk6Jfcyd8KpfFuMAuQ0JF0Ry0daPM'}, {name: '2m Lightning Cable', price: 19.99, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb9V2pH4-jdSX1FrnjquS5mxBwxjcA_LE-kBq5Fgm6AxVq-I2OoHylSs9C0c73paF2UR2fnWN5jwHH32-nip7rg65CUM0D4gVWGEga0vtw6BRowVhUAmB6OR4m2Prlvh7MCQ0-8XXbDWeWClu8C-SbgpP_N2w3YEXuMr51TFzvkvXloN8LmiFU4ivZEpUU11Az1Gw7NqIq8fMKk8Goe22go9VGWaAqPYeoXWUVmA3HAvw9dYdMoAbvKRQlnLa8H4RjuHEzFQ4YsFB3'}, {name: 'Screen Cleaning Kit', price: 14.99, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-mao5_n8XcVSoMGN-qYO4f3m4Lxttln2VOACm6nEYCwigfJgBYdEgAZSWLxByxoVF7Z6zs4kOiHPLyz0BmqaFAaW4xP2z9ke4IWLII1BNsm7YZ2mxf11gUKhWHuL_LlPNRIhvG3pZ4vS6bsMus4Di0-sHBL8DeCAE-RZ9bTcWvpTGfpfhERrEVyTyuOaW7LdPbIwpjzONJz2WeiI03SUZksOgkZHSBwHvXezoM1UiI9ebAVb23U0opYFERHaW5HOKSvCxAb4RhSOB'}].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-white dark:bg-[#1a232e] rounded-lg p-3 border border-[#f0f2f4] dark:border-[#2a3642] hover:shadow-md transition-shadow">
                    <div className="bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-md mb-3" style={{backgroundImage: `url("${item.img}")`}}></div>
                    <h4 className="text-[#111418] dark:text-white font-bold text-sm truncate">{item.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[#617589] dark:text-gray-400 text-sm">${item.price}</span>
                      <button className="text-primary text-xs font-bold uppercase tracking-wide">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ShoppingCart
