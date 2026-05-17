"use client"

import Image from "next/image"
import { Share2, ExternalLink, Shield, Layers } from "lucide-react"

export function ExploreTokenHeader() {
  return (
    <div className="flex items-center justify-between rounded-xl bg-card border border-border p-4">
      <div className="flex items-center gap-4">
        {/* Token Image */}
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 p-1">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg"
            alt="PEPE_SOL"
            width={64}
            height={64}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Token Info */}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">PEPE_SOL</h1>
            <span className="text-sm font-semibold text-success">$PEPESOL</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              <Layers className="h-3 w-3" />
              SOLANA
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Shield className="h-3 w-3" />
              SWEEPER SEAL
            </span>
          </div>
        </div>
      </div>

      {/* Verified Badge & Actions */}
      <div className="flex items-center gap-3">
        {/* Verified Badge */}
        <div className="flex items-center gap-3 pr-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20">
            <Shield className="h-6 w-6 text-success" />
          </div>
          <div>
            <span className="text-sm font-bold text-success">VERIFIED PROJECT</span>
            <p className="text-xs text-muted-foreground max-w-[180px]">
              This project has passed Meme Sweeper verification and security audit.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-secondary/80">
          <Share2 className="h-4 w-4" />
          SHARE
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
          <ExternalLink className="h-4 w-4" />
          TRADE NOW
        </button>
      </div>
    </div>
  )
}
