'use client'

import { useState } from 'react'

interface Assignment {
  id: string
  title: string
  subtitle: string
  subject: string
  courseId: string
  dueDate: string
  status: 'submitted' | 'pending' | 'upcoming'
  icon: string
  iconBg: string
}

const ASSIGNMENTS_DATA: Assignment[] = [
  {
    id: '1',
    title: 'User Research Report',
    subtitle: 'Final Case Study submission',
    subject: 'UI/UX Design (DS-105)',
    courseId: 'ds-105',
    dueDate: 'Oct 24, 2023',
    status: 'submitted',
    icon: 'article',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: '2',
    title: 'Data Structures Lab 4',
    subtitle: 'Implementation of AVL Trees',
    subject: 'Data Structures (CS-301)',
    courseId: 'cs-301',
    dueDate: 'Oct 26, 2023',
    status: 'pending',
    icon: 'terminal',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '3',
    title: 'Software Architecture Essay',
    subtitle: 'Microservices vs Monolith patterns',
    subject: 'Software Engineering (SE-402)',
    courseId: 'se-402',
    dueDate: 'Oct 30, 2023',
    status: 'pending',
    icon: 'description',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '4',
    title: 'Algorithm Analysis',
    subtitle: 'Time complexity proof set',
    subject: 'Data Structures (CS-301)',
    courseId: 'cs-301',
    dueDate: 'Nov 02, 2023',
    status: 'pending',
    icon: 'analytics',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '5',
    title: 'Prototyping Basics',
    subtitle: 'High-fidelity Figma exercise',
    subject: 'UI/UX Design (DS-105)',
    courseId: 'ds-105',
    dueDate: 'Nov 05, 2023',
    status: 'upcoming',
    icon: 'draw',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: '6',
    title: 'Database Schema Design',
    subtitle: 'Normalized relations submission',
    subject: 'Database Systems (CS-305)',
    courseId: 'cs-305',
    dueDate: 'Nov 08, 2023',
    status: 'pending',
    icon: 'storage',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '7',
    title: 'Cloud Architecture Diagram',
    subtitle: 'Multi-tier AWS deployment',
    subject: 'Cloud Computing (IT-505)',
    courseId: 'it-505',
    dueDate: 'Nov 12, 2023',
    status: 'pending',
    icon: 'cloud',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '8',
    title: 'Operating Systems Report',
    subtitle: 'Process scheduling analysis',
    subject: 'Operating Systems (CS-401)',
    courseId: 'cs-401',
    dueDate: 'Nov 15, 2023',
    status: 'upcoming',
    icon: 'memory',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: '9',
    title: 'Agile Sprint Planning',
    subtitle: 'Project backlog refinement',
    subject: 'Software Engineering (SE-402)',
    courseId: 'se-402',
    dueDate: 'Nov 18, 2023',
    status: 'upcoming',
    icon: 'check_circle',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: '10',
    title: 'Design System Audit',
    subtitle: 'Component library review',
    subject: 'UI/UX Design (DS-105)',
    courseId: 'ds-105',
    dueDate: 'Nov 22, 2023',
    status: 'pending',
    icon: 'palette',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '11',
    title: 'Advanced SQL Queries',
    subtitle: 'Complex JOIN operations',
    subject: 'Database Systems (CS-305)',
    courseId: 'cs-305',
    dueDate: 'Nov 25, 2023',
    status: 'pending',
    icon: 'database',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '12',
    title: 'Kubernetes Deployment',
    subtitle: 'Container orchestration setup',
    subject: 'Cloud Computing (IT-505)',
    courseId: 'it-505',
    dueDate: 'Nov 28, 2023',
    status: 'upcoming',
    icon: 'deployed_code',
    iconBg: 'bg-blue-50 text-blue-600',
  },
]

const ITEMS_PER_PAGE = 5

