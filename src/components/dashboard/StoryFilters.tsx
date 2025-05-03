"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoryFilters({
  searchValue = "",
  startDate = null,
  endDate = null,
  onSearch,
  onDateFilter,
  onClearFilters
}) {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [localStartDate, setLocalStartDate] = useState(startDate)
  const [localEndDate, setLocalEndDate] = useState(endDate)
  const datePickerRef = useRef(null)

  // Handle outside click for date picker
  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Update local state when props change
  useEffect(() => {
    setLocalSearchValue(searchValue)
    setLocalStartDate(startDate)
    setLocalEndDate(endDate)
  }, [searchValue, startDate, endDate])

  const handleSearchChange = (e) => {
    setLocalSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    onSearch(localSearchValue)
  }

  const handleDateChange = (field, value) => {
    if (field === 'start') {
      setLocalStartDate(value)
    } else {
      setLocalEndDate(value)
    }
  }

  const applyDateFilter = () => {
    if (localStartDate && localEndDate) {
      onDateFilter(localStartDate, localEndDate)
      setShowDatePicker(false)
    }
  }

  const formatDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const hasFilters = searchValue || (startDate && endDate)

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by title, story, or location..."
              value={localSearchValue}
              onChange={handleSearchChange}
              className="w-full rounded-md border border-neutral-800 bg-neutral-900 py-2 pl-10 pr-4 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700"
            />
            {localSearchValue && (
              <button
                type="button"
                onClick={() => setLocalSearchValue("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4 text-neutral-500 hover:text-neutral-300" />
              </button>
            )}
          </div>
        </form>

        {/* Date filter button */}
        <div className="relative" ref={datePickerRef}>
          <Button
            type="button"
            onClick={() => setShowDatePicker(!showDatePicker)}
            className={`flex items-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-200 px-4 py-2 h-10 ${
              (startDate && endDate) ? "border-neutral-600" : ""
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : "Filter by date"}
            </span>
          </Button>

          {/* Date picker dropdown */}
          {showDatePicker && (
            <div className="absolute right-0 top-12 z-10 w-72 rounded-md border border-neutral-800 bg-neutral-900 p-4 shadow-lg">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={localStartDate ? localStartDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => handleDateChange('start', e.target.value ? new Date(e.target.value) : null)}
                    className="w-full rounded-md border border-neutral-800 bg-neutral-900 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">End Date</label>
                  <input
                    type="date"
                    value={localEndDate ? localEndDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => handleDateChange('end', e.target.value ? new Date(e.target.value) : null)}
                    className="w-full rounded-md border border-neutral-800 bg-neutral-900 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                    min={localStartDate ? localStartDate.toISOString().split('T')[0] : ''}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    onClick={() => {
                      setLocalStartDate(null)
                      setLocalEndDate(null)
                    }}
                    className="bg-transparent hover:bg-neutral-800 text-neutral-400 text-xs"
                  >
                    Clear
                  </Button>
                  <Button
                    type="button"
                    onClick={applyDateFilter}
                    disabled={!localStartDate || !localEndDate}
                    className="bg-neutral-700 hover:bg-neutral-600 text-neutral-100 text-xs"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Active filters display */}
      {hasFilters && (
        <div className="flex items-center space-x-2">
          <span className="text-xs text-neutral-400">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {searchValue && (
              <span className="inline-flex items-center rounded-full bg-neutral-800 px-2 py-1 text-xs">
                {searchValue.length > 15 ? `${searchValue.substring(0, 15)}...` : searchValue}
                <button onClick={() => onSearch("")} className="ml-1">
                  <X className="h-3 w-3 text-neutral-400 hover:text-neutral-200" />
                </button>
              </span>
            )}
            {startDate && endDate && (
              <span className="inline-flex items-center rounded-full bg-neutral-800 px-2 py-1 text-xs">
                {formatDate(startDate)} - {formatDate(endDate)}
                <button onClick={() => onDateFilter(null, null)} className="ml-1">
                  <X className="h-3 w-3 text-neutral-400 hover:text-neutral-200" />
                </button>
              </span>
            )}
            <button
              onClick={onClearFilters}
              className="text-xs text-neutral-400 hover:text-neutral-200 underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  )
}