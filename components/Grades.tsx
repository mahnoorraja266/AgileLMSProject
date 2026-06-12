'use client'

import Image from 'next/image'

interface SemesterGrade {
  id: string
  subject: string
  code: string
  category: string
  score: number
  total: number
  grade: string
  icon: string
  iconBg: string
}

const SEMESTER_GRADES: SemesterGrade[] = [
  {
    id: '1',
    subject: 'Data Structures',
    code: 'CS-201',
    category: 'Major Core',
    score: 88,
    total: 100,
    grade: 'A',
    icon: 'data_object',
    iconBg: 'bg-primary-fixed text-primary',
  },
  {
    id: '2',
    subject: 'Software Engineering',
    code: 'SE-302',
    category: 'Core Specialization',
    score: 92,
    total: 100,
    grade: 'A+',
    icon: 'settings_suggest',
    iconBg: 'bg-secondary-fixed text-secondary',
  },
  {
    id: '3',
    subject: 'UI/UX Design',
    code: 'SE-205',
    category: 'Elective',
    score: 85,
    total: 100,
    grade: 'A',
    icon: 'palette',
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    id: '4',
    subject: 'Database Systems',
    code: 'CS-305',
    category: 'Major Core',
    score: 79,
    total: 100,
    grade: 'B+',
    icon: 'database',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    id: '5',
    subject: 'Operating Systems',
    code: 'CS-301',
    category: 'Major Core',
    score: 84,
    total: 100,
    grade: 'A-',
    icon: 'terminal',
    iconBg: 'bg-teal-100 text-teal-600',
  },
  {
    id: '6',
    subject: 'Cloud Computing',
    code: 'CS-408',
    category: 'Elective',
    score: 84,
    total: 100,
    grade: 'A-',
    icon: 'cloud',
    iconBg: 'bg-blue-100 text-blue-600',
  },
]

export default function Grades() {
  const cgpa = 3.82
  const totalMarksObtained = 512
  const totalMarks = 600

  const getGradeColor = (grade: string) => {
    if (grade === 'A' || grade === 'A+') return 'text-green-600 bg-green-50'
    if (grade === 'A-') return 'text-green-600 bg-green-50'
    if (grade === 'B+') return 'text-blue-600 bg-blue-50'
    if (grade === 'B') return 'text-blue-600 bg-blue-50'
    return 'text-slate-600 bg-slate-50'
  }

  return (
    <main className="flex-1 bg-surface">
      {/* Main Content */}
      <div className="p-10 space-y-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-6xl font-black text-on-surface tracking-tight leading-none mb-4">Academic Results Summary</h1>
            <p className="text-lg text-secondary font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              Semester Fall 2023 - Overall Performance
            </p>
          </div>
          <div className="bg-surface-container-low px-6 py-3 rounded-2xl">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Current Status</p>
            <div className="flex items-center gap-2 text-tertiary font-bold">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Completed - Passed
            </div>
          </div>
        </div>

        {/* Content Grid: Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left: Grades List (8 cols) */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Subject Performance</h3>

            {/* Subject Cards List */}
            <div className="space-y-4">
              {SEMESTER_GRADES.map((grade) => (
                <div
                  key={grade.id}
                  className="bg-surface-container-lowest p-6 rounded-3xl flex items-center justify-between group hover:shadow-[0px_4px_20px_rgba(0,45,132,0.08)] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl ${grade.iconBg} flex items-center justify-center`}>
                      <span className="material-symbols-outlined">{grade.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface">{grade.subject}</h4>
                      <p className="text-sm text-on-surface-variant">
                        {grade.code} • {grade.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-primary">
                      {grade.score}
                      <span className="text-sm font-medium text-slate-400 ml-1">/ {grade.total}</span>
                    </div>
                    <div className={`text-[10px] font-bold ${getGradeColor(grade.grade)} px-3 py-1 rounded-full inline-block mt-2`}>
                      GRADE {grade.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary & Stats (4 cols) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Overall GPA Card */}
            <div className="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[2.5rem] text-white shadow-[0px_4px_20px_rgba(0,45,132,0.16)] relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <span className="material-symbols-outlined text-[14rem] font-black">workspace_premium</span>
              </div>
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-90 mb-8">Current CGPA</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <h2 className="text-7xl font-black tracking-tighter">{cgpa}</h2>
                  <span className="text-2xl font-medium opacity-70">/ 4.0</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-tertiary-fixed transition-all duration-1000"
                    style={{ width: `${(cgpa / 4.0) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  Remarkable performance. You are in the top 5% of your batch. Keep up the scholastic excellence.
                </p>
              </div>
            </div>

            {/* Marks Detail Card */}
            <div className="bg-surface-container-low p-8 rounded-3xl space-y-8">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Semester Weightage</p>
                <div className="flex justify-between items-end">
                  <span className="text-on-surface font-medium">Total Marks Obtained</span>
                  <span className="text-2xl font-black text-primary">
                    {totalMarksObtained}
                    <span className="text-base font-medium text-slate-400 ml-1">/ {totalMarks}</span>
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/20">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Grade Distribution</p>
                <div className="flex gap-2 mb-8">
                  <div className="h-10 flex-1 bg-green-500 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md">
                    3A
                  </div>
                  <div className="h-10 flex-1 bg-green-400 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md">
                    2A-
                  </div>
                  <div className="h-10 flex-1 bg-blue-500 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md">
                    1B+
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200">
                  Download Transcript PDF
                </button>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl flex items-center gap-4 shadow-[0px_4px_20px_rgba(0,45,132,0.04)]">
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
              </div>
              <div>
                <h5 className="font-bold text-on-surface">Dean's List Candidate</h5>
                <p className="text-xs text-slate-500 leading-tight">Eligible for the academic honor roll this semester.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 px-10 py-12 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400 font-bold border-t border-surface-container-high">
        <p>© 2023 IQRA University Islamabad • Office of the Registrar</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            Grade Appeal
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            GPA Calculator
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Transcript Policy
          </a>
        </div>
      </footer>
    </main>
  )
}