export default function Assignments({ 
  onSelectCourse 
}: { 
  onSelectCourse?: (courseId: string) => void 
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [visibleAssignments, setVisibleAssignments] = useState<Set<string>>(
    new Set(ASSIGNMENTS_DATA.map(a => a.id))
  )

  const handleSubmit = (courseId: string) => {
    setOpenDropdown(null)
    onSelectCourse?.(courseId)
  }

  const handleIgnore = (assignmentId: string) => {
    const newVisible = new Set(visibleAssignments)
    newVisible.delete(assignmentId)
    setVisibleAssignments(newVisible)
    setOpenDropdown(null)
  }

  const filteredAssignments = ASSIGNMENTS_DATA.filter(a => visibleAssignments.has(a.id))
  const totalPages = Math.ceil(filteredAssignments.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedAssignments = filteredAssignments.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-emerald-50 text-emerald-600'
      case 'pending':
        return 'bg-orange-50 text-orange-600'
      case 'upcoming':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-slate-50 text-slate-600'
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-10 space-y-8 max-w-7xl mx-auto w-full flex-1">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-3">Assignments</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A consolidated view of all your assignments across all subjects. Manage your deadlines and track submission status in real-time.
          </p>
        </div>

        {/* Intro Cards - Current Priority & Average Score */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Current Priority Card */}
          <div className="lg:col-span-2 bg-primary-container p-8 rounded-3xl shadow-lg relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Current Priority</span>
                <h2 className="text-white text-3xl font-black mt-3 tracking-tight">Data Structures Lab 4</h2>
                <p className="text-white/90 mt-4 max-w-md text-base leading-relaxed">Estimated completion: 2 hours. Review Binary Search Tree implementation before submitting.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <button className="bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:scale-105 transition-transform duration-200">
                  Continue Working
                </button>
                <span className="text-white text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">alarm</span>
                  Due in 2 days
                </span>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Average Score Card */}
          <div className="bg-surface-container-highest p-8 rounded-3xl flex flex-col justify-center text-center shadow-sm">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <div className="text-4xl font-black text-primary">84%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Average Score</div>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">You&apos;re performing 12% better than the class average this semester.</p>
          </div>
        </div>

        {/* Assignment Catalog Table */}
        <div className="bg-surface-container-lowest rounded-3xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] overflow-hidden">
          <div className="px-8 py-6 border-b border-surface-container-low flex justify-between items-center bg-white/50 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-primary">Assignment Catalog</h3>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-secondary px-4 py-2 hover:bg-surface-container rounded-lg transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
              <button className="text-xs font-bold text-secondary px-4 py-2 hover:bg-surface-container rounded-lg transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">sort</span> Sort
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Assignment Title</th>
                  <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Subject</th>
                  <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Due Date</th>
                  <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-center">Status</th>
                  <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {paginatedAssignments.map((assignment) => (
                  <tr key={assignment.id} className="hover:bg-surface-container-low/40 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg ${assignment.iconBg} flex items-center justify-center`}>
                          <span className="material-symbols-outlined text-sm">{assignment.icon}</span>
                        </div>
                        <div>
                          <div className="font-bold text-on-surface text-sm">{assignment.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{assignment.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-medium text-secondary">{assignment.subject}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-sm font-medium ${assignment.status === 'pending' ? 'text-error' : 'text-on-surface-variant'}`}>
                        {assignment.dueDate}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${getStatusStyle(assignment.status)}`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="relative inline-block">
                        <button 
                          onClick={() => setOpenDropdown(openDropdown === assignment.id ? null : assignment.id)}
                          className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                        >
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {openDropdown === assignment.id && (
                          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-slate-100 z-50 overflow-hidden">
                            <button
                              onClick={() => handleSubmit(assignment.courseId)}
                              className="w-full text-left px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-colors flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-base">send</span>
                              Submit
                            </button>
                            <div className="border-t border-slate-100"></div>
                            <button
                              onClick={() => handleIgnore(assignment.id)}
                              className="w-full text-left px-4 py-3 text-sm font-medium text-error hover:bg-error/5 transition-colors flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-base">close</span>
                              Ignore
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 bg-surface-container-low flex items-center justify-between">
            <div className="text-xs font-semibold text-secondary">Showing {filteredAssignments.length === 0 ? 0 : startIndex + 1} of {filteredAssignments.length} assignments</div>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-surface-container text-slate-400 disabled:cursor-not-allowed hover:enabled:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-white border border-surface-container text-secondary hover:bg-surface-container-high'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-surface-container text-slate-400 disabled:cursor-not-allowed hover:enabled:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Help Card */}
        <div className="bg-white rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,45,132,0.04)] border-l-4 border-tertiary-container">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-primary mb-2">Need more time for an assignment?</h4>
              <p className="text-sm text-slate-600">Review the university extension policy or contact your course coordinator directly.</p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap hover:scale-95 transition-transform">
              View Extension Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto px-10 py-12 flex justify-between items-center text-xs uppercase tracking-widest text-slate-400 font-bold bg-surface-container-low">
        <p>© 2024 IQRA UNIVERSITY ISLAMABAD • OFFICE OF REGISTRAR</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Academic Regulations</a>
        </div>
      </footer>
    </div>
  )
}
