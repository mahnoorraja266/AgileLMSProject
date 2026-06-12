"use client"

import { useState } from "react"

// Course detail data for all 6 courses
export const courseDetailsData: Record<string, CourseDetailType> = {
  "cs-301": {
    id: "cs-301",
    code: "CS-301",
    title: "Data Structures",
    instructor: "Dr. Ahmed Ali Khan",
    schedule: "Tue & Thu",
    time: "9:00 AM - 10:30 AM",
    progress: 72,
    assignments: [
      { id: 1, title: "Linked List Implementation", dueDate: "Oct 20, 2023", status: "submitted", icon: "description" },
      { id: 2, title: "Binary Tree Traversal", dueDate: "Oct 28, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "AVL Tree Visualizer", description: "Build an interactive tool to visualize AVL tree operations including insertions, deletions, and rotations.", deadline: "Dec 10, 2023", status: "In Progress" },
      { title: "Graph Algorithm Suite", description: "Implement and analyze various graph algorithms including BFS, DFS, Dijkstra, and Bellman-Ford.", deadline: "Nov 25, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Hash Tables Lecture", datetime: "Tuesday, Oct 24 • 9:00 AM", available: true },
      { type: "Laboratory", title: "Lab Session 5", datetime: "Thursday, Oct 26 • 9:00 AM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "Linked List Implementation", obtained: 17, total: 20 },
        { type: "quiz", name: "Array Concepts Quiz", obtained: 8, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 28, total: 30 },
        { type: "final", name: "Final Project Evaluation", obtained: 32, total: 40 },
      ],
      totalObtained: 85,
      totalMarks: 100,
      grade: "A",
      attendance: { percentage: 96, present: 28, missed: 1 },
      studyTip: { title: "Improve your Algorithm Analysis?", description: "Review the complexity analysis material for the upcoming Final Project." },
    },
    activities: {
      courseDescription: "Mastering fundamental data structures and their applications in algorithm design and optimization.",
      tag: "Algorithm Lab",
      announcements: [
        { title: "Upcoming Hash Tables Quiz", content: "Please review the hash table implementations discussed in modules 5-6. Focus on collision resolution strategies and load factors.", time: "3 hours ago", borderColor: "primary" },
        { title: "Guest Lecture: Graph Algorithms", content: "Join us this Thursday for a special session with Prof. Ali Raza on advanced graph algorithms and their real-world applications.", time: "Yesterday", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "AVL Tree rotation confusion", author: "Hassan Ali", replies: 8, lastActive: "15m ago" },
        { title: "Red-Black vs AVL performance", author: "Amna Tariq", replies: 4, lastActive: "2h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Submitted: Linked List Implementation", subtitle: "Submitted at 2:30 PM" },
        { type: "graded", title: "Quiz Graded: Array Concepts", subtitle: "Score: 85/100 • Reviewed at 10:00 AM" },
        { type: "announcement", title: "New Announcement Posted: Hash Tables Quiz", subtitle: "Posted by Dr. Ahmed Ali Khan • 3h ago" },
        { type: "resource", title: "Resource Accessed: Tree Algorithms PDF", subtitle: "Yesterday at 3:45 PM" },
      ],
      upcomingTask: { title: "Binary Tree Traversal", dueIn: "5 DAYS" },
    },
  },
  "se-402": {
    id: "se-402",
    code: "SE-402",
    title: "Software Engineering",
    instructor: "Prof. Sara Malik",
    schedule: "Mon & Wed",
    time: "11:00 AM - 12:30 PM",
    progress: 65,
    assignments: [
      { id: 1, title: "Requirements Document", dueDate: "Oct 22, 2023", status: "submitted", icon: "description" },
      { id: 2, title: "UML Diagrams", dueDate: "Nov 05, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "Agile Project Management", description: "Apply Scrum methodology to manage a team project with sprints, retrospectives, and daily standups.", deadline: "Dec 18, 2023", status: "In Progress" },
      { title: "Software Testing Suite", description: "Develop comprehensive test cases including unit, integration, and system testing for a web application.", deadline: "Nov 30, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Design Patterns Lecture", datetime: "Monday, Oct 23 • 11:00 AM", available: true },
      { type: "Workshop", title: "Code Review Session", datetime: "Wednesday, Oct 25 • 11:00 AM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "Requirements Document", obtained: 16, total: 20 },
        { type: "quiz", name: "SDLC Models Quiz", obtained: 9, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 24, total: 30 },
        { type: "final", name: "Agile Project Presentation", obtained: 30, total: 40 },
      ],
      totalObtained: 79,
      totalMarks: 100,
      grade: "B+",
      attendance: { percentage: 88, present: 22, missed: 3 },
      studyTip: { title: "Master Design Patterns?", description: "Study the Gang of Four patterns for the upcoming system design assignment." },
    },
    activities: {
      courseDescription: "Understanding software development methodologies, project management, and quality assurance practices.",
      tag: "Engineering Studio",
      announcements: [
        { title: "Sprint Review Guidelines", content: "Please prepare your sprint deliverables for the upcoming review. Each team should have a working demo ready by Friday.", time: "1 hour ago", borderColor: "primary" },
        { title: "Industry Talk: Agile at Scale", content: "Join us next week for a talk by a senior engineer from a leading tech company on implementing Agile practices in large organizations.", time: "2 days ago", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "Scrum vs Kanban for our project?", author: "Fatima Noor", replies: 15, lastActive: "5m ago" },
        { title: "Code review best practices", author: "Omar Sheikh", replies: 7, lastActive: "1h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Submitted: Requirements Document", subtitle: "Submitted at 4:15 PM" },
        { type: "graded", title: "Quiz Graded: SDLC Models", subtitle: "Score: 90/100 • Reviewed at 11:30 AM" },
        { type: "announcement", title: "New Announcement Posted: Sprint Review", subtitle: "Posted by Prof. Sara Malik • 1h ago" },
        { type: "resource", title: "Resource Accessed: Design Patterns eBook", subtitle: "Today at 9:00 AM" },
      ],
      upcomingTask: { title: "UML Diagrams", dueIn: "7 DAYS" },
    },
  },
  "ds-105": {
    id: "ds-105",
    code: "DS-105",
    title: "UI/UX Design",
    instructor: "Dr. Bilal Hassan",
    schedule: "Mon & Wed",
    time: "10:00 AM - 11:30 AM",
    progress: 68,
    assignments: [
      { id: 1, title: "User Research Report", dueDate: "Oct 24, 2023", status: "submitted", icon: "description" },
      { id: 2, title: "Wireframing Basics", dueDate: "Nov 02, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "Final Portfolio Design", description: "Comprehensive review of design principles applied to a personal brand identity and case study portfolio.", deadline: "Dec 15, 2023", status: "In Progress" },
      { title: "Mobile App Prototype", description: "High-fidelity interaction design for a chosen social impact domain, including testing and iteration.", deadline: "Nov 28, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Usability Testing Lecture", datetime: "Monday, Oct 23 • 10:00 AM", available: true },
      { type: "Laboratory", title: "Lab Session 4", datetime: "Wednesday, Oct 25 • 10:00 AM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "User Research Report", obtained: 18, total: 20 },
        { type: "quiz", name: "Typography Basics", obtained: 9, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 26, total: 30 },
        { type: "final", name: "Final Portfolio Project", obtained: 25, total: 40 },
      ],
      totalObtained: 78,
      totalMarks: 100,
      grade: "B+",
      attendance: { percentage: 92, present: 24, missed: 2 },
      studyTip: { title: "Improve your Design Ethics grade?", description: "Review the supplementary reading material for the upcoming Final Portfolio Project." },
    },
    activities: {
      courseDescription: "Mastering the principles of human-centered design, typography, and professional prototyping.",
      tag: "Design Studio",
      announcements: [
        { title: "Upcoming Midterm Guidelines", content: "Please review the syllabus for the upcoming midterm exam. Focus on user research methodologies and wireframing best practices discussed in modules 1-4.", time: "2 hours ago", borderColor: "primary" },
        { title: "Guest Lecture: User Psychology", content: "Join us this Friday for a special session with Dr. Sarah Malik. She will be covering the cognitive biases that influence user interaction and decision making.", time: "Yesterday", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "Questions about Figma Prototyping", author: "Zainab Noor", replies: 12, lastActive: "10m ago" },
        { title: "Best practices for accessibility", author: "Ahmed Ali Khan", replies: 5, lastActive: "3h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Submitted: User Research Report", subtitle: "Submitted at 11:24 AM" },
        { type: "graded", title: "Quiz Graded: Typography Basics", subtitle: "Score: 92/100 • Reviewed at 9:15 AM" },
        { type: "announcement", title: "New Announcement Posted: Guest Lecture", subtitle: "Posted by Dr. Bilal Hassan • 2h ago" },
        { type: "resource", title: "Resource Accessed: Color Theory PDF", subtitle: "Yesterday at 4:30 PM" },
      ],
      upcomingTask: { title: "Midterm Case Study", dueIn: "3 DAYS" },
    },
  },
  "cs-305": {
    id: "cs-305",
    code: "CS-305",
    title: "Database Systems",
    instructor: "Dr. Fatima Zahra",
    schedule: "Tue & Thu",
    time: "2:00 PM - 3:30 PM",
    progress: 58,
    assignments: [
      { id: 1, title: "ER Diagram Design", dueDate: "Oct 25, 2023", status: "submitted", icon: "description" },
      { id: 2, title: "SQL Query Optimization", dueDate: "Nov 08, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "Relational Database Design", description: "Design and implement a normalized database schema for a real-world application with complex relationships.", deadline: "Dec 12, 2023", status: "In Progress" },
      { title: "NoSQL Integration", description: "Explore MongoDB integration with a web application, implementing CRUD operations and aggregation pipelines.", deadline: "Nov 22, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Indexing Strategies", datetime: "Tuesday, Oct 24 • 2:00 PM", available: true },
      { type: "Laboratory", title: "Lab Session 6", datetime: "Thursday, Oct 26 • 2:00 PM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "ER Diagram Design", obtained: 19, total: 20 },
        { type: "quiz", name: "SQL Fundamentals Quiz", obtained: 8, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 27, total: 30 },
        { type: "final", name: "Database Design Project", obtained: 28, total: 40 },
      ],
      totalObtained: 82,
      totalMarks: 100,
      grade: "A-",
      attendance: { percentage: 94, present: 26, missed: 2 },
      studyTip: { title: "Master Query Optimization?", description: "Practice complex JOIN operations for the final examination." },
    },
    activities: {
      courseDescription: "Designing efficient database schemas, mastering SQL, and understanding transaction management.",
      tag: "Database Lab",
      announcements: [
        { title: "Normalization Workshop", content: "This week we will focus on 3NF and BCNF. Please bring your ER diagrams from the previous assignment for review.", time: "4 hours ago", borderColor: "primary" },
        { title: "NoSQL Introduction", content: "Next week marks the beginning of our NoSQL module. Install MongoDB locally before the session.", time: "2 days ago", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "Complex JOIN query help", author: "Bilal Ahmed", replies: 9, lastActive: "20m ago" },
        { title: "Indexing strategies discussion", author: "Sara Khalid", replies: 6, lastActive: "4h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Submitted: ER Diagram Design", subtitle: "Submitted at 1:00 PM" },
        { type: "graded", title: "Quiz Graded: SQL Fundamentals", subtitle: "Score: 80/100 • Reviewed at 10:45 AM" },
        { type: "announcement", title: "New Announcement Posted: Normalization Workshop", subtitle: "Posted by Dr. Fatima Zahra • 4h ago" },
        { type: "resource", title: "Resource Accessed: SQL Optimization Guide", subtitle: "Today at 8:30 AM" },
      ],
      upcomingTask: { title: "SQL Query Optimization", dueIn: "10 DAYS" },
    },
  },
  "cs-401": {
    id: "cs-401",
    code: "CS-401",
    title: "Operating Systems",
    instructor: "Prof. Usman Sheikh",
    schedule: "Wed & Fri",
    time: "3:00 PM - 4:30 PM",
    progress: 45,
    assignments: [
      { id: 1, title: "Process Scheduling Report", dueDate: "Oct 30, 2023", status: "pending", icon: "description" },
      { id: 2, title: "Memory Management Analysis", dueDate: "Nov 10, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "Custom Shell Implementation", description: "Build a Unix-like shell with support for pipes, redirections, and background processes.", deadline: "Dec 20, 2023", status: "Not Started" },
      { title: "Virtual Memory Simulator", description: "Simulate page replacement algorithms and analyze their performance under different workloads.", deadline: "Dec 05, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Deadlock Prevention", datetime: "Wednesday, Oct 25 • 3:00 PM", available: true },
      { type: "Laboratory", title: "Lab Session 3", datetime: "Friday, Oct 27 • 3:00 PM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "Process Scheduling Report", obtained: 14, total: 20 },
        { type: "quiz", name: "Memory Management Quiz", obtained: 7, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 22, total: 30 },
        { type: "final", name: "Shell Implementation Project", obtained: 0, total: 40 },
      ],
      totalObtained: 43,
      totalMarks: 100,
      grade: "C",
      attendance: { percentage: 76, present: 19, missed: 6 },
      studyTip: { title: "Catch up on Process Management?", description: "Review the deadlock prevention lecture recordings before the next exam." },
    },
    activities: {
      courseDescription: "Understanding operating system internals, process management, and system programming.",
      tag: "Systems Lab",
      announcements: [
        { title: "Shell Project Kickoff", content: "The custom shell implementation project begins next week. Form your teams and review the Linux system call documentation.", time: "5 hours ago", borderColor: "primary" },
        { title: "Virtual Memory Deep Dive", content: "Tomorrow's lecture will cover page replacement algorithms in detail. Review chapters 8-9 before class.", time: "Yesterday", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "Fork vs exec confusion", author: "Usman Raza", replies: 11, lastActive: "30m ago" },
        { title: "Semaphore implementation help", author: "Ayesha Malik", replies: 3, lastActive: "5h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Pending: Process Scheduling Report", subtitle: "Due in 2 days" },
        { type: "graded", title: "Quiz Graded: Memory Management", subtitle: "Score: 70/100 • Reviewed at 2:00 PM" },
        { type: "announcement", title: "New Announcement Posted: Shell Project", subtitle: "Posted by Prof. Usman Sheikh • 5h ago" },
        { type: "resource", title: "Resource Accessed: Linux System Calls PDF", subtitle: "Today at 11:00 AM" },
      ],
      upcomingTask: { title: "Process Scheduling Report", dueIn: "2 DAYS" },
    },
  },
  "it-505": {
    id: "it-505",
    code: "IT-505",
    title: "Cloud Computing",
    instructor: "Dr. Zainab Noor",
    schedule: "Mon & Thu",
    time: "1:00 PM - 2:30 PM",
    progress: 55,
    assignments: [
      { id: 1, title: "Cloud Architecture Design", dueDate: "Oct 26, 2023", status: "submitted", icon: "description" },
      { id: 2, title: "Serverless Functions", dueDate: "Nov 06, 2023", status: "pending", icon: "draw" },
    ],
    projects: [
      { title: "AWS Deployment Pipeline", description: "Set up a complete CI/CD pipeline using AWS services including CodePipeline, CodeBuild, and ECS.", deadline: "Dec 14, 2023", status: "In Progress" },
      { title: "Kubernetes Orchestration", description: "Deploy a microservices application on Kubernetes with auto-scaling and load balancing.", deadline: "Nov 26, 2023", status: "Not Started" },
    ],
    upcomingClasses: [
      { type: "Coming Up Next", title: "Container Technologies", datetime: "Monday, Oct 23 • 1:00 PM", available: true },
      { type: "Workshop", title: "Docker Hands-on", datetime: "Thursday, Oct 26 • 1:00 PM", available: false },
    ],
    grades: {
      items: [
        { type: "assignment", name: "Cloud Architecture Design", obtained: 18, total: 20 },
        { type: "quiz", name: "Virtualization Concepts", obtained: 9, total: 10 },
        { type: "midterm", name: "Midterm Examination", obtained: 25, total: 30 },
        { type: "final", name: "AWS Deployment Pipeline", obtained: 22, total: 40 },
      ],
      totalObtained: 74,
      totalMarks: 100,
      grade: "B",
      attendance: { percentage: 90, present: 23, missed: 3 },
      studyTip: { title: "Ace Kubernetes Orchestration?", description: "Complete the hands-on Docker workshop exercises before the final project." },
    },
    activities: {
      courseDescription: "Exploring cloud architectures, containerization, and modern deployment strategies.",
      tag: "Cloud Lab",
      announcements: [
        { title: "AWS Credits Distribution", content: "AWS Educate credits will be distributed this week. Complete your account verification to receive $100 in free credits.", time: "2 hours ago", borderColor: "primary" },
        { title: "Kubernetes Workshop", content: "Hands-on Kubernetes workshop this Saturday. Bring your laptops with Docker Desktop installed.", time: "3 days ago", borderColor: "tertiary" },
      ],
      forumTopics: [
        { title: "Docker compose networking", author: "Ali Hassan", replies: 14, lastActive: "25m ago" },
        { title: "Lambda vs EC2 cost analysis", author: "Mariam Tariq", replies: 8, lastActive: "2h ago" },
      ],
      recentActivity: [
        { type: "submitted", title: "Assignment Submitted: Cloud Architecture Design", subtitle: "Submitted at 3:30 PM" },
        { type: "graded", title: "Quiz Graded: Virtualization Concepts", subtitle: "Score: 90/100 • Reviewed at 12:00 PM" },
        { type: "announcement", title: "New Announcement Posted: AWS Credits", subtitle: "Posted by Dr. Zainab Noor • 2h ago" },
        { type: "resource", title: "Resource Accessed: Docker Best Practices", subtitle: "Today at 10:15 AM" },
      ],
      upcomingTask: { title: "Serverless Functions", dueIn: "8 DAYS" },
    },
  },
}

interface GradeItem {
  type: "assignment" | "quiz" | "midterm" | "final"
  name: string
  obtained: number
  total: number
}

interface GradesData {
  items: GradeItem[]
  totalObtained: number
  totalMarks: number
  grade: string
  attendance: {
    percentage: number
    present: number
    missed: number
  }
  studyTip: {
    title: string
    description: string
  }
}

interface ActivityItem {
  type: "submitted" | "graded" | "announcement" | "resource"
  title: string
  subtitle: string
}

interface ForumTopic {
  title: string
  author: string
  replies: number
  lastActive: string
}

interface Announcement {
  title: string
  content: string
  time: string
  borderColor: "primary" | "tertiary"
}

interface ActivitiesData {
  courseDescription: string
  tag: string
  announcements: Announcement[]
  forumTopics: ForumTopic[]
  recentActivity: ActivityItem[]
  upcomingTask: { title: string; dueIn: string }
}

interface CourseDetailType {
  id: string
  code: string
  title: string
  instructor: string
  schedule: string
  time: string
  progress: number
  assignments: { id: number; title: string; dueDate: string; status: string; icon: string }[]
  projects: { title: string; description: string; deadline: string; status: string }[]
  upcomingClasses: { type: string; title: string; datetime: string; available: boolean }[]
  grades: GradesData
  activities: ActivitiesData
}

interface CourseDetailProps {
  courseId: string
  onBack: () => void
}

export default function CourseDetail({ courseId, onBack }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "grades" | "activities">("overview")
  const course = courseDetailsData[courseId]

  if (!course) {
    return (
      <div className="p-10 flex items-center justify-center">
        <p className="text-slate-500">Course not found</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 px-12 pt-6 pb-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm font-medium text-slate-500">
          <span 
            className="hover:text-primary cursor-pointer transition-colors"
            onClick={onBack}
          >
            My Courses
          </span>
          <span className="mx-3 text-slate-300">/</span>
          <span className="text-primary-container">{course.title} ({course.code})</span>
        </nav>

        {/* Course Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-4">{course.title}</h1>
          <div className="flex border-none gap-8">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`pb-4 text-sm font-bold tracking-wide transition-colors ${
                activeTab === "overview" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("grades")}
              className={`pb-4 text-sm font-medium tracking-wide transition-colors ${
                activeTab === "grades" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              Grades
            </button>
            <button 
              onClick={() => setActiveTab("activities")}
              className={`pb-4 text-sm font-medium tracking-wide transition-colors ${
                activeTab === "activities" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              Activities
            </button>
          </div>
        </div>

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-12 gap-10">
            {/* Left Column: Primary Content */}
            <div className="col-span-8 flex flex-col gap-12">
              {/* Assignments Section */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-2xl font-bold text-on-surface">Assignments</h3>
                  <span className="text-sm font-medium text-primary cursor-pointer hover:underline">View all tasks</span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-1 flex flex-col gap-1">
                  {course.assignments.map((assignment) => (
                    <div 
                      key={assignment.id}
                      className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between group hover:bg-surface-bright transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">{assignment.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{assignment.title}</h4>
                          <p className="text-sm text-slate-500 mt-1">Due: {assignment.dueDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        {assignment.status === "submitted" ? (
                          <>
                            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">Submitted</span>
                            <button className="px-4 py-2 text-sm font-bold text-primary-container bg-surface-container-high rounded-lg hover:bg-primary-container hover:text-white transition-all">View</button>
                          </>
                        ) : (
                          <>
                            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider">Pending</span>
                            <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-br from-primary to-primary-container rounded-lg shadow-sm active:scale-95 transition-all">Submit</button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Course Projects Section */}
              <section>
                <h3 className="text-2xl font-bold text-on-surface mb-6">Course Projects</h3>
                <div className="grid grid-cols-2 gap-6">
                  {course.projects.map((project, index) => (
                    <div 
                      key={index}
                      className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-4">
                        <span className="material-symbols-outlined text-primary/10 text-6xl group-hover:scale-110 transition-transform">
                          {index === 0 ? "architecture" : "phone_iphone"}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-2">{project.title}</h4>
                      <p className="text-sm text-slate-500 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Deadline</p>
                          <p className="text-sm font-semibold text-on-surface">{project.deadline}</p>
                        </div>
                        <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold">{project.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Contextual Side Info */}
            <div className="col-span-4 flex flex-col gap-8">
              {/* Course Info Card */}
              <div className="bg-primary p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-80">Course Details</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined opacity-70">person</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">Instructor</p>
                      <p className="font-semibold text-lg">{course.instructor}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined opacity-70">fingerprint</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">Course Code</p>
                      <p className="font-semibold text-lg tracking-wide">{course.code}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined opacity-70">calendar_today</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">Schedule</p>
                      <p className="font-semibold text-sm">{course.schedule}<br />{course.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Classes Section */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)]">
                <h3 className="text-lg font-bold text-on-surface mb-6">Upcoming Classes</h3>
                <div className="space-y-8">
                  {course.upcomingClasses.map((cls, index) => (
                    <div 
                      key={index}
                      className={`relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:rounded-full ${
                        cls.available ? "before:bg-tertiary-container" : "before:bg-slate-200"
                      }`}
                    >
                      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                        cls.available ? "text-tertiary" : "text-slate-400"
                      }`}>
                        {cls.type}
                      </p>
                      <h4 className={`font-bold ${cls.available ? "text-on-surface" : "text-slate-600"}`}>
                        {cls.title}
                      </h4>
                      <p className={`text-sm ${cls.available ? "text-slate-500" : "text-slate-400"} mb-4`}>
                        {cls.datetime}
                      </p>
                      {cls.available ? (
                        <button className="w-full py-3 bg-primary-container text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95">
                          <span className="material-symbols-outlined text-sm">videocam</span>
                          Join Session
                        </button>
                      ) : (
                        <button className="text-sm font-bold text-slate-400 cursor-not-allowed" disabled>
                          Not available
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Visual */}
              <div className="bg-white p-8 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-on-surface">Overall Course Progress</span>
                  <span className="text-sm font-black text-primary">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-tertiary to-tertiary-fixed rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 text-center italic">{'"Excellence is not an act, but a habit."'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Grades Tab Content */}
        {activeTab === "grades" && (
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Grades Table */}
            <div className="col-span-12 xl:col-span-8 space-y-8">
              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm shadow-blue-900/5 relative overflow-hidden group">
                {/* Subtle Background Accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-extrabold text-primary tracking-tight">Academic Performance</h3>
                  <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Updated 2h ago</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest pl-4">Assessment Type</th>
                        <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Assessment Name</th>
                        <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Obtained</th>
                        <th className="pb-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right pr-4">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {course.grades.items.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="py-5 pl-4">
                            <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                              item.type === "assignment" ? "bg-blue-50 text-blue-700" :
                              item.type === "quiz" ? "bg-amber-50 text-amber-700" :
                              item.type === "midterm" ? "bg-primary text-white" :
                              "bg-tertiary text-white"
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="py-5">
                            <p className="text-sm font-bold text-on-surface">{item.name}</p>
                          </td>
                          <td className="py-5 text-center">
                            <span className="text-base font-black text-primary">{item.obtained.toString().padStart(2, '0')}</span>
                          </td>
                          <td className="py-5 text-right pr-4">
                            <span className="text-base font-medium text-slate-400">{item.total}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Summary Area */}
                <div className="mt-12 pt-10 border-t-2 border-dashed border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Current Standing</p>
                    <p className="text-sm text-slate-500 max-w-xs">You are currently in the top 15% of your class for this semester.</p>
                  </div>
                  <div className="bg-primary bg-gradient-to-br from-primary to-primary-container p-1 rounded-2xl">
                    <div className="bg-white px-8 py-4 rounded-[calc(1rem-2px)] flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10px] font-black text-primary uppercase tracking-tighter">Total Marks</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-primary">{course.grades.totalObtained}</span>
                          <span className="text-lg font-bold text-slate-300">/ {course.grades.totalMarks}</span>
                        </div>
                      </div>
                      <div className="w-px h-12 bg-slate-100"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-primary">{course.grades.grade}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Grade</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Attendance & Stats */}
            <div className="col-span-12 xl:col-span-4 space-y-8">
              {/* Instructor Card */}
              <div className="bg-surface-container-low px-6 py-4 rounded-2xl flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">workspace_premium</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instructor</p>
                  <p className="text-sm font-bold text-primary">{course.instructor}</p>
                </div>
              </div>

              {/* Attendance Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm shadow-blue-900/5">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-bold text-primary">Attendance</h4>
                  <div className="p-2 bg-blue-50 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  </div>
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-primary">{course.grades.attendance.percentage}%</span>
                    <span className="text-sm font-bold text-slate-400">Stable</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden mb-8">
                  <div 
                    className="h-full bg-gradient-to-r from-tertiary to-tertiary-fixed rounded-full" 
                    style={{ width: `${course.grades.attendance.percentage}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Present</p>
                    <p className="text-xl font-bold text-primary">{course.grades.attendance.present} <span className="text-xs text-slate-400">days</span></p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Missed</p>
                    <p className="text-xl font-bold text-error">{course.grades.attendance.missed.toString().padStart(2, '0')} <span className="text-xs text-slate-400">days</span></p>
                  </div>
                </div>
              </div>

              {/* Study Tip Card */}
              <div className="bg-primary-container bg-gradient-to-br from-primary-container to-primary rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold tracking-tight mb-3">{course.grades.studyTip.title}</h4>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">{course.grades.studyTip.description}</p>
                  <button className="bg-white text-primary font-bold text-xs py-3 px-6 rounded-xl shadow-lg hover:scale-95 transition-transform">
                    View Study Guide
                  </button>
                </div>
                {/* Abstract Background Shape */}
                <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 700" }}>menu_book</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activities Tab Content */}
        {activeTab === "activities" && (
          <>
            {/* Course Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl mb-12 p-12 flex justify-between items-end min-h-[280px] bg-gradient-to-r from-primary/90 to-primary/60">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-container to-primary"></div>
              <div className="relative z-10 max-w-2xl text-white">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">{course.activities.tag}</span>
                <h2 className="text-5xl font-black tracking-tight mb-4">{course.title} ({course.code})</h2>
                <p className="text-primary-fixed text-lg">{course.activities.courseDescription}</p>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white">
                  <p className="text-xs opacity-80 mb-1">Course Progress</p>
                  <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="text-right text-xs font-bold mt-2">{course.progress}% Complete</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column: Announcements & Forum */}
              <div className="col-span-12 xl:col-span-8 space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-primary">Course Announcements</h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Instructor: {course.instructor}</span>
                </div>
                
                <div className="space-y-6">
                  {course.activities.announcements.map((announcement, index) => (
                    <div 
                      key={index}
                      className={`bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,45,132,0.04)] border-l-4 ${
                        announcement.borderColor === "primary" ? "border-primary" : "border-tertiary-fixed"
                      } group hover:translate-x-1 transition-all`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-on-surface">{announcement.title}</h4>
                        <span className="text-sm font-medium text-slate-400">{announcement.time}</span>
                      </div>
                      <p className="text-on-surface-variant leading-relaxed mb-6">{announcement.content}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">person</span>
                        </div>
                        <span className="text-sm font-bold text-primary">{course.instructor}</span>
                        <span className="text-xs text-slate-400">• Lead Instructor</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discussion Forum */}
                <div className="mt-12 bg-white rounded-3xl overflow-hidden shadow-[0px_4px_20px_rgba(0,45,132,0.04)]">
                  <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-primary">Discussion Forum</h3>
                    <button className="text-sm font-bold text-primary hover:underline">View All Topics</button>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {course.activities.forumTopics.map((topic, index) => (
                      <div key={index} className="p-8 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-md font-bold text-on-surface group-hover:text-primary transition-colors mb-1">{topic.title}</h5>
                            <p className="text-sm text-slate-500">Started by <span className="font-semibold text-slate-700">{topic.author}</span></p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-primary font-bold">
                              <span className="material-symbols-outlined text-sm">forum</span>
                              <span>{topic.replies} replies</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Last active: {topic.lastActive}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Recent Activity Sidebar */}
              <div className="col-span-12 xl:col-span-4">
                <div className="bg-white rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,45,132,0.04)] sticky top-28">
                  <h3 className="text-xl font-bold text-primary mb-8">Recent Activity</h3>
                  <div className="relative">
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-100"></div>
                    <div className="space-y-10">
                      {course.activities.recentActivity.map((activity, index) => (
                        <div key={index} className="relative flex gap-6 items-start group">
                          <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-white ring-4 ring-white ${
                            activity.type === "submitted" ? "bg-emerald-500" :
                            activity.type === "graded" ? "bg-primary" :
                            activity.type === "announcement" ? "bg-tertiary-container text-on-tertiary-container" :
                            "bg-slate-200 text-slate-500"
                          }`}>
                            <span className="material-symbols-outlined text-[14px]">
                              {activity.type === "submitted" ? "check" :
                               activity.type === "graded" ? "description" :
                               activity.type === "announcement" ? "notifications" :
                               "edit_note"}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface leading-tight">{activity.title}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Upcoming Task */}
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="bg-surface-container-low rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-primary">event_note</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase">Upcoming Task</p>
                        <p className="text-sm font-bold text-primary">{course.activities.upcomingTask.title}</p>
                        <p className="text-[10px] text-error font-black mt-0.5">DUE IN {course.activities.upcomingTask.dueIn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50">
        <span className="material-symbols-outlined">help_outline</span>
        <span className="absolute right-full mr-4 bg-on-surface text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">Course Support</span>
      </button>
    </div>
  )
}
