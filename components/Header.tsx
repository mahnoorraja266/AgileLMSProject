"use client"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_4px_20px_rgba(0,45,132,0.04)]">
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <div className="h-12">
          <img
            alt="IQRA University Logo"
            className="h-full object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0uijnevx8JScq51ns1lJuh7tkmjND1VvanXmazX6Z-lP9aJErxLpdc9OhgCqJNXviWAJjxCZ-bBz1telS2lKQPmBTTAPsfstd7o7h-GHIEeEBq_GUoPoD1hYSqF7UHyenx7g6O6rpSe_gz421cVW86-HWXTxB-tLTTcdmmdLwOGYyRZnks_xQ_yTsG-r8ltMiQwcsBjjMyHSmX2uC9kQot0VqE9sEJH8nL9F8FfItSKo4hoQme5b5xLLSxrb2LPVxOAVXmyhJSLv"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}
