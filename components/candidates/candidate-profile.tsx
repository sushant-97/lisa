"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function CandidateProfile() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="border rounded-lg bg-background">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center text-xl font-semibold text-stone-800">
            MP
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Mia Persona</h2>
            <p className="text-lg text-muted-foreground">Associate Customer Success Manager - Onboarding</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center gap-1">
                <span className="inline-block w-4 h-3 bg-yellow-500 rounded-sm"></span>
                Barcelona, Spain
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Email</p>
              <div className="flex items-center gap-2">
                <p>scott.dweibss+tb@remote.com</p>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t">
          <div className="flex border-b">
            <button
              className={cn(
                "px-4 py-2 font-medium text-muted-foreground border-b-2 border-transparent",
                activeTab === "experience" && "text-primary border-primary"
              )}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={cn(
                "px-4 py-2 font-medium text-muted-foreground border-b-2 border-transparent",
                activeTab === "education" && "text-primary border-primary"
              )}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={cn(
                "px-4 py-2 font-medium text-muted-foreground border-b-2 border-transparent",
                activeTab === "about" && "text-primary border-primary"
              )}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Work Experience</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded bg-purple-100 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <h4 className="font-medium">Associate Customer Success Manager - Onboarding</h4>
                      <p className="text-muted-foreground">MongoDB • Full-time</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">CURRENT</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Oct 2023 - Present • 1 yrs 3 mos</p>
                  <p className="text-sm text-muted-foreground">On-site</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded bg-purple-100 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div>
                    <h4 className="font-medium">Account Manager</h4>
                    <p className="text-muted-foreground">Hewlett Packard Enterprise • Full-time</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Oct 2021 - Oct 2023 • 2 yrs 0 mos</p>
                  <p className="text-sm text-muted-foreground">On-site</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    • Customer set: public clients of Lombardia and Emilia Romagna regions (Education, Government,
                    Utilities and Healthcare) and government bodies (Consiglio, Camera dei Deputati, Guardia di
                    Finanza) • Top 40 performers globally: participated to the Alliance Club 2022 in the HPE Houston
                    HQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}