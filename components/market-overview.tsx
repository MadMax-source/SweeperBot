'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  index: number;
}

function MetricCard({ label, value, change, positive = true, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.02, x: 3 }}
      className="cursor-pointer"
    >
      <div className="text-xs text-muted-foreground uppercase">{label}</div>

      <motion.div 
        className="mt-1 text-xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 + index * 0.15, type: 'spring' }}
      >
        {value}
      </motion.div>

      <motion.div 
        className={`text-xs font-medium ${positive ? 'text-[#ff6b00]' : 'text-destructive'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + index * 0.15 }}
      >
        {change}
      </motion.div>

      <motion.svg 
        className="mt-2 h-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 + index * 0.15 }}
      >
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={positive ? '#ff6b00' : '#ef4444'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={positive ? '#ff6b00' : '#ef4444'} stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,20 Q15,18 30,15 T60,12 T90,8 T120,5 L120,30 L0,30 Z"
          fill={`url(#gradient-${label})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
        />

        <motion.path
          d="M0,20 Q15,18 30,15 T60,12 T90,8 T120,5"
          fill="none"
          stroke={positive ? '#ff6b00' : '#ef4444'}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7 + index * 0.15, duration: 1, ease: 'easeInOut' }}
        />
      </motion.svg>
    </motion.div>
  );
}

export function MarketOverview() {
  const metrics = [
    {
      label: 'LIQUIDITY',
      value: '$245,680',
      change: '+12.45%',
    },
    {
      label: 'HOLDERS',
      value: '1,248',
      change: '+18.78%',
    },
    {
      label: '24H VOLUME',
      value: '$1,24M',
      change: '+24.12%',
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <motion.h3 
        className="mb-4 text-sm font-semibold text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        MARKET OVERVIEW
      </motion.h3>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} {...metric} index={index} />
        ))}
      </div>
    </div>
  );
}
