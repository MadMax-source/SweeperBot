"use client"

import { AlertTriangle, TrendingDown, Activity, Waves, ChevronRight } from "lucide-react"

interface Alert {
  icon: typeof AlertTriangle
  iconColor: string
  iconBg: string
  title: string
  titleColor: string
  description: string
  time: string
}

const alerts: Alert[] = [
  {
    icon: AlertTriangle,
    iconColor: "text-destructive",
    iconBg: "bg-destructive/20",
    title: "High Sell Tax Detected",
    titleColor: "text-destructive",
    description: "Tax: 25%",
    time: "2s ago",
  },
  {
    icon: TrendingDown,
    iconColor: "text-warning",
    iconBg: "bg-warning/20",
    title: "Wallet Dump Detected",
    titleColor: "text-white",
    description: "3 wallets sold 78%",
    time: "8s ago",
  },
  {
    icon: Activity,
    iconColor: "text-warning",
    iconBg: "bg-warning/20",
    title: "Unusual Activity",
    titleColor: "text-warning",
    description: "Contract interaction spike",
    time: "16s ago",
  },
  {
    icon: Waves,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    title: "New Whale Detected",
    titleColor: "text-white",
    description: "Large buy: $245K",
    time: "24s ago",
  },
]

export function LiveAlerts() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">LIVE ALERTS</h3>
        <button className="flex items-center gap-1 text-xs text-primary hover:underline">
          VIEW ALL
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${alert.iconBg}`}>
              <alert.icon className={`h-4 w-4 ${alert.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-medium ${alert.titleColor}`}>{alert.title}</div>
              <div className="text-xs text-muted-foreground">{alert.description}</div>
            </div>
            <div className="text-xs text-muted-foreground flex-shrink-0">{alert.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
