'use client';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ExploreFooter } from '@/components/explore/explore-footer';
import {
  Radar,
  AlertTriangle,
  Shield,
  TrendingDown,
  Activity,
  Eye,
  Clock,
  ChevronRight,
  AlertCircle,
  Skull,
  Bug,
  Lock,
} from 'lucide-react';

const threatDetections = [
  {
    id: 1,
    type: 'honeypot',
    severity: 'critical',
    token: 'SCAM_TOKEN',
    symbol: '$SCAM',
    address: 'So43f...88aa',
    description: 'Honeypot contract detected - users cannot sell',
    timestamp: '2s ago',
    icon: Skull,
  },
  {
    id: 2,
    type: 'rugpull',
    severity: 'high',
    token: 'FAKE_PEPE',
    symbol: '$FPEPE',
    address: 'So98a...77b2',
    description: 'Liquidity removal detected - 95% LP withdrawn',
    timestamp: '15s ago',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'vulnerability',
    severity: 'medium',
    token: 'RISKY_DOG',
    symbol: '$RDOG',
    address: 'So77c...22dd',
    description: 'Mint function accessible by owner',
    timestamp: '1m ago',
    icon: Bug,
  },
  {
    id: 4,
    type: 'suspicious',
    severity: 'low',
    token: 'NEW_COIN',
    symbol: '$NEWC',
    address: 'So90a...33ee',
    description: 'High concentration in top 5 wallets (45%)',
    timestamp: '3m ago',
    icon: Eye,
  },
];

const riskMetrics = [
  {
    label: 'Threats Detected',
    value: '1,247',
    change: '+23 today',
    icon: AlertTriangle,
    color: 'text-red-500',
  },
  {
    label: 'Contracts Analyzed',
    value: '45,892',
    change: '+1,234 today',
    icon: Shield,
    color: 'text-primary',
  },
  {
    label: 'Active Monitoring',
    value: '3,456',
    change: 'tokens',
    icon: Radar,
    color: 'text-green-500',
  },
  {
    label: 'Avg Response Time',
    value: '0.8s',
    change: '-0.2s',
    icon: Clock,
    color: 'text-yellow-500',
  },
];

const recentRugPulls = [
  { name: 'MOON_SCAM', amount: '$245K', time: '5m ago', victims: 1234 },
  { name: 'FAKE_SHIB', amount: '$180K', time: '23m ago', victims: 892 },
  { name: 'RUG_INU', amount: '$520K', time: '1h ago', victims: 2341 },
  { name: 'SCAM_DOGE', amount: '$89K', time: '2h ago', victims: 456 },
];

export default function RiskRadarPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="risk-radar" />

      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />

        <div className="flex-1 p-4 sm:p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <Radar className="h-7 w-7 text-primary" />
                RISK_RADAR
              </h1>
              <p className="text-muted-foreground mt-1">
                Real-time threat detection and security monitoring
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                LIVE MONITORING
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskMetrics.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-xs text-muted-foreground">{stat.change}</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Live Threat Feed */}
            <div className="lg:col-span-8 rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <h2 className="font-semibold text-white">LIVE_THREAT_FEED</h2>
                </div>
                <span className="text-xs text-muted-foreground">Auto-refreshing</span>
              </div>

              <div className="divide-y divide-border">
                {threatDetections.map((threat) => (
                  <div
                    key={threat.id}
                    className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`rounded-lg p-2 ${
                          threat.severity === 'critical'
                            ? 'bg-red-500/20'
                            : threat.severity === 'high'
                              ? 'bg-orange-500/20'
                              : threat.severity === 'medium'
                                ? 'bg-yellow-500/20'
                                : 'bg-blue-500/20'
                        }`}
                      >
                        <threat.icon
                          className={`h-5 w-5 ${
                            threat.severity === 'critical'
                              ? 'text-red-500'
                              : threat.severity === 'high'
                                ? 'text-orange-500'
                                : threat.severity === 'medium'
                                  ? 'text-yellow-500'
                                  : 'text-blue-500'
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{threat.token}</span>
                          <span className="text-sm text-orange-500">{threat.symbol}</span>
                          <span className="text-xs text-muted-foreground font-mono">
                            {threat.address}
                          </span>
                          <span
                            className={`ml-auto rounded-full px-2 py-0.5 text-xs font-medium uppercase ${
                              threat.severity === 'critical'
                                ? 'bg-red-500/20 text-red-500'
                                : threat.severity === 'high'
                                  ? 'bg-orange-500/20 text-orange-500'
                                  : threat.severity === 'medium'
                                    ? 'bg-yellow-500/20 text-yellow-500'
                                    : 'bg-blue-500/20 text-blue-500'
                            }`}
                          >
                            {threat.severity}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{threat.description}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{threat.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <button className="w-full flex items-center justify-center gap-2 text-sm text-primary hover:underline">
                  View All Threats
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-5">
              {/* Recent Rug Pulls */}
              <div className="rounded-xl border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <h2 className="font-semibold text-white">RECENT_RUGPULLS</h2>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {recentRugPulls.map((rug, idx) => (
                    <div
                      key={idx}
                      className="p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-white">{rug.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {rug.victims.toLocaleString()} victims
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-red-500">{rug.amount}</p>
                        <p className="text-xs text-muted-foreground">{rug.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Threat Distribution */}
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-white">THREAT_TYPES</h2>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Honeypots</span>
                      <span className="text-white">42%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-red-500" style={{ width: '42%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Rug Pulls</span>
                      <span className="text-white">28%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-orange-500" style={{ width: '28%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Vulnerabilities</span>
                      <span className="text-white">18%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-yellow-500" style={{ width: '18%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Suspicious Activity</span>
                      <span className="text-white">12%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: '12%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Status */}
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-500/20 p-2">
                    <Lock className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-500">SYSTEM SECURE</p>
                    <p className="text-xs text-muted-foreground">All scanners operational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExploreFooter />
      </main>
    </div>
  );
}
