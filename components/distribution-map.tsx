"use client"

import { motion } from 'framer-motion';

export function DistributionMap() {
  const segments = [
    { label: "LP Locked", percentage: 40, color: "#3b82f6" },
    { label: "Presale", percentage: 30, color: "#ff6b00" },
    { label: "Team", percentage: 20, color: "#64748b" },
    { label: "Marketing", percentage: 10, color: "#ef4444" },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-white">DISTRIBUTION MAP</h3>
        <span className="text-xs text-muted-foreground">TOTAL SUPPLY: 1,000,000,000</span>
      </motion.div>

      {/* Distribution Bar */}
      <div className="flex h-6 w-full overflow-hidden rounded-lg">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.label}
            className="h-full"
            initial={{ width: 0 }}
            animate={{ width: `${segment.percentage}%` }}
            transition={{ 
              delay: 0.4 + index * 0.15, 
              duration: 0.8, 
              ease: 'easeOut' 
            }}
            style={{
              backgroundColor: segment.color,
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <motion.div 
        className="mt-3 flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {segments.map((segment, index) => (
          <motion.div 
            key={segment.label} 
            className="flex items-center gap-2 text-xs"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: segment.color }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
            />
            <span className="text-muted-foreground">
              {segment.label} ({segment.percentage}%)
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
