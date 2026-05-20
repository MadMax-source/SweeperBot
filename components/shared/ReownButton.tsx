'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

export default function ReownButton() {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <button
      onClick={() => open()}
      className={`
        rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300
        flex items-center gap-2 border

        ${
          isConnected
            ? 'bg-transparent text-white/80 border-white/10 hover:bg-white/5'
            : 'bg-primary text-primary-foreground border-transparent hover:bg-primary/90'
        }
      `}
    >
      {isConnected && (
        <span className="relative flex h-3 w-3">
          {/* blinking outer */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-700 opacity-90 animate-ping" />

          {/* solid inner */}
          <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-600" />
        </span>
      )}
      {isConnected ? 'CONNECTED' : 'CONNECT WALLET'}
    </button>
  );
}
