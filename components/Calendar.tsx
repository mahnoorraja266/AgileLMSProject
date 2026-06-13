'use client'

import { useState, useMemo } from 'react'

interface CalendarEvent {
  id: string
  date: number
  title: string
  courseId: string
  type: 'assignment' | 'quiz' | 'project' | 'lab' | 'lecture'
  color: 'primary' | 'tertiary' | 'error' | 'secondary'
}

interface UpcomingEvent {
  id: string
  title: string
  date: string
  courseCode: string
  instructor: string
  priority: 'HIGH' | 'MAJOR' | 'WORKSHOP' | 'LECTURE'
  color: 'error' | 'primary' | 'tertiary' | 'secondary'
}

const EVENTS_DATA: CalendarEvent[] = [
  { id: '1', date: 2, title: 'Draft Paper', courseId: 'se-402', type: 'assignment', color: 'primary' },
  { id: '2', date: 5, title: 'Weekend Lab', courseId: 'cs-301', type: 'lab', color: 'tertiary' },
  { id: '3', date: 9, title: 'Final Quiz', courseId: 'ds-105', type: 'quiz', color: 'error' },
  { id: '4', date: 9, title: 'Study Group', courseId: 'cs-305', type: 'project', color: 'secondary' },
  { id: '5', date: 11, title: 'Project Alpha Due', courseId: 'se-402', type: 'project', color: 'primary' },
  { id: '6', date: 18, title: 'Ethics Essay', courseId: 'it-505', type: 'assignment', color: 'primary' },
  { id: '7', date: 23, title: 'Guest Lecture', courseId: 'cs-401', type: 'lecture', color: 'tertiary' },
]

const UPCOMING_EVENTS: UpcomingEvent[] = [
  { id: '1', title: 'Biology Mid-term Quiz: Molecular Genetics', date: 'Oct 09', courseCode: 'BIO 202 • Dr. Hammond', instructor: 'Dr. Hammond', priority: 'HIGH', color: 'error' },
  { id: '2', title: 'Alpha Research Paper Submission', date: 'Oct 11', courseCode: 'ENG 101 • Section B', instructor: 'Prof. Smith', priority: 'MAJOR', color: 'primary' },
  { id: '3', title: 'Modern Ethics Guest Lecture Series', date: 'Oct 23', courseCode: 'Auditorium C • 2PM', instructor: 'Special Event', priority: 'WORKSHOP', color: 'tertiary' },
]

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export default function Calendar({ 
  onSelectCourse 
}: { 
  onSelectCourse?: (courseId: string) => void 
}) {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 11)) // October 11, 2024
  const [selectedDate, setSelectedDate] = useState(11)

  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const calendarDays: (number | null)[] = []
  const current = new Date(startDate)
  while (current <= lastDay || current.getDay() !== 0) {
    if (current.getMonth() === currentDate.getMonth()) {
      calendarDays.push(current.getDate())
    } else {
      calendarDays.push(null)
    }
    current.setDate(current.getDate() + 1)
  }

  const selectedDateEvents = useMemo(() => {
    return EVENTS_DATA.filter(event => event.date === selectedDate)
  }, [selectedDate])

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleToday = () => {
    const today = new Date()
    setCurrentDate(new Date(today.getFullYear(), today.getMonth()))
    setSelectedDate(today.getDate())
  }

  const handleEventClick = (courseId: string) => {
    onSelectCourse?.(courseId)
  }

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary' },
      tertiary: { bg: 'bg-tertiary/10', text: 'text-tertiary', border: 'border-tertiary' },
      error: { bg: 'bg-error/10', text: 'text-error', border: 'border-error' },
      secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary' },
    }
    return colors[color] || colors.primary
  }

  return (
    <div className="flex h-full gap-8 p-8 bg-surface overflow-hidden">
      {/* Main Calendar */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-on-surface">{monthYear}</h1>
            <p className="text-on-surface-variant mt-1">12 assignments pending this month</p>
          </div>
          <div className="flex gap-2 p-1 bg-surface-container-low rounded-xl">
            <button 
              onClick={handlePrevMonth}
              className="p-2 hover:bg-surface-container-lowest rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleToday}
              className="px-4 py-2 text-sm font-semibold hover:bg-surface-container-lowest rounded-lg transition-colors"
            >
              Today
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-2 hover:bg-surface-container-lowest rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,45,132,0.04)] flex-1 flex flex-col">
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-outline-variant/15 bg-surface-container-low">
            {DAYS_OF_WEEK.map(day => (
              <div key={day} className="py-3 text-center text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 flex-1 overflow-hidden">
            {calendarDays.map((day, index) => {
              const dayEvents = day ? EVENTS_DATA.filter(e => e.date === day) : []
              const isCurrentMonth = day !== null
              const isSelected = day === selectedDate
              const isToday = day === 11 // October 11, 2024

              return (
                <div
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  className={`p-4 border-r border-b border-outline-variant/15 min-h-[120px] group cursor-pointer transition-colors ${
                    !isCurrentMonth ? 'bg-surface-container-low/30 text-outline-variant' : ''
                  } ${
                    isSelected ? 'bg-primary/5' : 'hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${isCurrentMonth ? 'text-on-surface' : 'text-outline'}`}>
                      {day ?? index}
                    </span>
                    {isToday && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>

                  {/* Events on this day */}
                  {dayEvents.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {dayEvents.map(event => {
                        const colors = getColorClasses(event.color)
                        return (
                          <div
                            key={event.id}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleEventClick(event.courseId)
                            }}
                            className={`px-2 py-1 ${colors.bg} border-l-4 ${colors.border} rounded text-[10px] font-bold ${colors.text} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                          >
                            {event.title}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex-1 text-sm text-on-surface-variant italic">
            "Success is the sum of small efforts repeated daily."
          </div>
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="none" stroke="#e9ecef" strokeWidth="8" />
              <circle 
                cx="60" 
                cy="60" 
                r="55" 
                fill="none" 
                stroke="#1A44A8" 
                strokeWidth="8"
                strokeDasharray={`${(70 / 100) * (2 * Math.PI * 55)} ${2 * Math.PI * 55}`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-black text-primary">70%</span>
              <span className="text-[8px] font-bold text-slate-400">PROGRESS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Upcoming Events */}
      <aside className="w-80 bg-surface-container-low/50 rounded-xl p-8 overflow-y-auto">
        <h2 className="text-xl font-bold text-on-surface mb-6">Upcoming this Month</h2>
        <div className="space-y-4">
          {UPCOMING_EVENTS.map(event => {
            const colors = getColorClasses(event.color)
            const priorityLabel = event.priority === 'HIGH' ? 'HIGHPRIORITY' : 
                                 event.priority === 'MAJOR' ? 'MAJOR ASSIGNMENT' : 
                                 event.priority === 'WORKSHOP' ? 'WORKSHOP' : 'LECTURE'
            
            return (
              <div 
                key={event.id}
                className="bg-surface-container-lowest p-5 rounded-xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] relative overflow-hidden group cursor-pointer hover:shadow-md transition-all"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.border} bg-current`}></div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${colors.bg} ${colors.text} px-2 py-0.5 rounded`}>
                    {priorityLabel}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">{event.date}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug text-on-surface mb-3">{event.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">book</span>
                  </div>
                  <span className="text-xs text-on-surface-variant">{event.courseCode}</span>
                </div>
              </div>
            )
          })}
        </div>
      </aside>
    </div>
  )
}
