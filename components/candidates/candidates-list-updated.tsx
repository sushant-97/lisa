// path: components/candidates/candidates-list-updated.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useState } from "react"

const filters = [
  { id: "all", name: "All (11)", active: true },
  { id: "ai-matches", name: "AI matches (10)", active: false },
  { id: "sourced", name: "Sourced (0)", active: false },
  { id: "applied", name: "Applied (1)", active: false },
]

const candidates = [
  {
    id: "1",
    name: "Mia Persona",
    position: "Associate Customer Success Manager",
    initials: "MP",
    color: "bg-amber-100",
    active: true,
    aiMatch: true,
  },
  {
    id: "2",
    name: "Lil's Thompson",
    position: "Senior Outbound Sales Developer",
    initials: "LT",
    color: "bg-blue-100",
    active: false,
    aiMatch: true,
  },
  {
    id: "3",
    name: "Taylor Bennett",
    position: "Sales Representative",
    initials: "TB",
    color: "bg-purple-100",
    active: false,
    aiMatch: true,
  },
  {
    id: "4",
    name: "Sam Samberg",
    position: "Senior Product Designer",
    initials: "SS",
    color: "bg-cyan-100",
    active: false,
    aiMatch: true,
  },
  {
    id: "5",
    name: "Greatest Boss Scott",
    position: "Customer Success Manager",
    initials: "GS",
    color: "bg-pink-100",
    active: false,
    aiMatch: true,
  },
  {
    id: "6",
    name: "Jordan Mitchell",
    position: "Sales Engineer",
    initials: "JM",
    color: "bg-teal-100",
    active: false,
    aiMatch: true,
  },
]

export function CandidatesListUpdated() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-full border rounded-md overflow-hidden bg-background">
      <div className="p-4 bg-blue-50">
        <div className="font-medium mb-2">Filters</div>
        <div className="relative mb-3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search by name"
            className="pl-8 text-sm h-9 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="text-xs font-medium mb-1.5 text-gray-600">
          Key Filters (Matching)
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <Button variant="outline" size="sm" className="h-7 justify-start text-xs bg-white">
            Skills
          </Button>
          <Button variant="outline" size="sm" className="h-7 justify-start text-xs bg-white">
            Salary
          </Button>
          <Button variant="outline" size="sm" className="h-7 justify-start text-xs bg-white">
            Location
          </Button>
          <Button variant="outline" size="sm" className="h-7 justify-start text-xs bg-white">
            Exp
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={cn(
              "flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-50",
              candidate.active ? "bg-blue-50" : "",
            )}
          >
            <div
              className={cn(
                "h-9 w-9 rounded-full flex items-center justify-center text-sm font-medium",
                candidate.color,
              )}
            >
              {candidate.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm truncate">{candidate.name}</p>
                {candidate.aiMatch && (
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">AI MATCH</span>
                )}
              </div>
              <p className="text-xs text-gray-500 truncate">{candidate.position}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}