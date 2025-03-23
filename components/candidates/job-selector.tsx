// path: components/candidates/job-selector.tsx
"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useState } from "react";

interface Job {
  id: string;
  title: string;
  location: string;
  dueDate: string;
  candidatesCount: number;
}

export function JobSelector() {
  // Mock data for active jobs - in real implementation, this would come from an API
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Sales Engineer",
      location: "Remote",
      dueDate: "May 15, 2023",
      candidatesCount: 24
    },
    {
      id: "2",
      title: "Frontend Developer",
      location: "San Francisco, CA",
      dueDate: "April 30, 2023",
      candidatesCount: 18
    },
    {
      id: "3",
      title: "Product Manager",
      location: "New York, NY",
      dueDate: "June 10, 2023",
      candidatesCount: 12
    },
    {
      id: "4",
      title: "UX Designer",
      location: "Remote",
      dueDate: "May 20, 2023",
      candidatesCount: 9
    }
  ]);

  const [selectedJobId, setSelectedJobId] = useState<string>(jobs[0]?.id || "");
  const selectedJob = jobs.find(job => job.id === selectedJobId) || jobs[0];

  // Handle job selection change
  const handleJobChange = (value: string) => {
    setSelectedJobId(value);
    // In a real implementation, you would fetch candidates for this job
    // and update the candidate list via context or state management
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-base font-medium">Select Job</div>
        <Select value={selectedJobId} onValueChange={handleJobChange}>
          <SelectTrigger className="w-[220px] h-8 text-sm">
            <SelectValue placeholder="Select a job" />
          </SelectTrigger>
          <SelectContent>
            {jobs.map((job) => (
              <SelectItem key={job.id} value={job.id} className="text-sm">
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedJob && (
        <div className="bg-blue-50 p-4 rounded-md">
          <h2 className="text-base font-medium">{selectedJob.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {selectedJob.location} | Due {selectedJob.dueDate}
          </p>
          <div className="mt-2 text-xs text-blue-600 font-medium">
            {selectedJob.candidatesCount} candidates
          </div>
        </div>
      )}
    </div>
  );
}