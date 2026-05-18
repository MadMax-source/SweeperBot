'use client';

import { Check } from 'lucide-react';

export function TrustScore() {
  const verifications = [
    { label: 'KYC VERIFIED', checked: true },
    { label: 'CONTRACT VERIFIED', checked: true },
    { label: 'LIQUIDITY LOCKED', checked: true },
    { label: 'HONEYPOT SCAN', checked: true },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">TRUST SCORE</h3>

      <div className="flex items-center justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          {/* Circular progress */}
          <svg className="absolute h-full w-full -rotate-90">
            <circle cx="72" cy="72" r="64" fill="none" stroke="#1a2235" strokeWidth="8" />

            <circle
              cx="72"
              cy="72"
              r="64"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${82 * 4.02} ${100 * 4.02}`}
            />
          </svg>

          <div className="text-center">
            <div className="text-4xl font-bold text-white">82</div>

            <div className="text-sm text-muted-foreground">/100</div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-center text-sm font-semibold text-[#ff6b00]">LOW RISK</div>

      <div className="mt-4 space-y-2">
        {verifications.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6b00]/20">
              <Check className="h-3 w-3 text-[#ff6b00]" />
            </div>

            <span className="text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full rounded-lg border border-border bg-secondary py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-white">
        CLEAR
      </button>
    </div>
  );
}
