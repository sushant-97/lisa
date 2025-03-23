import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Eye, Search } from "lucide-react";

export default function CandidatesPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      {/* Top section with back button, job title, and view job post */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-1 p-0">
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <h1 className="text-xl font-semibold">Sales Engineer</h1>
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8L16 3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3v5h5M12 12v6M9 15h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span>View Job Post</span>
        </Button>
      </div>

      {/* Remote • Full-time */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <span>Remote</span>
        <span>•</span>
        <span>Full-time</span>
      </div>

      {/* Stage buttons - Moved to be inline with job title */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button variant="default" size="sm" className="gap-1">
          <span>+</span>
          Leads (11)
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <span>+</span>
          Shortlist (0)
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <span>+</span>
          Interview (0)
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <span>+</span>
          Offer (0)
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <span>+</span>
          Hired (1)
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <span>+</span>
          Rejected (0)
        </Button>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Candidates list */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg bg-background">
            <div className="p-4">
              <h3 className="font-medium mb-2">Leads</h3>
              <p className="text-sm text-muted-foreground mb-4">
                These are candidates from multiple sources (applications, sourcing, and recommendations by AI) ready for you
                to review.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Button variant="default" size="xs" className="h-6 text-xs">
                  All (11)
                </Button>
                <Button variant="outline" size="xs" className="h-6 text-xs">
                  AI matches (10)
                </Button>
                <Button variant="outline" size="xs" className="h-6 text-xs">
                  Sourced (0)
                </Button>
                <Button variant="outline" size="xs" className="h-6 text-xs">
                  Applied (1)
                </Button>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or position"
                  className="pl-8"
                />
              </div>

              <div className="space-y-2">
                {/* Mia Persona - Active */}
                <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted bg-muted border border-border">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-amber-100 text-amber-800">
                    MP
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate text-sm">Mia Persona</p>
                      <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Associate Customer Success Manager</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>

                {/* Lil's Thompson */}
                <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-blue-100 text-blue-800">
                    LT
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate text-sm">Lil's Thompson</p>
                      <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Senior Outbound Sales Developer</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mia Persona - Another entry */}
                <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-amber-100 text-amber-800">
                    MP
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate text-sm">Mia Persona</p>
                      <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Associate Customer Success Manager</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Additional Lil's Thompson */}
                <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-blue-100 text-blue-800">
                    LT
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate text-sm">Lil's Thompson</p>
                      <div className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">AI MATCH</div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Senior Outbound Sales Developer</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Candidate profile */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg bg-background">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center text-xl font-semibold text-amber-800">
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
                      <p>scott.dweibiss+tb@remote.com</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
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

              <div className="mt-8 border-t pt-6">
                <div className="flex border-b">
                  <button className="px-4 py-2 font-medium text-primary border-b-2 border-primary">
                    Experience
                  </button>
                  <button className="px-4 py-2 text-muted-foreground">
                    Education
                  </button>
                  <button className="px-4 py-2 text-muted-foreground">
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
        </div>
      </div>
    </div>
  )
}