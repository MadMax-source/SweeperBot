"use client"

import {
  LayoutDashboard,
  Search,
  Rocket,
  Target,
  Wallet,
  Droplets,
  Bell,
  Eye,
  BarChart3,
  Settings,
  Flame,
  Zap,
  X,
  Send,
  MessageCircle,
  FileText,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "DASHBOARD", href: "/" },
  { icon: Search, label: "EXPLORE", href: "/explore" },
  { icon: Rocket, label: "LAUNCHPAD", href: "/launchpad" },
  { icon: Target, label: "RISK RADAR", href: "/risk-radar" },
  { icon: Wallet, label: "WALLET TRACKER", href: "/wallet-tracker" },
  { icon: Droplets, label: "LIQUIDITY CHECK", href: "/liquidity-check" },
  { icon: Bell, label: "ALERTS", href: "/alerts", badge: 12 },
  { icon: Eye, label: "WATCHLIST", href: "/watchlist" },
  { icon: BarChart3, label: "ANALYTICS", href: "/analytics" },
  { icon: Settings, label: "SETTINGS", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[220px] flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/80 to-accent/40" />
          <Flame className="relative h-7 w-7 text-accent" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-primary">MEME</span>
          <span className="text-lg font-bold text-white -mt-1">SWEEPER</span>
          <span className="text-[10px] text-muted-foreground tracking-wide -mt-0.5">SWEEPER OS</span>
          <span className="text-[9px] text-muted-foreground/60">v2.1.0 // STABLE</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Initiate Sweep Button */}
      <div className="px-3 pb-4">
        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
          <Zap className="h-4 w-4" />
          INITIATE SWEEP
        </button>
      </div>

      {/* Sweeper Bot Status */}
      <div className="mx-3 mb-4 flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
          <div className="h-6 w-6 rounded-full bg-primary/40 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">SWEEPER BOT</span>
            <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-bold text-success">
              ACTIVE
            </span>
          </div>
          <span className="text-xs text-muted-foreground">All systems operational</span>
        </div>
      </div>

      {/* Docs & Support */}
      <div className="flex items-center gap-4 px-4 py-3 border-t border-sidebar-border">
        <Link href="/docs" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
          <FileText className="h-3.5 w-3.5" />
          DOCS
        </Link>
        <Link href="/support" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
          <HelpCircle className="h-3.5 w-3.5" />
          SUPPORT
        </Link>
      </div>
    </aside>
  )
}
