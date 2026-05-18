'use client'

import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { motion } from 'framer-motion'
import { Wallet, LogOut, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function ConnectWalletButton() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const [copied, setCopied] = useState(false)

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <motion.button
          onClick={copyAddress}
          className="flex items-center gap-2 rounded-lg bg-secondary border border-border px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-secondary/80"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Wallet className="h-4 w-4 text-primary" />
          <span>{truncateAddress(address)}</span>
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </motion.button>
        <motion.button
          onClick={() => open({ view: 'Account' })}
          className="rounded-lg bg-destructive/10 p-2 text-destructive transition-all hover:bg-destructive/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Disconnect wallet"
        >
          <LogOut className="h-4 w-4" />
        </motion.button>
      </div>
    )
  }

  return (
    <motion.button
      onClick={() => open()}
      className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
      whileTap={{ scale: 0.95 }}
    >
      <Wallet className="h-4 w-4" />
      CONNECT WALLET
    </motion.button>
  )
}
