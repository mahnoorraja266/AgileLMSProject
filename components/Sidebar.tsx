"use client"

import Image from "next/image"

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "courses", label: "My Courses", icon: "school" },
  { id: "assignments", label: "Assignments", icon: "assignment" },
  { id: "grades", label: "Grades", icon: "grade" },
  { id: "calendar", label: "Calendar", icon: "calendar_today" },
  { id: "messages", label: "Messages", icon: "chat" },
  { id: "resources", label: "Resources", icon: "library_books" },
  { id: "certifications", label: "Certifications", icon: "verified" },
  { id: "settings", label: "Settings", icon: "settings" },
]

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen sticky left-0 top-0 bg-slate-100/80 backdrop-blur-xl w-72 py-8 px-6 transition-all duration-300 tracking-tight antialiased">
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/images/Logo.png"
          alt="IQRA University Logo"
          width={192}
          height={48}
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-150 ${
              activeTab === item.id
                ? "bg-white/50 text-primary font-semibold"
                : "text-slate-500 hover:bg-white/50"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Help Center */}
      <div className="pt-8 border-t border-slate-200 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 font-medium hover:bg-white/50 transition-all duration-300">
          <span className="material-symbols-outlined">help</span>
          <span>Help Center</span>
        </button>
      </div>
    </aside>
  )
}
