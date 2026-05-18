'use client'

import { ReactNode, useEffect, useState } from 'react'

export function WalletProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Initialize Reown AppKit on client side only
    import('@/lib/reown-config')
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
