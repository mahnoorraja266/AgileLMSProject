"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LoginForm from "@/components/LoginForm"
import Dashboard from "@/components/Dashboard"

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  // Show Dashboard after successful login
  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />
  }

  // Show Login Page
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative">
        {/* Asymmetric Decorative Elements */}
        <div className="absolute top-40 left-[10%] w-64 h-64 bg-primary-fixed-dim/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-tertiary-fixed/10 rounded-full blur-3xl -z-10"></div>
        
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </main>

      <Footer />
    </div>
  )
}
