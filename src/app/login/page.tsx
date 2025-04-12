"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Login failed")
            }

            // Store token and user data in localStorage
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("user", JSON.stringify(data.user))

            // Redirect to dashboard or home page
            router.push("/dashboard")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex h-screen bg-neutral-950">
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 opacity-50" />
                <div
                    className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(64, 64, 64, 0.15), transparent 80%)`,
                    }}
                />
                <div className="absolute bottom-0 left-0 p-8 z-10">
                    <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-neutral-300">Continue your journey with Wandr</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/" className="flex items-center mb-8">
                        <img src="/images/logo.svg" alt="Wandr Logo" className="h-8 w-8" />
                        <span className="ml-2 text-xl font-semibold text-white">Wandr</span>
                    </Link>
                    {error && (
                        <div className="mb-4 p-3 rounded-md bg-red-900/50 text-red-200 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-neutral-800/50 py-2 pl-10 pr-3 text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-600"
                                    placeholder="you@example.com"
                                    required
                                />
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 bg-neutral-800/50 py-2 pl-10 pr-3 text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-600"
                                    placeholder="••••••••"
                                    required
                                />
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center rounded-md bg-white py-2 px-4 text-sm font-semibold text-black hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-70"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-neutral-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-semibold text-white hover:text-neutral-300">
                            Sign up
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}