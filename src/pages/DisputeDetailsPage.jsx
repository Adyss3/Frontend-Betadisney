import { Link } from 'react-router-dom'

const DisputeDetailsPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-display min-h-screen flex flex-col overflow-x-hidden">
      <header className="w-full bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Link className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" to="/admin">Dashboard</Link>
            <span className="material-symbols-outlined text-[16px] text-text-secondary-light dark:text-text-secondary-dark">chevron_right</span>
            <Link className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" to="/dispute-management">Disputes</Link>
            <span className="material-symbols-outlined text-[16px] text-text-secondary-light dark:text-text-secondary-dark">chevron_right</span>
            <span className="text-text-main-light dark:text-text-main-dark font-medium">DSP-8902</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-text-main-light dark:text-text-main-dark">
                  Dispute #DSP-8902
                </h1>
                <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-bold text-yellow-800 dark:text-yellow-500">
                  Action Required
                </span>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium">
                Reason: Broken Screen on Arrival
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main-light dark:text-text-main-dark text-sm font-bold transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
                <span className="truncate">Decline</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">credit_card</span>
                <span className="truncate">Offer Store Credit</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">undo</span>
                <span className="truncate">Issue Refund</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
                    <span className="material-symbols-outlined">report_problem</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">Original Claim</h2>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Filed on Oct 12, 10:00 AM</p>
                  </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-lg p-4 mb-6">
                  <p className="text-text-main-light dark:text-text-main-dark leading-relaxed">
                    "The package arrived damaged. The outer box looked fine, but when I opened it, the screen of the iPhone was completely cracked. I haven't even turned it on yet. Please see the attached photos."
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mb-3">Evidence Attached</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-border-light dark:border-border-dark w-32 h-32 bg-background-light dark:bg-background-dark">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByVMUUvoG3OixnGEfHsDcXxbUeSbJ2jsAa9DFcMycfreXhzqE6wcJqteEH52o6LYbxuJrVre_d3wXHSN1CQp2IQDghgRWQXxBInINGEzuGgyAI79kihUe6cYVrw9qtD5yY-IuFAszSniToXb2b_yHlVZfma6psvUnZX5cUi9B1oCnmzxwqEUsOTro2yIbMvRk3FIgI5k75Oq_L10QlN-3Ijx8NpOSf3k-4fP0xsbF920t9MRFL2-68Hmq4SZ71zT0yIuWt3QFIVKmz')"}}></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">visibility</span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-border-light dark:border-border-dark w-32 h-32 bg-background-light dark:bg-background-dark">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjr_r_oKhntXT8uWhzfi0OnmfVBwLpxOfJPmqLvL6wTl3AsPWfGIGBhCwLKWnUhUWwql45iUK1LTYqapINMxrdF5-aDvMmCgpTjWKcRhnqw72gB1xR824bUqN0-XD2UV9qSKscH7dYBE6bp0foIRc2qXoOXnOEZ66GlLrT5A2DacoLA9NFaxmVA2Luekt1UqzyyvquxMwYYVezRcGGF2vI6R4JQNFCvjF65_R2ESiROhXMbA5HHBFB5HpIK1dy8IuppDFD886CEYrw')"}}></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity">visibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden h-[600px]">
              <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light dark:bg-background-dark">
                <h2 className="text-base font-bold text-text-main-light dark:text-text-main-dark flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">forum</span>
                  Communication Log
                </h2>
                <button className="text-xs font-medium text-primary hover:text-blue-600">View Full History</button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-[#151f28]">
                <div className="flex justify-center">
                  <span className="px-3 py-1 bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark text-xs rounded-full font-medium">
                    Dispute Created — Oct 12, 10:00 AM
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Admin (You) • Oct 12, 11:30 AM</span>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">A</div>
                  </div>
                  <div className="max-w-[80%] p-4 bg-primary text-white rounded-2xl rounded-tr-sm">
                    <p className="text-sm">Hello, sorry to hear about the damage. Could you please provide photos of the outer shipping box as well? We need to verify if the damage occurred during transit.</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">JD</div>
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">John Doe • Oct 12, 02:15 PM</span>
                  </div>
                  <div className="max-w-[80%] p-4 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark rounded-2xl rounded-tl-sm border border-border-light dark:border-border-dark">
                    <p className="text-sm mb-3">Here is the picture of the box. It looks squashed on one corner.</p>
                    <div className="rounded-lg overflow-hidden w-40 h-28 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2CNW4WsLb-VO7Y8NIRpEvDq3NVp-tiItBCkQhm0pI7Ivr6iOZcDKV6csLQ50ZdlfXpzyIpRyQ243ixVHET5rRoox3RNoXVQwfdssMBZbSqblfpMxmEWkCvNn7lmmVtBMXctu1CmaqCTT2GN0On8UAT_qWccoh3GsAu0KUMy7Svqhtm7wal3w0mlKf_5_VDxB1Ej-Qs6zkIgvGfEwfuA2CFxrd8stoUCALDox0BJjKUYUBr7d4L0ysnymrruASKdjEOV747junlEuI')"}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-yellow-600 dark:text-yellow-500 font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] fill-1">lock</span> Internal Note
                    </span>
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">• Oct 12, 02:45 PM</span>
                  </div>
                  <div className="max-w-[80%] p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 text-text-main-light dark:text-text-main-dark rounded-2xl rounded-tr-sm">
                    <p className="text-sm">The damage seems consistent with the claim. Shipping insurance should cover this. I recommend approving the refund once we confirm the serial number.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4 mb-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
                      <input className="peer sr-only" type="checkbox" />
                      <span className="inline-block h-3 w-3 transform rounded-full bg-white transition translate-x-1 peer-checked:translate-x-5 peer-checked:bg-yellow-600"></span>
                    </div>
                    <span className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark">Internal Note</span>
                  </label>
                  <button className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    Canned Responses
                  </button>
                </div>
                <div className="relative">
                  <textarea className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg p-3 pr-12 text-sm text-text-main-light dark:text-text-main-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none h-24" placeholder="Type your reply here..."></textarea>
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-main-light dark:hover:text-text-main-dark p-1">
                      <span className="material-symbols-outlined text-[20px]">attach_file</span>
                    </button>
                    <button className="bg-primary hover:bg-blue-600 text-white rounded-md p-1.5 shadow-sm transition-colors">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mb-2">
                Dispute Status
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark rounded-lg pl-4 pr-10 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="awaiting_response">Awaiting Customer Response</option>
                  <option value="under_review" selected>Under Review</option>
                  <option value="proposed">Resolution Proposed</option>
                  <option value="closed">Closed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex justify-between text-sm">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">Assigned to</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[8px] font-bold">A</div>
                  <span className="font-medium text-text-main-light dark:text-text-main-dark">Admin (You)</span>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-text-main-light dark:text-text-main-dark">Customer Profile</h3>
                <button className="text-primary hover:bg-primary/10 rounded p-1">
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
                  JD
                </div>
                <div>
                  <p className="text-base font-bold text-text-main-light dark:text-text-main-dark leading-tight">John Doe</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">john.doe@example.com</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg text-center">
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">Lifetime Value</p>
                  <p className="text-sm font-black text-text-main-light dark:text-text-main-dark">$2,450</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg text-center">
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">Segment</p>
                  <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 text-xs font-bold text-purple-700 dark:text-purple-400">
                    VIP
                  </span>
                </div>
              </div>
              <div className="border-t border-border-light dark:border-border-dark pt-3">
                <p className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark mb-2">Previous Disputes</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
                  <span className="text-text-main-light dark:text-text-main-dark">DSP-1022 (Closed - Resolved)</span>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-text-main-light dark:text-text-main-dark">Order Summary</h3>
                <Link className="text-xs font-medium text-primary hover:underline" to="#">#ORD-2245</Link>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="h-16 w-16 bg-background-light dark:bg-background-dark rounded-lg bg-cover bg-center shrink-0 border border-border-light dark:border-border-dark" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu5cobNecV5kcz8aHAmiIVPONtE2Eov0cR1Lcnh2sK2U8AKnScJD0WiweySQkjc6u0yBbclehMCsCqSWNzVgWluYISXWmc8r-51cf0r775xG_jSTCtz6m-g0UI7c5gSFIXCMKWomGHSyXTnu_gb6_y6TndE-Lyy8jHyE72hAy8bRK0I7SzFy5Ac-i7I4L8kuKqmy26E0-UuIraaDPhlkexf8iFNB0rulUbdK7_HQtMiA7ST2iPXZ9ynKOMQQ7bZw5iUgfBOC3D2YWf')"}}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-bold text-text-main-light dark:text-text-main-dark line-clamp-1">iPhone 14 Pro Max</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">Space Black | 256GB</p>
                  <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark">$1,199.00</p>
                </div>
              </div>
              <div className="space-y-2 text-sm border-t border-border-light dark:border-border-dark pt-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Purchased</span>
                  <span className="text-text-main-light dark:text-text-main-dark font-medium">Oct 05, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Shipped</span>
                  <span className="text-text-main-light dark:text-text-main-dark font-medium">Oct 07, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Status</span>
                  <span className="text-green-600 dark:text-green-400 font-bold text-xs bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">DELIVERED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DisputeDetailsPage
