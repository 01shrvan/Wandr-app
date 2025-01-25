"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Calendar, Image, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  useEffect(() => {
    let frameId: number
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  const features = [
    {
      title: "calendar view",
      description: "Track your travels like never before",
      icon: Calendar,
    },
    {
      title: "media gallery",
      description: "Your memories, beautifully organized",
      icon: Image,
    },
    {
      title: "smart search",
      description: "Find any moment in seconds",
      icon: Search,
    },
  ]

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-neutral-950 selection:bg-neutral-800 selection:text-neutral-200 flex flex-col justify-center">
      {/* Enhanced cursor gradient effect */}
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(64, 64, 64, 0.15), transparent 80%)`,
        }}
      />

      {/* Minimal navigation */}
      <nav className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between p-4 sm:p-6 md:p-8">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.svg"
              alt="Wandr Logo"
              className="h-5 w-5 transition-transform group-hover:rotate-12"
            />
            <span className="font-serif text-lg tracking-[0.2em] text-neutral-400 sm:text-base uppercase group-hover:text-neutral-300">
              wλndr
            </span>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <button className="group text-xs text-neutral-500 transition-colors hover:text-neutral-300 sm:text-sm">
            <span className="relative">
              sign in
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-300 transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </button>
        </motion.div>
      </nav>

      {/* Main content centered vertically and horizontally */}
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
        {/* Hero section - centered and adjusted spacing */}
        <motion.div
          className="relative z-10 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-serif text-4xl font-extralight tracking-tight text-neutral-200 sm:text-5xl md:text-6xl">
            Memories Never Fade
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-500 sm:mt-6">
            Your digital time capsule. Capture, relive, and cherish every moment of your journey.
          </p>

          <motion.div className="mt-6 sm:mt-8">
            <button className="group relative text-sm text-neutral-300 transition-colors hover:text-neutral-100 sm:text-base">
              <span className="flex items-center">
                start exploring
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-300 transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature section - improved responsive grid with absolute positioning */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 w-full px-6 sm:bottom-12 md:bottom-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  onMouseEnter={() => setHoveredFeature(feature.title)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <motion.div
                    className="relative overflow-hidden py-2"
                    animate={{
                      y: hoveredFeature === feature.title ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Vertical line for visual separation on desktop */}
                    {index !== features.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-neutral-800/50 sm:block" />
                    )}

                    <div className="relative">
                      <div className="flex items-center justify-center space-x-3">
                        <Icon className="h-4 w-4 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400" />
                        <h3 className="text-sm font-light text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                          {feature.title}
                        </h3>
                      </div>

                      <div className="relative mt-2 px-4 text-center">
                        <p className="text-xs font-extralight text-neutral-600 transition-colors duration-300 group-hover:text-neutral-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </main>
  )
}