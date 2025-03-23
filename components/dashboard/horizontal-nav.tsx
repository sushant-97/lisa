"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BarChart3, Briefcase, FileText, Home, Search, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
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

export function HorizontalNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center space-x-1 overflow-x-auto pb-2">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("flex items-center gap-2 whitespace-nowrap")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  )
}