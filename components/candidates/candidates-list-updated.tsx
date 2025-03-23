"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function CandidatesList() {
  return (
    <div className="border rounded-lg bg-background">
      <div className="p-4">
        <h3 className="font-medium mb-2">Leads</h3>
        <p className="text-sm text-muted-foreground mb-4">
          These are candidates from multiple sources (applications, sourcing, and recommendations by AI) ready for you
          to review.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant="default"
            size="sm"
            className="bg-zinc-900 text-white hover:bg-zinc-800"
          >
            All (11)
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            AI matches (10)
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            Sourced (0)
          </Button>
          <Button
            variant="outline"
            size="sm"
          >
            Applied (1)
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search by name or position" className="pl-8" />
        </div>

        <div className="space-y-1">
          {/* Mia Persona - Active */}
          <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted transition-colors bg-muted border border-border">
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-stone-100 text-stone-800">
              MP
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate text-sm">Mia Persona</p>
                <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
              </div>
              <p className="text-xs text-muted-foreground truncate">Associate Customer Success Manager</p>
            </div>
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
          </div>

          {/* Lil's Thompson */}
          <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted transition-colors">
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-stone-100 text-stone-800">
              LT
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate text-sm">Lil's Thompson</p>
                <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
              </div>
              <p className="text-xs text-muted-foreground truncate">Senior Outbound Sales Developer</p>
            </div>
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
          </div>

          {/* Mia Persona - Another entry */}
          <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted transition-colors">
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-stone-100 text-stone-800">
              MP
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate text-sm">Mia Persona</p>
                <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
              </div>
              <p className="text-xs text-muted-foreground truncate">Associate Customer Success Manager</p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}