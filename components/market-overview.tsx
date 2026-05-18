'use client';

import { TrendingUp } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}

function MetricCard({ label, value, change, positive = true }: MetricCardProps) {
  return (
    <div>
      <div className="text-xs text-muted-foreground uppercase">{label}</div>

      <div className="mt-1 text-xl font-bold text-white">{value}</div>

      <div className={`text-xs font-medium ${positive ? 'text-[#ff6b00]' : 'text-destructive'}`}>
        {change}
      </div>

      <svg className="mt-2 h-8 w-full">
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={positive ? '#ff6b00' : '#ef4444'} stopOpacity="0.3" />

            <stop offset="100%" stopColor={positive ? '#ff6b00' : '#ef4444'} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0,20 Q15,18 30,15 T60,12 T90,8 T120,5 L120,30 L0,30 Z"
          fill={`url(#gradient-${label})`}
        />

        <path
          d="M0,20 Q15,18 30,15 T60,12 T90,8 T120,5"
          fill="none"
          stroke={positive ? '#ff6b00' : '#ef4444'}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function MarketOverview() {
  const metrics = [
    {
      label: 'LIQUIDITY',
      value: '$245,680',
      change: '+12.45%',
    },
    {
      label: 'HOLDERS',
      value: '1,248',
      change: '+18.78%',
    },
    {
      label: '24H VOLUME',
      value: '$1,24M',
      change: '+24.12%',
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">MARKET OVERVIEW</h3>

      <div className="space-y-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </div>
  );
}
