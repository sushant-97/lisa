// path: components/header-navigation.tsx
"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"
import { cn } from "@/lib/utils"
import { BarChart3, Briefcase, FileText, Home, Search, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Jobs",
    href: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    title: "Candidates",
    href: "/dashboard/candidates",
    icon: Users,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Talent Insights",
    href: "/dashboard/talent-insights",
    icon: Search,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function HeaderNavigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4">
      <div className="mr-4">
        <h1 className="text-lg font-semibold">ATS Dashboard</h1>
      </div>

      <nav className="flex items-center space-x-1 overflow-x-auto">
        {navigationItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center gap-1 h-10 px-3",
              pathname === item.href && "bg-primary/5 text-primary font-medium"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4 mr-1" />
              <span>{item.title}</span>
            </Link>
          </Button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  )
}