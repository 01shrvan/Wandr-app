"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MapPin, Calendar } from "lucide-react"

export default function TravelStoryCard({ story }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Link href={`/story/${story.id}`}>
      <div 
        className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-neutral-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${story.image_url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
          
          {/* Optional favorite indicator */}
          {story.is_favorite && (
            <div className="absolute right-3 top-3 rounded-full bg-neutral-900/80 p-1.5">
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-neutral-100 line-clamp-1">{story.title}</h3>
          
          <div className="mt-2 flex items-center text-xs text-neutral-400">
            <MapPin className="mr-1 h-3 w-3" />
            <span className="line-clamp-1">
              {Array.isArray(story.visited_location) 
                ? story.visited_location.join(", ")
                : story.visited_location}
            </span>
          </div>
          
          <div className="mt-1 flex items-center text-xs text-neutral-400">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{formatDate(story.visited_date)}</span>
          </div>
          
          <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{story.story}</p>
        </div>
        
        {/* Hover overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-neutral-900/70 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
            View Details
          </span>
        </div>
      </div>
    </Link>
  )
}