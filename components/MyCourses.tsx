"use client"

// Course data with all 6 courses from the design
export const coursesData = [
  {
    id: "cs-301",
    code: "CS-301",
    title: "Data Structures",
    instructor: "Dr. Ahmed Ali Khan",
    status: "ongoing",
    icon: "data_object",
    bgIcon: "book",
    gradient: "from-primary to-primary-container",
  },
  {
    id: "se-402",
    code: "SE-402",
    title: "Software Engineering",
    instructor: "Prof. Sara Malik",
    status: "ongoing",
    icon: "code",
    bgIcon: "engineering",
    gradient: "from-blue-700 to-primary",
  },
  {
    id: "ds-105",
    code: "DS-105",
    title: "UI/UX Design",
    instructor: "Dr. Bilal Hassan",
    status: "completed",
    icon: "design_services",
    bgIcon: "palette",
    gradient: "from-primary-container to-blue-900",
  },
  {
    id: "cs-305",
    code: "CS-305",
    title: "Database Systems",
    instructor: "Dr. Fatima Zahra",
    status: "ongoing",
    icon: "database",
    bgIcon: "storage",
    gradient: "from-primary to-blue-800",
  },
  {
    id: "cs-401",
    code: "CS-401",
    title: "Operating Systems",
    instructor: "Prof. Usman Sheikh",
    status: "upcoming",
    icon: "analytics",
    bgIcon: "terminal",
    gradient: "from-blue-900 to-primary-container",
  },
  {
    id: "it-505",
    code: "IT-505",
    title: "Cloud Computing",
    instructor: "Dr. Zainab Noor",
    status: "ongoing",
    icon: "cloud",
    bgIcon: "cloud_queue",
    gradient: "from-blue-600 to-primary",
  },
]

interface MyCoursesProps {
  onCourseClick?: (courseId: string) => void
}

export default function MyCourses({ onCourseClick }: MyCoursesProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return (
          <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full uppercase tracking-wider">
            Ongoing
          </span>
        )
      case "completed":
        return (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
            Completed
          </span>
        )
      case "upcoming":
        return (
          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">
            Upcoming
          </span>
        )
      default:
        return null
    }
  }

  const getActionButton = (status: string, courseId: string) => {
    switch (status) {
      case "ongoing":
        return (
          <button
            onClick={() => onCourseClick?.(courseId)}
            className="bg-gradient-to-br from-primary to-primary-container text-white px-4 py-2 rounded-lg text-xs font-bold hover:scale-[1.02] active:scale-95 transition-all"
          >
            Continue
          </button>
        )
      case "completed":
        return (
          <button
            onClick={() => onCourseClick?.(courseId)}
            className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg text-xs font-bold hover:bg-surface-container-high transition-all"
          >
            Open Course
          </button>
        )
      case "upcoming":
        return (
          <button
            disabled
            className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg text-xs font-bold opacity-50 cursor-not-allowed"
          >
            Locked
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 flex flex-col">
    <div className="p-10 space-y-12 max-w-7xl mx-auto w-full flex-1">
      {/* Header Section */}
      <section className="relative space-y-2">
        <h2 className="text-4xl font-black text-on-surface tracking-tight">My Courses</h2>
        <p className="text-secondary text-lg font-medium opacity-80">
          View and access your enrolled courses
        </p>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(0,45,132,0.08)] flex flex-col"
          >
            {/* Card Header with Gradient */}
            <div className={`h-32 bg-gradient-to-br ${course.gradient} p-6 relative overflow-hidden`}>
              {/* Background Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                <span className="material-symbols-outlined text-8xl text-white">{course.bgIcon}</span>
              </div>
              {/* Icon Badge */}
              <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">{course.icon}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 space-y-4">
              <div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                  {course.code}
                </span>
                <h3 className="text-xl font-bold text-on-surface mt-1 leading-tight group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-secondary text-sm font-medium mt-2">{course.instructor}</p>
              </div>

              {/* Footer with Status and Action */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                {getStatusBadge(course.status)}
                {getActionButton(course.status, course.id)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="mt-auto px-10 py-12 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
      <p>© 2024 IQRA UNIVERSITY ISLAMABAD • OFFICE OF REGISTRAR</p>
      <div className="flex gap-6">
        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="hover:text-primary transition-colors" href="#">Academic Regulations</a>
      </div>
    </footer>
    </div>
  )
}
