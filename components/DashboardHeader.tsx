"use client"

import { useState } from "react"
import Image from "next/image"

interface DashboardHeaderProps {
  userName: string
  onLogout: () => void
}

export default function DashboardHeader({ userName, onLogout }: DashboardHeaderProps) {
  const [showProfileCard, setShowProfileCard] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center w-full px-8 py-6 shadow-[0px_4px_20px_rgba(0,45,132,0.04)] text-sm font-medium">
      <div className="flex items-center gap-8">
        <span className="text-lg font-black text-primary">IQRA University Islamabad</span>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-slate-600 hover:text-primary transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setShowProfileCard(!showProfileCard)}
          >
            <div className="text-right">
              <p className="font-bold text-on-surface text-base">{userName}</p>
            </div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5fPMNYCCP9H8rU6qnRFuA7KvljyNS81WHg9j7F9r07gO9rX9eL0r1wVDuRD_7LLF9D6oF1goJr2LIMC1kMHSgvotK7z_ZGjK4YvOz0nfJ3WGGS-DHYSc75yOnn2paXSV4KSd0je7FzDMZwBIftkW2ETON6A8gOYoQsoJFpPFHuuagPLihdT1GYXgVPTwFsWhXenPAoYYHbmtwkKN7UpQlvgZhB0JfdiAlxGF4zCzgi-hHb1LWtojBcMljbZcWNXUmU6HmChQWTMs"
              alt="User Profile Avatar"
              width={56}
              height={56}
              className="rounded-full object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all"
            />
          </div>

          {/* Profile Card Dropdown */}
          {showProfileCard && (
            <div 
              className="absolute right-0 top-full mt-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 w-72 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5fPMNYCCP9H8rU6qnRFuA7KvljyNS81WHg9j7F9r07gO9rX9eL0r1wVDuRD_7LLF9D6oF1goJr2LIMC1kMHSgvotK7z_ZGjK4YvOz0nfJ3WGGS-DHYSc75yOnn2paXSV4KSd0je7FzDMZwBIftkW2ETON6A8gOYoQsoJFpPFHuuagPLihdT1GYXgVPTwFsWhXenPAoYYHbmtwkKN7UpQlvgZhB0JfdiAlxGF4zCzgi-hHb1LWtojBcMljbZcWNXUmU6HmChQWTMs"
                  alt="User Profile Avatar"
                  width={48}
                  height={48}
                  className="rounded-xl object-cover"
                />
                <div>
                  <p className="font-bold text-on-surface">Raja Mahnoor Abbas</p>
                  <p className="text-xs text-slate-500">CS - Semester 7</p>
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-4">
                <div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider">EMAIL</span>
                  <p className="text-sm text-on-surface mt-1">mahnoor.r@iqra.edu.pk</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider">DEPARTMENT</span>
                  <p className="text-sm text-on-surface mt-1">Computer Science & AI</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 tracking-wider">DEGREE</span>
                  <p className="text-sm text-on-surface mt-1">Bachelor of Science (BS)</p>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="w-full mt-6 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-on-surface rounded-lg text-sm font-bold transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close card when clicking outside */}
      {showProfileCard && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfileCard(false)}
        ></div>
      )}
    </header>
  )
}
