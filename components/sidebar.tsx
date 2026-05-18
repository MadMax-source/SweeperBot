'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Search,
  Rocket,
  Target,
  Wallet,
  Droplets,
  Bell,
  Eye,
  BarChart3,
  Settings,
  Zap,
  FileText,
  HelpCircle,
  Menu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const navItems = [
  { icon: LayoutDashboard, label: 'DASHBOARD', href: '/' },
  { icon: Search, label: 'EXPLORE', href: '/explore' },
  { icon: Rocket, label: 'LAUNCHPAD', href: '/launchpad' },
  { icon: Target, label: 'RISK RADAR', href: '/risk-radar' },
  { icon: Wallet, label: 'WALLET TRACKER', href: '/wallet-tracker' },
  { icon: Droplets, label: 'LIQUIDITY CHECK', href: '/liquidity-check' },
  { icon: Bell, label: 'ALERTS', href: '/alerts', badge: 12 },
  { icon: Eye, label: 'WATCHLIST', href: '/watchlist' },
  { icon: BarChart3, label: 'ANALYTICS', href: '/analytics' },
  { icon: Settings, label: 'SETTINGS', href: '/settings' },
];

type SidebarContentProps = {
  className?: string;
};

function SidebarContent({ className }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn('flex h-full flex-col bg-sidebar border-r border-sidebar-border', className)}
    >
      {/* Logo */}
      <motion.div 
        className="flex items-center gap-3 px-4 py-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <motion.div 
          className="relative w-[55px] h-[55px] rounded-full border-2 border-dashed border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center"
          animate={{ 
            boxShadow: [
              '0 0 15px rgba(59,130,246,0.5)',
              '0 0 25px rgba(59,130,246,0.8)',
              '0 0 15px rgba(59,130,246,0.5)',
            ],
            rotate: [0, 360],
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
          }}
        >
          <Image
            src="/logo/sweeper3.png"
            alt="Sweeper Logo"
            fill
            priority
            className="object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] p-1"
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.span 
            className="text-lg font-bold text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MEME
          </motion.span>
          <motion.span 
            className="text-lg font-bold text-white -mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            SWEEPER
          </motion.span>
          <motion.span 
            className="text-[10px] text-muted-foreground tracking-wide -mt-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Launcher
          </motion.span>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05, type: 'spring', stiffness: 100 }}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
                <span>{item.label}</span>
                {item.badge && (
                  <motion.span 
                    className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Initiate Sweep Button */}
      <div className="px-3 pb-4">
        <motion.button 
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Zap className="h-4 w-4" />
          </motion.div>
          INITIATE SWEEP
        </motion.button>
      </div>

      {/* Sweeper Bot Status */}
      <motion.div 
        className="mx-3 mb-4 flex items-center gap-3 rounded-lg bg-secondary/50 p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
          <div className="h-6 w-6 rounded-full bg-primary/40 flex items-center justify-center">
            <motion.div 
              className="h-3 w-3 rounded-full bg-primary"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">SWEEPER BOT</span>
            <motion.span 
              className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-bold text-success"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ACTIVE
            </motion.span>
          </div>
          <span className="text-xs text-muted-foreground">All systems operational</span>
        </div>
      </motion.div>

      {/* Docs & Support */}
      <motion.div 
        className="flex items-center gap-4 px-4 py-3 border-t border-sidebar-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/docs"
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors"
        >
          <FileText className="h-3.5 w-3.5" />
          DOCS
        </Link>
        <Link
          href="/support"
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          SUPPORT
        </Link>
      </motion.div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden md:fixed md:left-0 md:top-0 md:z-40 md:flex md:h-screen md:w-[220px] md:flex-col">
      <SidebarContent className="w-full" />
    </aside>
  );
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button 
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition hover:bg-secondary/90 md:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </motion.button>
      </SheetTrigger>
      <SheetContent side="left" className="border-r border-sidebar-border p-0 md:hidden">
        <SidebarContent className="h-full min-h-screen w-full" />
      </SheetContent>
    </Sheet>
  );
}
