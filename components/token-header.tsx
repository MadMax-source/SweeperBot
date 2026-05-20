'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Share2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function TokenHeader() {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-xl border border-border bg-card p-4 gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4">
        {/* Token Avatar */}
        <motion.div 
          className="h-16 w-16 overflow-hidden rounded-xl bg-secondary"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg"
            alt="PEPE_SOL"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div>
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-white">PEPE_SOL</h1>
            <span className="text-sm font-medium text-primary">$PEPESOL</span>
          </motion.div>
          <motion.div 
            className="mt-1 flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center gap-1 rounded border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#9945FF]" />
              SOLANA
            </span>
            <motion.span 
              className="flex items-center gap-1 rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs text-primary"
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0)',
                  '0 0 10px 2px rgba(59, 130, 246, 0.3)',
                  '0 0 0 0 rgba(59, 130, 246, 0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BadgeCheck className="h-3 w-3" />
              SWEEPER SEAL
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Verified Badge */}
      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b00]/20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="h-6 w-6 text-[#ff6b00]" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15,8.5 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,8.5" />
            </svg>
          </motion.div>
          <div>
            <div className="text-sm font-semibold text-[#ff6b00]">VERIFIED PROJECT</div>
            <div className="text-xs text-muted-foreground">
              This project has passed
              <br />
              Meme Sweeper verification
              <br />
              and security audit.
            </div>
          </div>
        </div>

        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button 
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="h-4 w-4" />
            SHARE
          </motion.button>
          <motion.button 
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECT
            <ExternalLink className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
