"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react"
import { useRouter } from "next/navigation"

type AuthContextType = {
  token: string | null
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken")

    if (storedToken) {
      setToken(storedToken)
    }

    setLoading(false)
  }, [])

  const login = (newToken: string) => {
    setToken(newToken)
    localStorage.setItem("accessToken", newToken)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("accessToken")
    router.push("/login")
  }

  const value = {
    token,
    login,
    logout,
    isAuthenticated: !!token,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
