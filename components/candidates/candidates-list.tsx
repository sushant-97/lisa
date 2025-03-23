"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

const filters = [
  { id: "all", name: "All", count: 11, active: true },
  { id: "ai-matches", name: "AI matches", count: 10, active: false },
  { id: "sourced", name: "Sourced", count: 0, active: false },
  { id: "applied", name: "Applied", count: 1, active: false },
]

const candidates = [
  {
    id: "1",
    name: "Mia Persona",
    position: "Associate Customer Success Manager",
    initials: "MP",
    color: "bg-amber-100 text-amber-800",
    active: true,
    aiMatch: true,
  },
  {
    id: "2",
    name: "Lil's Thompson",
    position: "Senior Outbound Sales Developer",
    initials: "LT",
    color: "bg-blue-100 text-blue-800",
    active: false,
    aiMatch: true,
  },
  {
    id: "3",
    name: "Taylor Bennett",
    position: "Sales Representative",
    initials: "TB",
    color: "bg-purple-100 text-purple-800",
    active: false,
    aiMatch: true,
  },
  {
    id: "4",
    name: "Sam Samberg",
    position: "Senior Product Designer",
    initials: "SS",
    color: "bg-cyan-100 text-cyan-800",
    active: false,
    aiMatch: true,
  },
  {
    id: "5",
    name: "Greatest Boss Scott",
    position: "Customer Success Manager",
    initials: "GS",
    color: "bg-pink-100 text-pink-800",
    active: false,
    aiMatch: true,
  },
  {
    id: "6",
    name: "Jordan Mitchell",
    position: "Sales Engineer",
    initials: "JM",
    color: "bg-teal-100 text-teal-800",
    active: false,
    aiMatch: true,
  },
]

export function CandidatesList() {
  return (
    <div className="border rounded-lg bg-background">
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">Leads</h3>
        <p className="text-sm text-muted-foreground mb-4">
          These are candidates from multiple sources (applications, sourcing, and recommendations by AI) ready for you
          to review.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.active ? "default" : "outline"}
              size="sm"
              className={cn(filter.active ? "bg-primary text-primary-foreground font-medium" : "")}
            >
              {filter.name} ({filter.count})
            </Button>
          ))}
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search by name or position" className="pl-8" />
        </div>

        <div className="space-y-2">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={cn(
                "flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted",
                candidate.active ? "bg-muted border border-border" : "",
              )}
            >
              <div
                className={cn(
                  "h-12 w-12 rounded-full flex items-center justify-center text-sm font-medium",
                  candidate.color,
                )}
              >
                {candidate.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{candidate.name}</p>
                  {candidate.aiMatch && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">AI MATCH</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">This candidate was matched by our AI based on their skills and experience</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">{candidate.position}</p>
              </div>
              {candidate.active ? (
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 12h-15m0 0L8 17.5M2.5 12L8 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              ) : (
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}