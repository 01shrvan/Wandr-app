"use client"

import { useState, useEffect } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { Calendar, Loader2, MapPin, Search } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import StoryGrid from "@/components/dashboard/StoryGrid"
import EmptyState from "@/components/dashboard/EmptyState"
import StoryFilters from "@/components/dashboard/StoryFilters"

export default function Dashboard() {
    const { isAuthenticated } = useAuth()
    const [stories, setStories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useState({
        query: "",
        startDate: null as Date | null,
        endDate: null as Date | null,
    })

    // Fetch stories
    useEffect(() => {
        if (!isAuthenticated) return

        async function fetchStories() {
            setIsLoading(true)
            try {
                let url = '/api/stories'

                // Build query parameters
                const params = new URLSearchParams()

                if (searchParams.query) {
                    params.append('search', searchParams.query)
                }

                if (searchParams.startDate && searchParams.endDate) {
                    params.append('startDate', searchParams.startDate.getTime().toString())
                    params.append('endDate', searchParams.endDate.getTime().toString())
                }

                if (params.toString()) {
                    url += `?${params.toString()}`
                }

                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })

                const data = await response.json()

                if (data.stories) {
                    setStories(data.stories)
                }
            } catch (error) {
                console.error("Failed to fetch stories:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchStories()
    }, [isAuthenticated, searchParams])

    const handleSearch = (query) => {
        setSearchParams(prev => ({ ...prev, query }))
    }

    const handleDateFilter = (startDate, endDate) => {
        setSearchParams(prev => ({ ...prev, startDate, endDate }))
    }

    const clearFilters = () => {
        setSearchParams({
            query: "",
            startDate: null,
            endDate: null,
        })
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-neutral-950 text-neutral-200">
                <header className="border-b border-neutral-800 py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <img src="/images/logo.svg" alt="Wandr logo" className="h-6 w-6" />
                            <span className="font-serif tracking-wider text-neutral-100">wandr</span>
                        </Link>
                        <Link href="/new-story">
                            <Button className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-xs">
                                New Story
                            </Button>
                        </Link>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-2xl font-serif tracking-wide text-neutral-100 mb-2">Your Travel Stories</h1>
                        <p className="text-neutral-400 text-sm">Revisit your adventures and create new memories</p>
                    </div>

                    <StoryFilters
                        searchValue={searchParams.query}
                        startDate={searchParams.startDate}
                        endDate={searchParams.endDate}
                        onSearch={handleSearch}
                        onDateFilter={handleDateFilter}
                        onClearFilters={clearFilters}
                    />

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-neutral-500" />
                        </div>
                    ) : stories.length > 0 ? (
                        <StoryGrid stories={stories} />
                    ) : (
                        <EmptyState
                            filtered={!!(searchParams.query || searchParams.startDate || searchParams.endDate)}
                            onClearFilters={clearFilters}
                        />
                    )}
                </main>
            </div>
        </ProtectedRoute>
    )
}