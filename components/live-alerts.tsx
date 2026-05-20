"use client"

import { motion } from 'framer-motion';
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
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <motion.h3 
          className="text-sm font-semibold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          LIVE ALERTS
        </motion.h3>
        <motion.button 
          className="flex items-center gap-1 text-xs text-primary hover:underline"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ x: 3 }}
        >
          VIEW ALL
          <ChevronRight className="h-3 w-3" />
        </motion.button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-secondary/30 cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.15, type: 'spring', stiffness: 100 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <motion.div 
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${alert.iconBg}`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + index * 0.15, type: 'spring', stiffness: 200 }}
            >
              <alert.icon className={`h-4 w-4 ${alert.iconColor}`} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.div 
                className={`text-sm font-medium ${alert.titleColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.15 }}
              >
                {alert.title}
              </motion.div>
              <motion.div 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.15 }}
              >
                {alert.description}
              </motion.div>
            </div>
            <motion.div 
              className="text-xs text-muted-foreground flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.15 }}
            >
              {alert.time}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated pulse indicator */}
      <motion.div 
        className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span 
          className="h-2 w-2 rounded-full bg-success"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        Monitoring in real-time
      </motion.div>
    </div>
  )
}
