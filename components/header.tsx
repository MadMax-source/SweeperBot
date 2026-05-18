'use client';

import { motion } from 'framer-motion';
import { Search, Bell } from 'lucide-react';
import { MobileSidebar } from '@/components/sidebar';

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur px-4 py-3 md:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <motion.div 
          className="flex w-full items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="md:hidden">
            <MobileSidebar />
          </div>

          <motion.div 
            className="relative flex-1 min-w-0 md:max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search token, wallet, or contract..."
              className="h-10 w-full rounded-lg bg-secondary border border-border pl-10 pr-10 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
              /
            </kbd>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex items-center gap-3 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button 
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            CONNECT WALLET
          </motion.button>

          <motion.button 
            className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5" />
            <motion.span 
              className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              3
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}
