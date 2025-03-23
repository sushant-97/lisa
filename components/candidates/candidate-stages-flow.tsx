// path: components/candidates/candidate-stages-flow.tsx
"use client"

import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

const stages = [
  { id: "leads", name: "Leads", count: 11, active: true },
  { id: "shortlist", name: "Shortlist", count: 0, active: false },
  { id: "interview", name: "Interview", count: 0, active: false },
  { id: "offer", name: "Offer", count: 0, active: false },
  { id: "hired", name: "Hired", count: 1, active: false },
  { id: "rejected", name: "Rejected", count: 0, active: false },
]

export function CandidateStagesFlow() {
  return (
    <div className="flex justify-between overflow-x-auto">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex items-center">
          <div
            className={cn(
              "rounded border px-3 py-1.5 flex items-center whitespace-nowrap text-sm",
              stage.active ? "bg-white" : "bg-gray-50"
            )}
          >
            {stage.name}
            <span className={cn(
              "rounded-full px-1.5 py-0.5 text-xs ml-1.5",
              stage.count > 0 ? "bg-gray-100" : "bg-gray-50 text-gray-400",
            )}>
              {stage.count}
            </span>
          </div>

          {/* Arrow between stages */}
          {index < stages.length - 1 && (
            <ChevronRight className="mx-1.5 h-4 w-4 text-gray-400 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}