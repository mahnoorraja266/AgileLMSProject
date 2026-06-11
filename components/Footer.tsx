"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 w-full pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
        {/* Column 1: About */}
        <div className="space-y-6">
          <div className="h-10">
            <img
              alt="IQRA University Logo"
              className="h-full object-contain brightness-0 invert opacity-90"
              src="https://lh3.googleusercontent.com/aida/ADBb0uijnevx8JScq51ns1lJuh7tkmjND1VvanXmazX6Z-lP9aJErxLpdc9OhgCqJNXviWAJjxCZ-bBz1telS2lKQPmBTTAPsfstd7o7h-GHIEeEBq_GUoPoD1hYSqF7UHyenx7g6O6rpSe_gz421cVW86-HWXTxB-tLTTcdmmdLwOGYyRZnks_xQ_yTsG-r8ltMiQwcsBjjMyHSmX2uC9kQot0VqE9sEJH8nL9F8FfItSKo4hoQme5b5xLLSxrb2LPVxOAVXmyhJSLv"
            />
          </div>
          <p className="leading-relaxed text-sm">
            IQRA University is a premier educational institution dedicated to intellectual clarity and academic excellence through curated learning experiences.
          </p>
          <div className="pt-4">
            <p className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">Heritage</p>
            <p className="text-xs">Established 1998 • Committed to Innovation</p>
          </div>
        </div>

        {/* Column 2: Info Links */}
        <div className="space-y-6">
          <h3 className="text-white font-bold tracking-tight text-lg">Info Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-white transition-all underline-offset-4 hover:underline" href="#">
                Academic Calendar
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all underline-offset-4 hover:underline" href="#">
                LMS Guide
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all underline-offset-4 hover:underline" href="#">
                Student Portal
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-all underline-offset-4 hover:underline" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-6">
          <h3 className="text-white font-bold tracking-tight text-lg">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-blue-400 text-sm">location_on</span>
              <span>
                Main Campus
                <br />
                Defence View, Shaheed-e-Millat Road (Ext.), Karachi
              </span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-blue-400 text-sm">call</span>
              <span>+92 (21) 111-264-478</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-blue-400 text-sm">mail</span>
              <span>info@iqra.edu.pk</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-6">
          <h3 className="text-white font-bold tracking-tight text-lg">Social Media</h3>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-900 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-white">social_leaderboard</span>
            </a>
            <a
              className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-900 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-white">camera</span>
            </a>
            <a
              className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-900 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-white">brand_family</span>
            </a>
            <a
              className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-900 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-white">play_circle</span>
            </a>
          </div>
          <div className="pt-4">
            <p className="text-xs text-slate-500">Stay connected with our global alumni community.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-900 text-xs text-slate-600 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 IQRA University. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-slate-400" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-slate-400" href="#">
            Terms of Service
          </a>
          <a className="hover:text-slate-400" href="#">
            Help Center
          </a>
          <a className="hover:text-slate-400" href="#">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  )
}
