"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ExploreFooter } from "@/components/explore/explore-footer"
import { 
  Droplets, 
  Lock, 
  Unlock,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Clock,
  Search,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info
} from "lucide-react"

const liquidityPools = [
  {
    id: 1,
    token: "PEPE_SOL",
    symbol: "$PEPESOL",
    pair: "PEPESOL/SOL",
    liquidity: "$2,450,000",
    locked: true,
    lockDuration: "12 months",
    lockExpiry: "Dec 2025",
    lockPercent: 95,
    dex: "Raydium",
    trustScore: 92,
    verified: true,
  },
  {
    id: 2,
    token: "DOGE AI",
    symbol: "$DOGEAI",
    pair: "DOGEAI/SOL",
    liquidity: "$890,000",
    locked: true,
    lockDuration: "6 months",
    lockExpiry: "Jun 2025",
    lockPercent: 80,
    dex: "Orca",
    trustScore: 78,
    verified: true,
  },
  {
    id: 3,
    token: "RUG PULL INU",
    symbol: "$RPI",
    pair: "RPI/SOL",
    liquidity: "$45,000",
    locked: false,
    lockDuration: "None",
    lockExpiry: "-",
    lockPercent: 0,
    dex: "Raydium",
    trustScore: 12,
    verified: false,
  },
  {
    id: 4,
    token: "CYBER BONK",
    symbol: "$CBONK",
    pair: "CBONK/SOL",
    liquidity: "$1,200,000",
    locked: true,
    lockDuration: "24 months",
    lockExpiry: "Dec 2026",
    lockPercent: 100,
    dex: "Meteora",
    trustScore: 95,
    verified: true,
  },
  {
    id: 5,
    token: "WIF HAT",
    symbol: "$WIFH",
    pair: "WIFH/SOL",
    liquidity: "$320,000",
    locked: true,
    lockDuration: "3 months",
    lockExpiry: "Mar 2025",
    lockPercent: 50,
    dex: "Raydium",
    trustScore: 55,
    verified: false,
  },
]

const lockHistory = [
  { token: "PEPE_SOL", action: "Lock Extended", amount: "$500K LP", time: "2h ago", status: "success" },
  { token: "CYBER BONK", action: "New Lock", amount: "$1.2M LP", time: "5h ago", status: "success" },
  { token: "RUG PULL INU", action: "Liquidity Removed", amount: "$120K LP", time: "8h ago", status: "danger" },
  { token: "DOGE AI", action: "Lock Verified", amount: "$890K LP", time: "12h ago", status: "success" },
  { token: "WIF HAT", action: "Partial Unlock", amount: "$80K LP", time: "1d ago", status: "warning" },
]

function getTrustScoreColor(score: number) {
  if (score >= 80) return "text-green-500"
  if (score >= 50) return "text-orange-500"
  return "text-red-500"
}

function getTrustScoreBg(score: number) {
  if (score >= 80) return "bg-green-500"
  if (score >= 50) return "bg-orange-500"
  return "bg-red-500"
}

export default function LiquidityCheckPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 p-6 overflow-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                LIQUIDITY_CHECK
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Verify liquidity locks and detect potential rug pulls</p>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search token or contract..." 
                className="bg-card border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500 w-[300px]"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-green-500" />
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Locked Pools</p>
              </div>
              <p className="text-2xl font-bold text-foreground">1,248</p>
              <p className="text-green-500 text-xs mt-1">78% of tracked</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Unlock className="w-4 h-4 text-red-500" />
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Unlocked Pools</p>
              </div>
              <p className="text-2xl font-bold text-red-500">352</p>
              <p className="text-muted-foreground text-xs mt-1">High risk</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Total TVL Locked</p>
              </div>
              <p className="text-2xl font-bold text-foreground">$245M</p>
              <p className="text-green-500 text-xs mt-1">+12.5% this week</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-orange-500" />
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Rugs Prevented</p>
              </div>
              <p className="text-2xl font-bold text-foreground">89</p>
              <p className="text-muted-foreground text-xs mt-1">This month</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Liquidity Pools Table */}
            <div className="lg:col-span-2 bg-card border border-border rounded-lg">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Liquidity Pools</h2>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">All</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">Locked</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">Unlocked</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">Expiring Soon</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Token</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Liquidity</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Lock Status</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Lock %</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Expiry</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Trust</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {liquidityPools.map((pool) => (
                      <tr key={pool.id} className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                              {pool.token.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-foreground">{pool.token}</p>
                                {pool.verified && (
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{pool.pair} on {pool.dex}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-foreground">{pool.liquidity}</p>
                        </td>
                        <td className="p-4">
                          {pool.locked ? (
                            <span className="inline-flex items-center gap-1 text-green-500 text-sm">
                              <Lock className="w-4 h-4" />
                              Locked
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-red-500 text-sm">
                              <Unlock className="w-4 h-4" />
                              Unlocked
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${pool.lockPercent >= 80 ? 'bg-green-500' : pool.lockPercent >= 50 ? 'bg-orange-500' : 'bg-red-500'}`}
                                style={{ width: `${pool.lockPercent}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground">{pool.lockPercent}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-sm text-foreground">{pool.lockExpiry}</p>
                          <p className="text-xs text-muted-foreground">{pool.lockDuration}</p>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTrustScoreBg(pool.trustScore)}/20`}>
                              <span className={`text-sm font-bold ${getTrustScoreColor(pool.trustScore)}`}>{pool.trustScore}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Lock Checker */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  Quick Lock Check
                </h2>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Enter LP token address..." 
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                  />
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold">
                    Check Lock Status
                  </button>
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Info className="w-4 h-4" />
                    <span>Supports Raydium, Orca, Meteora, and Jupiter LP tokens</span>
                  </div>
                </div>
              </div>

              {/* Lock History */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Recent Lock Activity
                  </h2>
                </div>
                <div className="divide-y divide-border">
                  {lockHistory.map((item, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.status === 'success' ? 'bg-green-500/20' :
                          item.status === 'warning' ? 'bg-orange-500/20' : 'bg-red-500/20'
                        }`}>
                          {item.status === 'success' ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : item.status === 'warning' ? (
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.token}</p>
                          <p className="text-xs text-muted-foreground">{item.action}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{item.amount}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Indicators */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Risk Indicators</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Locked {">"} 12 months</span>
                    <span className="text-sm text-green-500 font-semibold">Low Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Locked 6-12 months</span>
                    <span className="text-sm text-green-500 font-semibold">Low Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Locked 3-6 months</span>
                    <span className="text-sm text-orange-500 font-semibold">Medium Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Locked {"<"} 3 months</span>
                    <span className="text-sm text-orange-500 font-semibold">Medium Risk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Unlocked / No Lock</span>
                    <span className="text-sm text-red-500 font-semibold">High Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExploreFooter />
      </main>
    </div>
  )
}
