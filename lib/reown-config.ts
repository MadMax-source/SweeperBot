import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'

// Get projectId from environment variable
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

// Create Solana adapter with wallet adapters
const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
})

// Metadata for your app
const metadata = {
  name: 'MEME SWEEPER',
  description: 'The ultimate meme token security dashboard for Solana',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://memesweeper.app',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// Create the AppKit instance
export const appKit = createAppKit({
  adapters: [solanaAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  projectId,
  metadata,
  features: {
    analytics: true,
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#3b82f6',
    '--w3m-border-radius-master': '2px',
  },
})
