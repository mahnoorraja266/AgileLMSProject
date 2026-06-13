'use client'

import { useState } from 'react'

interface Subject {
  id: string
  name: string
  displayName: string
  resourceCount: number
  icon: string
  resourcesByType: {
    powerpoints: number
    lectureNotes: number
    visualAssets: number
    archivedFiles: number
  }
}

interface ResourceItem {
  id: string
  name: string
  size: string
  date: string
  downloads?: number
}

const SUBJECTS_DATA: Subject[] = [
  {
    id: 'cs',
    name: 'Computer Science',
    displayName: 'Comp Science',
    resourceCount: 124,
    icon: 'terminal',
    resourcesByType: { powerpoints: 45, lectureNotes: 128, visualAssets: 62, archivedFiles: 12 },
  },
  {
    id: 'ba',
    name: 'Business Administration',
    displayName: 'Business Admin',
    resourceCount: 86,
    icon: 'corporate_fare',
    resourcesByType: { powerpoints: 32, lectureNotes: 78, visualAssets: 28, archivedFiles: 8 },
  },
  {
    id: 'da',
    name: 'Data Analytics',
    displayName: 'Data Analytics',
    resourceCount: 42,
    icon: 'analytics',
    resourcesByType: { powerpoints: 18, lectureNotes: 45, visualAssets: 20, archivedFiles: 5 },
  },
  {
    id: 'ss',
    name: 'Social Science',
    displayName: 'Social Science',
    resourceCount: 54,
    icon: 'diversity_3',
    resourcesByType: { powerpoints: 28, lectureNotes: 62, visualAssets: 35, archivedFiles: 7 },
  },
  {
    id: 'ms',
    name: 'Media Studies',
    displayName: 'Media Studies',
    resourceCount: 31,
    icon: 'movie_filter',
    resourcesByType: { powerpoints: 12, lectureNotes: 28, visualAssets: 52, archivedFiles: 4 },
  },
]

const RESOURCE_ITEMS: Record<string, Record<string, ResourceItem[]>> = {
  cs: {
    powerpoints: [
      { id: '1', name: 'Data Structures Fundamentals.pptx', size: '12.4 MB', date: 'Oct 15, 2023' },
      { id: '2', name: 'Algorithms Overview.pptx', size: '8.9 MB', date: 'Oct 12, 2023' },
      { id: '3', name: 'Database Design Principles.pptx', size: '15.2 MB', date: 'Oct 10, 2023' },
    ],
    lectureNotes: [
      { id: '1', name: 'Week 1 - Introduction to CS.pdf', size: '2.3 MB', date: 'Oct 1, 2023' },
      { id: '2', name: 'Week 2 - Programming Basics.pdf', size: '3.1 MB', date: 'Oct 8, 2023' },
      { id: '3', name: 'Week 3 - OOP Concepts.pdf', size: '4.5 MB', date: 'Oct 15, 2023' },
    ],
    visualAssets: [
      { id: '1', name: 'System Architecture Diagram.png', size: '1.2 MB', date: 'Oct 20, 2023' },
      { id: '2', name: 'Algorithm Flowchart.svg', size: '0.8 MB', date: 'Oct 18, 2023' },
      { id: '3', name: 'Database ERD.png', size: '2.1 MB', date: 'Oct 16, 2023' },
    ],
    archivedFiles: [
      { id: '1', name: 'Previous Year Exam Papers.zip', size: '45.6 MB', date: 'Sep 1, 2023' },
      { id: '2', name: 'Legacy Lecture Archive.zip', size: '78.3 MB', date: 'Aug 15, 2023' },
    ],
  },
  ba: {
    powerpoints: [
      { id: '1', name: 'Business Management Basics.pptx', size: '10.2 MB', date: 'Oct 14, 2023' },
      { id: '2', name: 'Marketing Strategies.pptx', size: '11.5 MB', date: 'Oct 12, 2023' },
    ],
    lectureNotes: [
      { id: '1', name: 'Organizational Behavior.pdf', size: '3.8 MB', date: 'Oct 10, 2023' },
      { id: '2', name: 'Financial Management.pdf', size: '5.2 MB', date: 'Oct 8, 2023' },
    ],
    visualAssets: [
      { id: '1', name: 'Market Analysis Charts.png', size: '1.9 MB', date: 'Oct 18, 2023' },
      { id: '2', name: 'Business Model Canvas.pdf', size: '0.7 MB', date: 'Oct 16, 2023' },
    ],
    archivedFiles: [
      { id: '1', name: 'Old Reports Archive.zip', size: '32.1 MB', date: 'Aug 20, 2023' },
    ],
  },
  da: {
    powerpoints: [
      { id: '1', name: 'Data Visualization Techniques.pptx', size: '9.1 MB', date: 'Oct 13, 2023' },
    ],
    lectureNotes: [
      { id: '1', name: 'Statistical Analysis Methods.pdf', size: '4.3 MB', date: 'Oct 11, 2023' },
    ],
    visualAssets: [
      { id: '1', name: 'Analytics Dashboard Templates.png', size: '2.4 MB', date: 'Oct 17, 2023' },
    ],
    archivedFiles: [
      { id: '1', name: 'Previous Datasets.zip', size: '56.8 MB', date: 'Jul 30, 2023' },
    ],
  },
}

