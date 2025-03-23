"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

const filters = [
  { id: "all", name: "All jobs", count: 152, active: true, color: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100" },
  { id: "draft", name: "Draft", count: 108, active: false, color: "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100" },
  { id: "published", name: "Published", count: 2, active: false, color: "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100" },
]

export function JobsFilter() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search by title, location, or company" className="pl-8" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.active ? "default" : "outline"}
              className={cn(
                filter.active ? "relative font-medium" : "hover:bg-muted"
              )}
            >
              {filter.name}
              <Badge variant="secondary" className={cn("ml-2", filter.color)}>
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md dark:bg-green-900/20 dark:border-green-800">
        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white dark:bg-green-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="font-medium text-green-800 dark:text-green-200">2/20 published jobs</p>
          <p className="text-sm text-green-700 dark:text-green-300">Your published jobs are visible to candidates on remote.com/jobs</p>
        </div>
      </div>
    </div>
  )
}