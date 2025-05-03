"use client"

import Link from "next/link"
import { Map, Plus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyState({ filtered = false, onClearFilters }) {
  if (filtered) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-neutral-900 p-3">
          <Map className="h-6 w-6 text-neutral-400" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-neutral-200">No matching stories found</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-400">
          We couldn't find any stories that match your current filters. Try adjusting your search or date range.
        </p>
        <Button
          onClick={onClearFilters}
          className="mt-4 inline-flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Clear filters</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-neutral-900 p-3">
        <Map className="h-6 w-6 text-neutral-400" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-neutral-200">No travel stories yet</h3>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        Start documenting your adventures by creating your first travel story.
      </p>
      <Link href="/new-story">
        <Button className="mt-4 inline-flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200">
          <Plus className="h-4 w-4" />
          <span>Create your first story</span>
        </Button>
      </Link>
    </div>
  )
}