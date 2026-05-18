'use client';

import { ArrowRight } from 'lucide-react';

interface Scan {
  token: string;
  symbol: string;
  color: string;
  address: string;
  riskScore: number;
  riskLevel: 'LOW RISK' | 'MODERATE RISK' | 'HIGH RISK';
  time: string;
}

const scans: Scan[] = [
  {
    token: 'PEPE_SOL',
    symbol: '🐸',
    color: 'bg-green-600',
    address: 'So111...1112',
    riskScore: 18,
    riskLevel: 'LOW RISK',
    time: '5s ago',
  },
  {
    token: 'DOGE AI',
    symbol: '🐕',
    color: 'bg-yellow-600',
    address: 'So98a...77b2',
    riskScore: 67,
    riskLevel: 'MODERATE RISK',
    time: '15s ago',
  },
  {
    token: 'RUG PULL INU',
    symbol: '💀',
    color: 'bg-red-600',
    address: 'So43f...88aa',
    riskScore: 12,
    riskLevel: 'HIGH RISK',
    time: '22s ago',
  },
  {
    token: 'WIF HAT',
    symbol: '🎩',
    color: 'bg-purple-600',
    address: 'So77c...22dd',
    riskScore: 55,
    riskLevel: 'MODERATE RISK',
    time: '45s ago',
  },
  {
    token: 'SAFE VAULT',
    symbol: '🔒',
    color: 'bg-blue-600',
    address: 'So90a...33ee',
    riskScore: 92,
    riskLevel: 'LOW RISK',
    time: '1m ago',
  },
];

function getRiskColor(level: string) {
  switch (level) {
    case 'LOW RISK':
      return 'text-[#ff6b00]';
    case 'MODERATE RISK':
      return 'text-warning';
    case 'HIGH RISK':
      return 'text-destructive';
    default:
      return 'text-muted-foreground';
  }
}

export function RecentScans() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">RECENT SCANS</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-muted-foreground">
              <th className="pb-3 font-medium">TOKEN</th>
              <th className="pb-3 font-medium">ADDRESS</th>
              <th className="pb-3 font-medium">RISK SCORE</th>
              <th className="pb-3 font-medium">RISK LEVEL</th>
              <th className="pb-3 font-medium">TIME</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan, index) => (
              <tr key={index} className="border-t border-border">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${scan.color} text-sm`}
                    >
                      {scan.symbol}
                    </div>

                    <span className="text-sm font-medium text-white">{scan.token}</span>
                  </div>
                </td>

                <td className="py-3">
                  <span className="font-mono text-sm text-muted-foreground">{scan.address}</span>
                </td>

                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">{scan.riskScore}/100</span>

                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full ${
                          scan.riskLevel === 'LOW RISK'
                            ? 'bg-[#ff6b00]'
                            : scan.riskLevel === 'MODERATE RISK'
                              ? 'bg-warning'
                              : 'bg-destructive'
                        }`}
                        style={{
                          width: `${scan.riskScore}%`,
                        }}
                      />
                    </div>
                  </div>
                </td>

                <td className="py-3">
                  <span className={`text-xs font-semibold ${getRiskColor(scan.riskLevel)}`}>
                    {scan.riskLevel}
                  </span>
                </td>

                <td className="py-3">
                  <span className="text-sm text-muted-foreground">{scan.time}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-medium text-primary hover:underline">
        VIEW ALL SCANS
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
