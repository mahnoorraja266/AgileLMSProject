"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import DashboardHeader from "./DashboardHeader"
import MyCourses from "./MyCourses"
import CourseDetail from "./CourseDetail"
import Assignments from "./Assignments"
import Grades from "./Grades"
import Calendar from "./Calendar"
import Messages from "./Messages"
import Resources from "./Resources"
import Certifications from "./Certifications"
import Settings from "./Settings"
import Image from "next/image"

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)

  return (
    <div className="bg-surface text-on-surface antialiased flex overflow-x-hidden min-h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab)
        setSelectedCourseId(null) // Clear selected course when changing tabs
      }} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen relative overflow-y-auto">
        {/* Top Navigation */}
        <DashboardHeader userName="Raja Mahnoor" onLogout={onLogout} />

        {/* Conditional Content Rendering */}
        {selectedCourseId ? (
          <CourseDetail 
            courseId={selectedCourseId} 
            onBack={() => setSelectedCourseId(null)} 
          />
        ) : activeTab === "assignments" ? (
          <Assignments onSelectCourse={(courseId) => setSelectedCourseId(courseId)} />
        ) : activeTab === "grades" ? (
          <Grades />
        ) : activeTab === "calendar" ? (
          <Calendar onSelectCourse={(courseId) => setSelectedCourseId(courseId)} />
        ) : activeTab === "messages" ? (
          <Messages onSelectCourse={(courseId) => setSelectedCourseId(courseId)} />
        ) : activeTab === "resources" ? (
          <Resources />
        ) : activeTab === "certifications" ? (
          <Certifications />
        ) : activeTab === "settings" ? (
          <Settings />
        ) : activeTab === "courses" ? (
          <MyCourses onCourseClick={(courseId) => setSelectedCourseId(courseId)} />
        ) : (
          /* Dashboard Canvas */
          <div className="p-10 space-y-12">
          {/* Section 1: Profile Overview Card */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Profile Card */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-10 rounded-2xl flex flex-col md:flex-row gap-10 items-start shadow-[0px_4px_20px_rgba(0,45,132,0.04)] relative overflow-hidden">
              {/* Decorative Logo */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                <Image
                  src="/images/Logo.png"
                  alt="University Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Profile Image with Rating */}
              <div className="relative shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBpK5BdFTl5lTIIDGm3_H5IF_LJrL0AiTWP8dqkkHiDeG8dBp9FHjnAbGq-oxqJ4gbupP-LX8bwFBlJ7zJVVjb9OfN3jrYNFcQboyJFW90l3kXDhgbpleOAmOFiXEvHVPA3Kq5-O8_SDXA1volZ4i_jJeS85gU4hPpC5T1eBDsJp-hSpW9TgM2Nb2SkvpXhMlVEkYCsxVv5qOQJFu67Cz-1hFXhovfLE6DvGuuewEaisAxmWHJfXOFn1pJJLftMeSOP_OAMox-TQQ"
                  alt="Student profile"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 signature-gradient text-white p-2 rounded-xl flex items-center gap-1 shadow-md">
                  <span className="text-sm font-bold">4.5</span>
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-primary leading-tight">Raja Mahnoor</h2>
                  <p className="text-lg text-secondary font-medium mt-1">Bachelors of Software Engineering</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Degree Progress</span>
                    <span className="text-sm font-black text-primary">95% Completed</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full horizon-progress rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                {/* Instructor Feedback */}
                <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm">format_quote</span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">Instructor Feedback</span>
                  </div>
                  <p className="text-sm text-on-surface leading-relaxed font-medium">
                    {'"Excellent performance in Data Structures. Keep up the consistent work in Algorithm Design."'}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Goal Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-primary text-white p-8 rounded-2xl signature-gradient relative overflow-hidden group">
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-9xl transition-transform group-hover:scale-110">military_tech</span>
                <div className="relative z-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80">Next Academic Goal</h3>
                  <p className="text-2xl font-bold leading-snug">Achieve Honors Listing for Semester 6</p>
                  <button className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                    View Requirements <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Performance Overview */}
          <section className="space-y-8">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-black tracking-tight text-primary">Performance Overview</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic Year 2023-24</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* GPA Card */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] flex flex-col justify-between h-48 border-b-4 border-primary">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">analytics</span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-tighter px-2 py-1 bg-primary/5 rounded">Top 5%</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Cumulative GPA</p>
                  <p className="text-5xl font-black tracking-tighter text-on-surface">3.85</p>
                </div>
              </div>

              {/* Semester Average Card */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-tertiary p-2 bg-tertiary/5 rounded-lg">stars</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Semester Average</p>
                  <p className="text-5xl font-black tracking-tighter text-on-surface">A</p>
                </div>
              </div>

              {/* Credits Card */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary p-2 bg-secondary/5 rounded-lg">history_edu</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Credits Earned</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-black tracking-tighter text-on-surface">84</p>
                    <p className="text-lg font-bold text-slate-400">/ 130</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 & 4: Achievements and Announcements */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Achievements & Certifications */}
            <section className="xl:col-span-8 space-y-8">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-black tracking-tight text-primary">Achievements & Certifications</h3>
                <a className="text-xs font-bold text-primary hover:underline underline-offset-4" href="#">Browse Repository</a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Badge 1 - Dean's List */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-primary-fixed transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-on-surface leading-tight">{"Dean's List"}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Fall 2023</p>
                  </div>
                </div>

                {/* Badge 2 - Python Certification */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-primary-fixed transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-on-surface leading-tight">Python Certification</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Verified</p>
                  </div>
                </div>

                {/* Badge 3 - UI/UX Workshop */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-primary-fixed transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-on-surface leading-tight">UI/UX Workshop</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">2024 Series</p>
                  </div>
                </div>

                {/* Badge 4 - Research Excellence */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-primary-fixed transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-on-surface leading-tight">Research Excellence</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">CS Dept</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Announcements */}
            <section className="xl:col-span-4 space-y-8">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-black tracking-tight text-primary">Announcements</h3>
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">campaign</span>
                </span>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] overflow-hidden">
                <div className="divide-y-0 space-y-0">
                  {/* Notice 1 - Academic */}
                  <div className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Academic</span>
                          <span className="text-[10px] text-slate-400 font-medium">2h ago</span>
                        </div>
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Mid-term schedule released</h4>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-1">View the full examination calendar for...</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-transparent py-2"></div>

                  {/* Notice 2 - Resource */}
                  <div className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-tertiary">Resource</span>
                          <span className="text-[10px] text-slate-400 font-medium">Today</span>
                        </div>
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">New library resources available</h4>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-1">Access 400+ new IEEE research...</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-transparent py-2"></div>

                  {/* Notice 3 - Event */}
                  <div className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Event</span>
                          <span className="text-[10px] text-slate-400 font-medium">Tomorrow</span>
                        </div>
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Guest lecture on AI tomorrow</h4>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-1">Dr. S. Khan will discuss the future of...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-high/30 text-center">
                  <button className="text-xs font-bold text-secondary hover:text-primary transition-colors">View All Notifications</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        )}
      </main>
    </div>
  )
}
