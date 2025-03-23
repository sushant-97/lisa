// path: components/candidates/candidate-profile-view.tsx
"use client"

import { Button } from "@/components/ui/button"

interface CandidateProfile {
  id: string
  name: string
  position: string
  location: string
  email: string
  experience: {
    title: string
    company: string
    type: string
    isCurrent: boolean
    startDate: string
    endDate?: string
    duration: string
    location: string
    description?: string
  }[]
}

export function CandidateProfileView() {
  // Mock data for the candidate profile
  const candidate: CandidateProfile = {
    id: "1",
    name: "Mia Persona",
    position: "Associate Customer Success Manager - Onboarding",
    location: "Barcelona, Spain",
    email: "scott.dweibiss+tb@remote.com",
    experience: [
      {
        title: "Associate Customer Success Manager - Onboarding",
        company: "MongoDB",
        type: "Full-time",
        isCurrent: true,
        startDate: "Oct 2023",
        duration: "1 yr 3 mos",
        location: "On-site"
      },
      {
        title: "Account Manager",
        company: "Hewlett Packard Enterprise",
        type: "Full-time",
        isCurrent: false,
        startDate: "Oct 2021",
        endDate: "Oct 2023",
        duration: "2 yrs 0 mos",
        location: "On-site",
        description: "• Customer set: public clients of Lombardia and Emilia Romagna regions (Education, Government, Utilities and Healthcare) and government bodies (Consiglio, Camera dei Deputati, Guardia di Finanza) • Top 40 performers globally: participated to the Alliance Club 2022 in the HPE Houston HQ"
      }
    ]
  };

  return (
    <div className="border rounded-md bg-background overflow-hidden h-full">
      <div className="p-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-lg font-medium">
            MP
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">{candidate.name}</h2>
            <p className="text-sm text-gray-600">{candidate.position}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-sm"></span>
                {candidate.location}
              </span>
            </div>
            <div className="mt-1">
              <p className="text-xs text-gray-500">Email</p>
              <p className="flex items-center gap-2 text-xs">
                {candidate.email}
                <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="flex border-b text-sm">
            <button className="px-3 py-1 font-medium text-primary border-b-2 border-primary">Experience</button>
            <button className="px-3 py-1 text-gray-500">Education</button>
            <button className="px-3 py-1 text-gray-500">About</button>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Work Experience</h3>

            <div className="space-y-4 overflow-auto max-h-[500px] pr-2">
              {candidate.experience.map((exp, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{exp.title}</h4>
                        <p className="text-xs text-gray-500">{exp.company} • {exp.type}</p>
                      </div>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-100">CURRENT</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {exp.startDate} - {exp.endDate || "Present"} • {exp.duration}
                    </p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                    {exp.description && (
                      <p className="text-xs text-gray-500 mt-1">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}