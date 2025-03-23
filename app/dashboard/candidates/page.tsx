export default function CandidatesPage() {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col">
        {/* ATS Dashboard title is in the parent layout */}

        {/* Back button and job title row */}
        <div className="flex items-center gap-2 pb-2">
          <button className="inline-flex items-center hover:text-foreground">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
          <h1 className="text-xl font-semibold">Sales Engineer</h1>
          <button className="inline-flex items-center justify-center w-6 h-6 hover:text-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2H7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="ml-auto">
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm hover:bg-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  // d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2H7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Job Post
            </button>
          </div>
        </div>

        {/* Remote • Full-time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground pb-3">
          <span>Remote</span>
          <span>•</span>
          <span>Full-time</span>
        </div>

        {/* Stage buttons */}
        <div className="flex flex-wrap gap-2 pb-6">
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-zinc-900 text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Leads (11)
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            Shortlist (0)
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            Interview (0)
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            Offer (0)
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            Hired (1)
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
            Rejected (0)
          </button>
        </div>

        {/* Main content - Candidates list and profile */}
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
                  <button className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs bg-zinc-900 text-white">
                    All (11)
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs hover:bg-accent">
                    AI matches (10)
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs hover:bg-accent">
                    Sourced (0)
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs hover:bg-accent">
                    Applied (1)
                  </button>
                </div>

                <div className="relative mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5 top-2.5 text-muted-foreground">
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input type="search" placeholder="Search by name or position" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm pl-8" />
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
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-background/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.5 12h-15m0 0L8 17.5M2.5 12L8 6.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-background/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-background/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
                        <button className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-background/80">
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t">
                  <div className="flex border-b">
                    <button className="px-4 py-2 font-medium text-primary border-b-2 border-primary">
                      Experience
                    </button>
                    <button className="px-4 py-2 font-medium text-muted-foreground">
                      Education
                    </button>
                    <button className="px-4 py-2 font-medium text-muted-foreground">
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
    </div>
  )
}