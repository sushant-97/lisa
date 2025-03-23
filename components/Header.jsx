// FILE: components/Header.jsx
"use client"

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-2">
        <h1 className="text-xl font-semibold">ATS Dashboard</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/dashboard"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/dashboard') ? 'text-primary' : ''}`}
        >
          Dashboard
        </Link>
        <Link
          href="/jobs"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/jobs') ? 'text-primary' : ''}`}
        >
          Jobs
        </Link>
        <Link
          href="/candidates"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/candidates') ? 'text-primary' : ''}`}
        >
          Candidates
        </Link>
        <Link
          href="/documents"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/documents') ? 'text-primary' : ''}`}
        >
          Documents
        </Link>
        <Link
          href="/talent-insights"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/talent-insights') ? 'text-primary' : ''}`}
        >
          Talent Insights
        </Link>
        <Link
          href="/analytics"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/analytics') ? 'text-primary' : ''}`}
        >
          Analytics
        </Link>
        <Link
          href="/settings"
          className={`text-sm font-medium flex items-center gap-2 hover:text-primary ${isActive('/settings') ? 'text-primary' : ''}`}
        >
          Settings
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="size-9 rounded-full flex items-center justify-center hover:bg-accent"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <div className="relative h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;