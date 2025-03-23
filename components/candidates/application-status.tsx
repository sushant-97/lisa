// path: components/candidates/application-status.tsx
"use client"

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ApplicationStage {
  id: number;
  title: string;
  status: "complete" | "current" | "upcoming";
  description?: string;
}

export function ApplicationStatus() {
  const stages: ApplicationStage[] = [
    {
      id: 1,
      title: "Screening",
      status: "complete",
      description: "Completed April 12, 2023"
    },
    {
      id: 2,
      title: "Design Challenge",
      status: "complete",
      description: "Under Review"
    },
    {
      id: 3,
      title: "Interview",
      status: "current",
      description: "Scheduled for June 2, 2023"
    },
    {
      id: 4,
      title: "HR Round",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Hired",
      status: "upcoming"
    }
  ];

  return (
    <div className="bg-background rounded-lg border overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Application Status</h2>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {stages.map((stage) => (
            <div key={stage.id} className="flex items-center gap-4">
              {/* Status indicator */}
              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                stage.status === 'complete' ? 'bg-green-100 text-green-600' :
                stage.status === 'current' ? 'bg-amber-100 text-amber-600' :
                'bg-gray-100 text-gray-400'
              }`}>
                {stage.id}
              </div>

              {/* Stage details */}
              <div className="flex-grow">
                <h3 className="font-medium">{stage.title}</h3>
                {stage.description && (
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-600 to-red-500 text-white">
        <Button className="w-full bg-white text-black hover:bg-white/90" size="lg">
          Move to Next Step
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}