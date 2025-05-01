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
      description: "effortlessly track your adventures in a beautifully organized timeline.",
      icon: Calendar,
    },
    {
      title: "media gallery",
      description: "your photos and videos, all in one stunning, curated collection.",
      icon: Image,
    },
    {
      title: "smart search",
      description: "find that special moment instantly with intelligent search capabilities.",
      icon: Search,
    },
  ]

  return (
    <main className="relative flex min-h-[100dvh] flex-col justify-between bg-neutral-950 selection:bg-neutral-800 selection:text-neutral-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-50" />

      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(64, 64, 64, 0.15), transparent 80%)`,
        }}
      />

      <nav className="relative z-40 flex items-center justify-between p-4 sm:p-6">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className="inline-flex items-center group">
            <div className="flex items-center">
              <img src="/images/logo.svg" alt="wandr logo" className="h-6 w-6 sm:h-7 sm:w-7 transition-transform" />
              <span className="ml-2 sm:ml-3 font-serif text-base sm:text-lg tracking-[0.2em] text-neutral-300 group-hover:text-neutral-200 flex items-center">
                wandr
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Link href="/login">
            <button className="group text-xs text-neutral-400 transition-colors hover:text-neutral-200 sm:text-sm">
              <span className="relative">
                sign in
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-300 transition-all duration-300 ease-out group-hover:w-full" />
              </span>
            </button>
          </Link>
        </motion.div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col">
        <motion.div
          className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-100">
              tell your story
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-neutral-400">
              a minimalist space for your journey. capture moments, share experiences, preserve memories.
            </p>

            <motion.div className="mt-6">
              <Link href="/signup">
                <button className="group relative text-xs sm:text-sm text-neutral-300 transition-colors hover:text-neutral-100">
                  <span className="flex items-center">
                    start your journey
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-300 transition-all duration-300 ease-out group-hover:w-full" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 px-4 sm:px-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:gap-8">
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
                      {index !== features.length - 1 && (
                        <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-neutral-800/50 sm:block" />
                      )}

                      <div className="relative">
                        <div className="flex items-center justify-center space-x-3">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300" />
                          <h3 className="text-xs sm:text-sm font-medium text-neutral-300 transition-colors duration-300 group-hover:text-neutral-200">
                            {feature.title}
                          </h3>
                        </div>

                        <div className="relative mt-2 px-2 text-center sm:px-4">
                          <p className="text-[10px] sm:text-xs font-light text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
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
      </div>

      <motion.footer
        className="relative z-40 border-t border-neutral-800 px-4 sm:px-6 py-3 mt-8 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] sm:text-xs font-light leading-relaxed text-neutral-600 text-center sm:text-left">
              wandr: your digital journal, built to treasure every memory you create.
            </p>
            <p className="text-[10px] sm:text-xs font-light tracking-widest text-neutral-500 text-center sm:text-right">
              made with <span className="text-neutral-400">♡</span> by
              <Link
                href="https://www.x.com/01shrvan"
                target="_blank"
                className="text-neutral-400 transition-colors hover:text-neutral-200 ml-1 hover:underline"
              >
                shrvan
              </Link>
            </p>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
