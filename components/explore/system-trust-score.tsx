"use client"

import { Check, Terminal } from "lucide-react"

const verifications = [
  { label: "KYC PASSED", checked: true },
  { label: "CONTRACT VERIFIED", checked: true },
  { label: "LIQUIDITY LOCKED", checked: true },
]

export function SystemTrustScore() {
  const score = 82
  const circumference = 2 * Math.PI * 80
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="rounded-xl bg-card border border-border p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Terminal className="h-4 w-4 text-muted-foreground" />
        <span className="font-mono text-xs text-muted-foreground tracking-wider">SYSTEM_TRUST_SCORE</span>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#1e293b"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 100 100)"
              className="transition-all duration-1000"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          {/* Score text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-white">{score}</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
        </div>
      </div>

      {/* Risk Level */}
      <div className="text-center mb-6">
        <span className="text-lg font-bold text-success tracking-wider">LOW RISK</span>
      </div>

      {/* Verification Checklist */}
      <div className="space-y-2">
        {verifications.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-secondary/30 border border-border px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/20">
                <Check className="h-3 w-3 text-success" />
              </div>
              <span className="text-sm font-medium text-white">{item.label}</span>
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded border border-primary bg-primary/20">
              <Check className="h-3 w-3 text-primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
