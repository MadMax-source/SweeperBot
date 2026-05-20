"use client"

import { motion } from 'framer-motion';

interface StatCardProps {
  label: string
  value: string
  index: number
}

function StatCard({ label, value, index }: StatCardProps) {
  return (
    <motion.div 
      className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
      <motion.div 
        className="mt-1 text-2xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
      >
        {value}
      </motion.div>
      <motion.svg 
        className="mt-2 h-6 w-full opacity-50"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
      >
        <motion.path
          d="M0,15 Q10,12 20,14 T40,10 T60,12 T80,8 T100,10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.1, duration: 1 }}
        />
      </motion.svg>
    </motion.div>
  )
}

export function StatsGrid() {
  const stats = [
    { label: "TOKENS SCANNED", value: "12,540" },
    { label: "RUGS DETECTED", value: "342" },
    { label: "SCAMS BLOCKED", value: "1,102" },
    { label: "USERS PROTECTED", value: "8,932" },
    { label: "PROJECTS MONITORED", value: "1,248" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} {...stat} index={index} />
      ))}
    </div>
  )
}
