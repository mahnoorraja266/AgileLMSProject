'use client'

import { useState, useRef, useEffect } from 'react'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false)
  const [typographyScale, setTypographyScale] = useState('standard')
  const [isDarkModeOn, setIsDarkModeOn] = useState(false)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showChangeImageModal, setShowChangeImageModal] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [profileData, setProfileData] = useState({
    name: 'Raja Mahnoor Abbas',
    id: 'IU-2023-9842',
    email: 'mahnoor.r@iqra.edu.pk',
    department: 'Computer Science & AI',
  })

  const [editProfileData, setEditProfileData] = useState(profileData)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [passwordData, setPasswordData] = useState({
    previous: '',
    new: '',
    confirm: '',
  })

  // Apply dark mode to HTML element
  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkModeOn) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [isDarkModeOn])

  // Apply typography scale
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.style.fontSize = typographyScale === 'small' ? '14px' : typographyScale === 'large' ? '18px' : '16px'
  }, [typographyScale])

  const handleSaveProfile = () => {
    setProfileData(editProfileData)
    setShowEditProfileModal(false)
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

  const handleSaveImage = () => {
    if (imagePreview) {
      console.log('[v0] Profile image updated')
      setShowChangeImageModal(false)
      setImagePreview(null)
    }
  }

  const handleSavePassword = () => {
    if (!passwordData.previous || !passwordData.new || !passwordData.confirm) {
      alert('Please fill in all password fields')
      return
    }
    if (passwordData.new !== passwordData.confirm) {
      alert('New passwords do not match')
      return
    }
    console.log('[v0] Password updated')
    setPasswordData({ previous: '', new: '', confirm: '' })
    setShowPasswordModal(false)
  }

  return (
    <div className="flex-1 flex flex-col bg-surface dark:bg-slate-900 transition-colors duration-300">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-12">
        {/* Page Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-primary dark:text-blue-400 mb-2">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">Customize your scholastic experience. Adjust your security parameters, notification preferences, and interface aesthetics to suit your learning journey.</p>
        </section>

        {/* Account Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-bold text-primary dark:text-blue-400 tracking-widest uppercase">Account</h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Information Card */}
            <div className="lg:col-span-2 bg-surface-container-lowest dark:bg-slate-800 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary dark:text-blue-400">person</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface dark:text-white">Personal Information</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Update your public profile and identity details.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEditProfileData(profileData)
                    setShowEditProfileModal(true)
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-700 text-on-surface dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">FULL NAME</span>
                  <p className="text-lg font-semibold text-on-surface dark:text-white mt-1">{profileData.name}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">UNIVERSITY ID</span>
                  <p className="text-lg font-semibold text-on-surface dark:text-white mt-1">{profileData.id}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">EMAIL ADDRESS</span>
                  <p className="text-lg font-semibold text-on-surface dark:text-white mt-1">{profileData.email}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">DEPARTMENT</span>
                  <p className="text-lg font-semibold text-on-surface dark:text-white mt-1">{profileData.department}</p>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-700/50 flex items-center gap-6">
                <div className="relative group w-20 h-20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhbyOESjBhGFZRwA0I13SkzPSDToKlbGYRucSJooIyYO-tIj54jIRcL77P5TQa6e7gGkBS5ugLC8FXAn007YAhgPgoRinYofddKrpCWyWrfZLeOhfVyDOFdkRlqpZsSqEOMCyOz7jK6Wg5gb7y357fJWPe5tzqff0qk-eUNp7JbiAobQR9X67YyQH3zCosS6A81FDW2mPClv1QmFdGJWxzaN-3CO0Lco6BQOx40KGCdDZkJ9xS_IaUaiFLgO8YmkMX82SjQukUFwN_"
                    alt="Profile"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-on-surface dark:text-white">Profile Imagery</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Recommended size: 512x512px. Format: JPG or PNG.</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowChangeImageModal(true)}
                    className="text-primary dark:text-blue-400 text-sm font-bold hover:underline"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400">security</span>
                </div>
                <h4 className="font-bold text-on-surface dark:text-white">Security</h4>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-on-surface dark:text-white">2-Factor Auth</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-200 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200">ACTIVE</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Secure your login with mobile verification.</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-700"></div>

                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full group cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-on-surface dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">Update Password</span>
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-left mt-1">Last changed: 3 months ago</p>
                </button>

                <div className="h-px bg-slate-200 dark:bg-slate-700"></div>

                <div className="group cursor-pointer">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-on-surface dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">Login Sessions</span>
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-left mt-1">3 active sessions in Karachi, PK</p>
                </div>

                <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary to-blue-800 dark:from-blue-600 dark:to-blue-800 text-white font-bold rounded-2xl hover:opacity-90 transition-opacity">
                  Save Security Changes
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-bold text-primary dark:text-blue-400 tracking-widest uppercase">Preferences</h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Interface Card */}
            <div className="lg:col-span-2 bg-surface-container-lowest dark:bg-slate-800 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400">palette</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Interface</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tailor your workspace.</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface dark:text-white">Dark Mode</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Optimized for night study sessions.</span>
                  </div>
                  <button
                    onClick={() => setIsDarkModeOn(!isDarkModeOn)}
                    className={`w-14 h-8 rounded-full relative flex items-center px-1 transition-all ${
                      isDarkModeOn ? 'bg-primary dark:bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                        isDarkModeOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    ></div>
                  </button>
                </div>

                {/* Typography Scale */}
                <div className="flex flex-col gap-4">
                  <span className="font-semibold text-on-surface dark:text-white">Typography Scale</span>
                  <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-700 p-2 rounded-2xl">
                    {['small', 'standard', 'large'].map((scale) => (
                      <button
                        key={scale}
                        onClick={() => setTypographyScale(scale)}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                          typographyScale === scale
                            ? 'bg-white dark:bg-slate-800 text-primary dark:text-blue-400 shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400'
                        }`}
                      >
                        {scale.charAt(0).toUpperCase() + scale.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Center Card */}
            <div className="lg:col-span-3 bg-surface-container-lowest dark:bg-slate-800 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">notifications_active</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface dark:text-white">Notification Center</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Control how and when you receive academic updates.</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Email Digest', description: 'Weekly summary of grades and assignments.', icon: 'mail', checked: true },
                  { label: 'SMS Alerts', description: 'Immediate notifications for class cancellations.', icon: 'sms', checked: false },
                  { label: 'Portal Announcements', description: 'System-wide university updates.', icon: 'campaign', checked: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-on-surface dark:text-white">{item.label}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item.description}</span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="w-5 h-5 rounded cursor-pointer accent-primary dark:accent-blue-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Buttons */}
      <div className="px-12 py-6 bg-surface-container-low dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex gap-4 justify-end">
        <button className="px-8 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-on-surface dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
          Discard Changes
        </button>
        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-800 dark:from-blue-600 dark:to-blue-800 text-white font-bold hover:opacity-90 transition-opacity">
          Apply Settings
        </button>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfileModal && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowEditProfileModal(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400">Edit Profile</h2>
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">Full Name</label>
                <input
                  type="text"
                  value={editProfileData.name}
                  onChange={(e) => setEditProfileData({ ...editProfileData, name: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">University ID</label>
                <input
                  type="text"
                  value={editProfileData.id}
                  onChange={(e) => setEditProfileData({ ...editProfileData, id: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  value={editProfileData.email}
                  onChange={(e) => setEditProfileData({ ...editProfileData, email: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">Department</label>
                <input
                  type="text"
                  value={editProfileData.department}
                  onChange={(e) => setEditProfileData({ ...editProfileData, department: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="flex-1 bg-slate-200 dark:bg-slate-700 text-on-surface dark:text-white font-bold py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className="flex-1 bg-primary dark:bg-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Image Modal */}
      {showChangeImageModal && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowChangeImageModal(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400">Change Profile Picture</h2>
              <button
                onClick={() => setShowChangeImageModal(false)}
                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-primary dark:hover:border-blue-400 transition-colors cursor-pointer mb-6"
            >
              {imagePreview ? (
                <div className="space-y-3">
                  <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
                  <p className="text-xs text-slate-600 dark:text-slate-400">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-3xl text-slate-400 inline-block">image</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Click to upload profile image</p>
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

            <div className="flex gap-3">
              <button
                onClick={() => setShowChangeImageModal(false)}
                className="flex-1 bg-slate-200 dark:bg-slate-700 text-on-surface dark:text-white font-bold py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveImage}
                className="flex-1 bg-primary dark:bg-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Password Modal */}
      {showPasswordModal && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowPasswordModal(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400">Update Password</h2>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">Previous Password</label>
                <input
                  type="password"
                  value={passwordData.previous}
                  onChange={(e) => setPasswordData({ ...passwordData, previous: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">New Password</label>
                <input
                  type="password"
                  value={passwordData.new}
                  onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface dark:text-white mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 bg-slate-200 dark:bg-slate-700 text-on-surface dark:text-white font-bold py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePassword}
                className="flex-1 bg-primary dark:bg-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
