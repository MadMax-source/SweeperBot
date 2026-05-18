'use client';

import { BadgeCheck, Share2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function TokenHeader() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-4">
        {/* Token Avatar */}
        <div className="h-16 w-16 overflow-hidden rounded-xl bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg"
            alt="PEPE_SOL"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">PEPE_SOL</h1>
            <span className="text-sm font-medium text-primary">$PEPESOL</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="flex items-center gap-1 rounded border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[#9945FF]" />
              SOLANA
            </span>
            <span className="flex items-center gap-1 rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs text-primary">
              <BadgeCheck className="h-3 w-3" />
              SWEEPER SEAL
            </span>
          </div>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b00]/20">
            <svg className="h-6 w-6 text-[#ff6b00]" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15,8.5 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,8.5" />
            </svg>
          </div>
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

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/80 transition-colors">
            <Share2 className="h-4 w-4" />
            SHARE
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors">
            VIEW PROJECT
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