export default function Resources() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(SUBJECTS_DATA[0])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  const currentSubject = SUBJECTS_DATA.find(s => s.id === selectedSubject.id) || selectedSubject
  const resourceItems = RESOURCE_ITEMS[selectedSubject.id] || {}

  if (selectedFolder) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="p-10 space-y-8 max-w-7xl mx-auto w-full flex-1">
          {/* Breadcrumb */}
          <button 
            onClick={() => setSelectedFolder(null)}
            className="text-primary hover:underline flex items-center gap-1 text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to {currentSubject.name} Resources
          </button>

          {/* Folder Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                selectedFolder === 'powerpoints' ? 'bg-orange-100 text-orange-600' :
                selectedFolder === 'lectureNotes' ? 'bg-blue-100 text-blue-600' :
                selectedFolder === 'visualAssets' ? 'bg-purple-100 text-purple-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {selectedFolder === 'powerpoints' ? 'slideshow' :
                   selectedFolder === 'lectureNotes' ? 'description' :
                   selectedFolder === 'visualAssets' ? 'image' :
                   'storage'}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-on-surface">
                  {selectedFolder === 'powerpoints' ? 'Powerpoints' :
                   selectedFolder === 'lectureNotes' ? 'Lecture Notes' :
                   selectedFolder === 'visualAssets' ? 'Visual Assets' :
                   'Archived Files'}
                </h1>
                <p className="text-on-surface-variant mt-1">
                  {resourceItems[selectedFolder as keyof typeof resourceItems]?.length || 0} files available
                </p>
              </div>
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-3">
            {resourceItems[selectedFolder as keyof typeof resourceItems]?.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-colors group">
                <div className="flex items-center gap-4 flex-grow">
                  <div className="p-2 bg-surface-container-high rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      {selectedFolder === 'powerpoints' ? 'slideshow' :
                       selectedFolder === 'lectureNotes' ? 'description' :
                       'image'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-on-surface">{item.name}</p>
                    <div className="flex gap-4 text-xs text-on-surface-variant mt-1">
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-primary hover:bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                  <span className="material-symbols-outlined">download</span>
                </button>
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

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-10 space-y-12 max-w-7xl mx-auto w-full flex-1">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary">{currentSubject.name} Resources</h1>
            <p className="text-on-surface-variant mt-2">Explore {currentSubject.resourceCount} learning materials across different formats</p>
          </div>
          <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">list</span>
            </button>
          </div>
        </div>

        {/* Subject Selection Sidebar + Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-2">
            <h4 className="px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Departments</h4>
            <div className="space-y-2">
              {SUBJECTS_DATA.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => {
                    setSelectedSubject(subject)
                    setViewMode('grid')
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                    selectedSubject.id === subject.id
                      ? 'bg-surface-container-high text-primary font-bold'
                      : 'hover:bg-surface-container-low text-on-surface-variant font-medium'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">{subject.icon}</span>
                    {subject.displayName}
                  </span>
                  <span className={`text-xs ${selectedSubject.id === subject.id ? 'bg-primary/10' : 'opacity-50'} px-2 py-0.5 rounded-full`}>
                    {subject.resourceCount}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Powerpoints Folder */}
                <div 
                  onClick={() => setSelectedFolder('powerpoints')}
                  className="group bg-surface-container-low rounded-2xl p-8 hover:bg-surface-container-lowest hover:shadow-ambient transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
                  </div>
                  <h5 className="font-bold text-on-surface text-lg">Powerpoints</h5>
                  <p className="text-on-surface-variant text-sm mt-1">{currentSubject.resourcesByType.powerpoints} Presentations</p>
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-primary">Open Folder</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </div>
                </div>

                {/* Lecture Notes Folder */}
                <div 
                  onClick={() => setSelectedFolder('lectureNotes')}
                  className="group bg-surface-container-low rounded-2xl p-8 hover:bg-surface-container-lowest hover:shadow-ambient transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
                  </div>
                  <h5 className="font-bold text-on-surface text-lg">Lecture Notes</h5>
                  <p className="text-on-surface-variant text-sm mt-1">{currentSubject.resourcesByType.lectureNotes} Documents</p>
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-primary">Open Folder</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </div>
                </div>

                {/* Visual Assets Folder */}
                <div 
                  onClick={() => setSelectedFolder('visualAssets')}
                  className="group bg-surface-container-low rounded-2xl p-8 hover:bg-surface-container-lowest hover:shadow-ambient transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
                  </div>
                  <h5 className="font-bold text-on-surface text-lg">Visual Assets</h5>
                  <p className="text-on-surface-variant text-sm mt-1">{currentSubject.resourcesByType.visualAssets} Media Files</p>
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-primary">Open Folder</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </div>
                </div>

                {/* Archived Files Folder */}
                <div 
                  onClick={() => setSelectedFolder('archivedFiles')}
                  className="group bg-surface-container-low rounded-2xl p-8 hover:bg-surface-container-lowest hover:shadow-ambient transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
                  </div>
                  <h5 className="font-bold text-on-surface text-lg">Archived Files</h5>
                  <p className="text-on-surface-variant text-sm mt-1">{currentSubject.resourcesByType.archivedFiles} Miscellaneous</p>
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-primary">Open Folder</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {/* List View */}
                <div className="grid grid-cols-1 gap-3">
                  {['Powerpoints', 'Lecture Notes', 'Visual Assets', 'Archived Files'].map((folder, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedFolder(['powerpoints', 'lectureNotes', 'visualAssets', 'archivedFiles'][idx])}
                      className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-all group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`p-2 rounded text-2xl ${
                          idx === 0 ? 'bg-orange-100 text-orange-600' :
                          idx === 1 ? 'bg-blue-100 text-blue-600' :
                          idx === 2 ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {idx === 0 ? '📊' : idx === 1 ? '📝' : idx === 2 ? '🖼️' : '📦'}
                        </span>
                        <div>
                          <p className="font-medium text-on-surface">{folder}</p>
                          <p className="text-xs text-on-surface-variant">
                            {idx === 0 ? currentSubject.resourcesByType.powerpoints :
                             idx === 1 ? currentSubject.resourcesByType.lectureNotes :
                             idx === 2 ? currentSubject.resourcesByType.visualAssets :
                             currentSubject.resourcesByType.archivedFiles} items
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
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
