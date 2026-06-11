"use client"

import { useState } from "react"

interface LoginFormProps {
  onLoginSuccess: () => void
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock authentication - check for admin/admin credentials
    if (email === "admin" && password === "admin") {
      onLoginSuccess()
    } else {
      setError("Invalid credentials. Use admin/admin to login.")
    }
    
    setIsLoading(false)
  }

  const handleMicrosoftLogin = () => {
    // Mock Microsoft 365 login - just trigger success
    onLoginSuccess()
  }

  return (
    <div className="w-full max-w-md">
      {/* Login Card */}
      <div className="bg-surface-container-lowest rounded-xl p-10 shadow-[0_4px_20px_rgba(0,45,132,0.04)]">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Login to LMS</h1>
          <p className="text-on-surface-variant text-sm">
            Welcome back. Please enter your credentials to access your courses.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Error Message */}
          {error && (
            <div className="bg-error-container text-on-error-container px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-on-surface" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-surface-container-low border-0 border-b-2 border-transparent focus:border-surface-tint focus:ring-0 focus:bg-surface-container-lowest transition-all rounded-t-lg text-on-surface placeholder:text-outline"
                id="email"
                name="email"
                placeholder="student@iqra.edu.pk"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-semibold text-on-surface" htmlFor="password">
                Password
              </label>
              <a
                className="text-sm font-medium text-primary hover:underline underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-surface-container-low border-0 border-b-2 border-transparent focus:border-surface-tint focus:ring-0 focus:bg-surface-container-lowest transition-all rounded-t-lg text-on-surface placeholder:text-outline"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Login Actions */}
          <div className="pt-2 space-y-4">
            <button
              className="w-full signature-gradient text-white py-3 rounded-lg font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-outline-variant opacity-20"></div>
              <span className="flex-shrink mx-4 text-outline text-xs uppercase tracking-widest font-bold">
                Or continue with
              </span>
              <div className="flex-grow border-t border-outline-variant opacity-20"></div>
            </div>

            <button
              className="w-full bg-surface-container-highest text-on-surface py-3 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
              type="button"
              onClick={handleMicrosoftLogin}
            >
              <img
                alt="Microsoft Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALz_XsoiqTGmVTgFiOhfV5hgEpUO-0YgHEzerJB6QrjEmxQtQGCeVZIXpyY8smxztZnIVcWz2pt6r81QtqnXCTyw1Qtuwgpt88E8oraU4LBaQG-DU6brnWoIxrPCLUL0AFykbQ72d6qi0Zfka3OmLMNWU5jQ8Rrr-Bns_0EUzbSOauk0gV9e7s82GA8wXur9ehDJOE7Z-tyboxCFE7b82USa6jEDYKXEg_EU6YaeqNfQgpNnXzk7fov9d4lpjS1xT-J0kG2LAD4ks"
              />
              Login with Microsoft 365
            </button>
          </div>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        {"Don't have an account? "}
        <a className="text-primary font-bold hover:underline underline-offset-4" href="#">
          Contact Admissions
        </a>
      </p>
    </div>
  )
}
