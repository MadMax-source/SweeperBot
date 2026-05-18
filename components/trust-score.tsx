'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function TrustScore() {
  const verifications = [
    { label: 'KYC VERIFIED', checked: true },
    { label: 'CONTRACT VERIFIED', checked: true },
    { label: 'LIQUIDITY LOCKED', checked: true },
    { label: 'HONEYPOT SCAN', checked: true },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-sm font-semibold text-white"
      >
        TRUST SCORE
      </motion.h3>

      <div className="flex items-center justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          {/* Circular progress */}
          <svg className="absolute h-full w-full -rotate-90">
            <circle cx="72" cy="72" r="64" fill="none" stroke="#1a2235" strokeWidth="8" />
            <motion.circle
              cx="72"
              cy="72"
              r="64"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 402' }}
              animate={{ strokeDasharray: `${82 * 4.02} ${100 * 4.02}` }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            />
          </svg>

          <motion.div 
            className="text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <motion.div 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              82
            </motion.div>
            <div className="text-sm text-muted-foreground">/100</div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="mt-2 text-center text-sm font-semibold text-[#ff6b00]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        LOW RISK
      </motion.div>

      <div className="mt-4 space-y-2">
        {verifications.map((item, index) => (
          <motion.div 
            key={item.label} 
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
          >
            <motion.div 
              className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6b00]/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
            >
              <Check className="h-3 w-3 text-[#ff6b00]" />
            </motion.div>
            <span className="text-muted-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        className="mt-4 w-full rounded-lg border border-border bg-secondary py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-white hover:border-primary/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        CLEAR
      </motion.button>
    </div>
  );
}
