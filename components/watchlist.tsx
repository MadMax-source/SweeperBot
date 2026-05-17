"use client"

import { Star } from "lucide-react"

interface WatchlistItem {
  token: string
  symbol: string
  ticker: string
  color: string
  score: number
  risk: "LOW RISK" | "MODERATE" | "HIGH RISK"
}

const watchlistItems: WatchlistItem[] = [
  {
    token: "DOGE AI",
    symbol: "🐕",
    ticker: "$DOGEAI",
    color: "bg-yellow-600",
    score: 92,
    risk: "LOW RISK",
  },
  {
    token: "PEPE MATRIX",
    symbol: "🐸",
    ticker: "$PEPMX",
    color: "bg-green-600",
    score: 68,
    risk: "MODERATE",
  },
  {
    token: "RUG PULL INU",
    symbol: "💀",
    ticker: "$RPI",
    color: "bg-red-600",
    score: 12,
    risk: "HIGH RISK",
  },
  {
    token: "CYBER BONK",
    symbol: "🤖",
    ticker: "$CBONK",
    color: "bg-blue-600",
    score: 88,
    risk: "LOW RISK",
  },
  {
    token: "NEO WIF HAT",
    symbol: "🎩",
    ticker: "$NWIF",
    color: "bg-purple-600",
    score: 55,
    risk: "MODERATE",
  },
]

function getRiskStyle(risk: string) {
  switch (risk) {
    case "LOW RISK":
      return "text-success bg-success/10"
    case "MODERATE":
      return "text-warning bg-warning/10"
    case "HIGH RISK":
      return "text-destructive bg-destructive/10"
    default:
      return "text-muted-foreground bg-muted"
  }
}

function getStarColor(risk: string) {
  switch (risk) {
    case "LOW RISK":
      return "text-success fill-success"
    case "MODERATE":
      return "text-warning fill-warning"
    case "HIGH RISK":
      return "text-destructive fill-destructive"
    default:
      return "text-muted-foreground"
  }
}

export function Watchlist() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">WATCHLIST</h3>
        <button className="text-xs text-primary hover:underline">MANAGE</button>
      </div>

      <div className="space-y-3">
        {watchlistItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${item.color} text-sm`}>
              {item.symbol}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white">{item.token}</div>
              <div className="text-xs text-muted-foreground">{item.ticker}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">{item.score}/100</div>
            </div>
            <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${getRiskStyle(item.risk)}`}>
              {item.risk}
            </span>
            <Star className={`h-4 w-4 ${getStarColor(item.risk)}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
