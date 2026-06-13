'use client'

import { useState, useRef } from 'react'

interface Certification {
  id: string
  name: string
  issuedBy: string
  date: string
  category: 'industry' | 'professional' | 'creative' | 'academic'
  icon: string
  iconColor: string
  iconBg: string
  issueId: string
  imageUrl?: string
}

const INITIAL_CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'Google AI Essentials',
    issuedBy: 'Google',
    date: 'Oct 2023',
    category: 'industry',
    icon: 'smart_toy',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    issueId: 'G-AI-88219',
  },
  {
    id: '2',
    name: 'Meta AI Engineering',
    issuedBy: 'Facebook (Meta)',
    date: 'Sep 2023',
    category: 'professional',
    icon: 'engineering',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    issueId: 'META-ENG-442',
  },
  {
    id: '3',
    name: 'Advanced UI/UX Design',
    issuedBy: 'Coursera / Google',
    date: 'Aug 2023',
    category: 'creative',
    icon: 'brush',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    issueId: 'COURS-UX-721',
  },
  {
    id: '4',
    name: 'Machine Learning Specialist',
    issuedBy: 'IQRA University',
    date: 'July 2023',
    category: 'academic',
    icon: 'workspace_premium',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    issueId: 'IU-ML-0021',
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  industry: 'Industry',
  professional: 'Professional',
  creative: 'Creative',
  academic: 'Academic',
}

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>(INITIAL_CERTIFICATIONS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    issuedBy: '',
    date: '',
    category: 'industry' as const,
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAddCertificate = () => {
    if (!formData.name.trim() || !formData.issuedBy.trim() || !formData.date.trim()) {
      alert('Please fill in all fields')
      return
    }

    const newCert: Certification = {
      id: Date.now().toString(),
      name: formData.name,
      issuedBy: formData.issuedBy,
      date: formData.date,
      category: formData.category,
      icon: 'workspace_premium',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      issueId: `NEW-${Date.now().toString().slice(-4).toUpperCase()}`,
      imageUrl: imagePreview || undefined,
    }

    setCertifications([newCert, ...certifications])
    setFormData({ name: '', issuedBy: '', date: '', category: 'industry' })
    setImagePreview(null)
    setIsModalOpen(false)
  }

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Main Content */}
      <div className="p-12 space-y-12 flex-1">
        {/* Header Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-5xl font-bold text-primary tracking-tight mb-2">Professional Achievements</h1>
              <p className="text-slate-600">Manage and showcase your industry-recognized certifications.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-high text-on-surface font-bold py-2.5 px-5 rounded-xl text-sm flex items-center gap-2 hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
                Share Profile
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white font-bold py-2.5 px-5 rounded-xl text-sm flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined text-lg">add_circle</span>
                Add Certificate
              </button>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm shadow-blue-900/5 border border-outline-variant/20 group hover:border-primary/30 transition-all flex flex-col h-full"
              >
                {/* Header with Icon and Category */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl ${cert.iconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-3xl ${cert.iconColor}`}>{cert.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded uppercase tracking-wider">
                    {CATEGORY_LABELS[cert.category]}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-on-surface text-lg group-hover:text-primary transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-sm text-on-surface-variant mt-2">Issued by {cert.issuedBy}</p>

                {/* Metadata and Actions */}
                <div className="mt-auto pt-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant">
                    <span>Issue Date: {cert.date}</span>
                    <span>ID: {cert.issueId}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-grow bg-primary/5 text-primary py-2 px-4 rounded-lg text-xs font-bold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      View Certificate
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transcript & Integration Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          <div className="bg-surface-container-low rounded-2xl p-8">
            <h4 className="text-xl font-bold text-on-surface mb-4">Official Transcript</h4>
            <p className="text-on-surface-variant text-sm mb-6">Download your latest academic transcript verified by the registrar's office.</p>
            <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-xl shadow-sm shadow-blue-900/5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Official_Transcript_RajaM.pdf</p>
                  <p className="text-xs text-on-surface-variant">Last updated: 1 week ago</p>
                </div>
              </div>
              <button className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg hover:opacity-90">
                Download
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-container rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-9xl">school</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Portfolio Integration</h4>
              <p className="text-white/80 text-sm mb-6 max-w-sm">
                Connect your LinkedIn or personal portfolio to automatically sync your verified university achievements.
              </p>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white py-2.5 px-6 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2">
                Connect Accounts <span className="material-symbols-outlined text-sm">sync</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Progress Footer */}
      <div className="px-12 py-4 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-on-surface-variant">Certification Credits Progress</span>
          <span className="text-xs font-bold text-primary">{certifications.length} of 5 Required ({Math.round((certifications.length / 5) * 100)}%)</span>
        </div>
        <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-fixed transition-all duration-1000"
            style={{ width: `${(certifications.length / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal */}
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-lg shadow-blue-900/20 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Add New Certificate</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-surface-container-low rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Certification Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., AWS Solutions Architect"
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Issued By Field */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Issued By</label>
                <input
                  type="text"
                  value={formData.issuedBy}
                  onChange={(e) => setFormData({ ...formData, issuedBy: e.target.value })}
                  placeholder="e.g., Amazon Web Services"
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Date Field */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Date Issued</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  placeholder="e.g., Dec 2023"
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Category Field */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="industry">Industry</option>
                  <option value="professional">Professional</option>
                  <option value="creative">Creative</option>
                  <option value="academic">Academic</option>
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Certificate Image (Optional)</label>
                <div
                  onClick={handleImageButtonClick}
                  className="w-full border-2 border-dashed border-outline-variant/30 rounded-lg p-6 text-center hover:border-primary/30 transition-colors cursor-pointer"
                >
                  {imagePreview ? (
                    <div className="space-y-3">
                      <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
                      <p className="text-xs text-on-surface-variant">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <span className="material-symbols-outlined text-3xl text-on-surface-variant inline-block">image</span>
                      <p className="text-sm text-on-surface-variant">Click to upload certificate image</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-surface-container-high text-on-surface font-bold py-3 rounded-lg hover:bg-surface-container-highest transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCertificate}
                  className="flex-1 bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all"
                >
                  Save Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
