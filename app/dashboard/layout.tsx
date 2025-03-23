import { HorizontalNav } from "@/components/dashboard/horizontal-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">ATS Dashboard</h1>
        </div>
        <div className="flex-1">
          <HorizontalNav />
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserNav />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        {children}
      </main>
    </div>
  )
}