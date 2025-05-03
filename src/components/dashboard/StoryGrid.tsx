"use client"

import TravelStoryCard from "./TravelStoryCard"

export default function StoryGrid({ stories }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {stories.map((story) => (
        <TravelStoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}