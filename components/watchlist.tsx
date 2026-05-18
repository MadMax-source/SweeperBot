"use client"

import { motion } from 'framer-motion';
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
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <motion.div 
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-white">WATCHLIST</h3>
        <motion.button 
          className="text-xs text-primary hover:underline"
          whileHover={{ scale: 1.05 }}
        >
          MANAGE
        </motion.button>
      </motion.div>

      <div className="space-y-3">
        {watchlistItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors hover:bg-secondary/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <motion.div 
              className={`flex h-8 w-8 items-center justify-center rounded-full ${item.color} text-sm`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
            >
              {item.symbol}
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white">{item.token}</div>
              <div className="text-xs text-muted-foreground">{item.ticker}</div>
            </div>
            <div className="text-right">
              <motion.div 
                className="text-sm font-medium text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.score}/100
              </motion.div>
            </div>
            <motion.span 
              className={`rounded px-2 py-0.5 text-[10px] font-semibold ${getRiskStyle(item.risk)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {item.risk}
            </motion.span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Star className={`h-4 w-4 ${getStarColor(item.risk)}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
