'use client';

import { Search, Bell } from 'lucide-react';
import { MobileSidebar } from '@/components/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur px-4 py-3 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center gap-3">
          <div className="md:hidden">
            <MobileSidebar />
          </div>

          <div className="relative flex-1 min-w-0 md:max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search token, wallet, or contract..."
              className="h-10 w-full rounded-lg bg-secondary border border-border pl-10 pr-10 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
              /
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
            CONNECT WALLET
          </button>

          <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
