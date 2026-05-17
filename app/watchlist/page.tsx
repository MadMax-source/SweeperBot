"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ExploreFooter } from "@/components/explore/explore-footer"
import { 
  Eye,
  Plus,
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Bell,
  BellOff,
  Trash2,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Filter
} from "lucide-react"

const watchlistTokens = [
  {
    id: 1,
    name: "PEPE_SOL",
    symbol: "$PEPESOL",
    price: "$0.00245",
    change24h: "+12.45%",
    isPositive: true,
    marketCap: "$245M",
    volume24h: "$12.4M",
    trustScore: 92,
    riskLevel: "LOW RISK",
    alerts: true,
    starred: true,
    verified: true
  },
  {
    id: 2,
    name: "PEPE MATRIX",
    symbol: "$PEPMX",
    price: "$0.00089",
    change24h: "+5.67%",
    isPositive: true,
    marketCap: "$89M",
    volume24h: "$4.2M",
    trustScore: 68,
    riskLevel: "MODERATE",
    alerts: true,
    starred: true,
    verified: true
  },
  {
    id: 3,
    name: "RUG PULL INU",
    symbol: "$RPI",
    price: "$0.00001",
    change24h: "-45.23%",
    isPositive: false,
    marketCap: "$1.2M",
    volume24h: "$890K",
    trustScore: 12,
    riskLevel: "HIGH RISK",
    alerts: true,
    starred: false,
    verified: false
  },
  {
    id: 4,
    name: "CYBER BONK",
    symbol: "$CBONK",
    price: "$0.00456",
    change24h: "+8.92%",
    isPositive: true,
    marketCap: "$156M",
    volume24h: "$8.9M",
    trustScore: 88,
    riskLevel: "LOW RISK",
    alerts: false,
    starred: true,
    verified: true
  },
  {
    id: 5,
    name: "NEO WIF HAT",
    symbol: "$NWIF",
    price: "$0.00123",
    change24h: "-2.34%",
    isPositive: false,
    marketCap: "$45M",
    volume24h: "$2.1M",
    trustScore: 55,
    riskLevel: "MODERATE",
    alerts: true,
    starred: false,
    verified: false
  },
  {
    id: 6,
    name: "DOGE AI",
    symbol: "$DOGEAI",
    price: "$0.00678",
    change24h: "+15.67%",
    isPositive: true,
    marketCap: "$320M",
    volume24h: "$18.9M",
    trustScore: 78,
    riskLevel: "LOW RISK",
    alerts: true,
    starred: true,
    verified: true
  },
]

function getRiskColor(level: string) {
  if (level === "LOW RISK") return "text-green-500 bg-green-500/10"
  if (level === "MODERATE") return "text-orange-500 bg-orange-500/10"
  return "text-red-500 bg-red-500/10"
}

function getTrustScoreColor(score: number) {
  if (score >= 80) return "text-green-500"
  if (score >= 50) return "text-orange-500"
  return "text-red-500"
}

export default function WatchlistPage() {
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
                <Eye className="w-6 h-6 text-blue-500" />
                WATCHLIST
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Track and monitor your favorite tokens</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search watchlist..." 
                  className="bg-card border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500 w-[250px]"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                <Filter className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                Add Token
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Tracked Tokens</p>
              <p className="text-2xl font-bold text-foreground mt-1">{watchlistTokens.length}</p>
              <p className="text-muted-foreground text-xs mt-1">Across all lists</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Alerts Active</p>
              <p className="text-2xl font-bold text-blue-500 mt-1">{watchlistTokens.filter(t => t.alerts).length}</p>
              <p className="text-muted-foreground text-xs mt-1">Price & security</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Gainers (24h)</p>
              <p className="text-2xl font-bold text-green-500 mt-1">{watchlistTokens.filter(t => t.isPositive).length}</p>
              <p className="text-green-500 text-xs mt-1">Performing well</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">High Risk</p>
              <p className="text-2xl font-bold text-red-500 mt-1">{watchlistTokens.filter(t => t.riskLevel === "HIGH RISK").length}</p>
              <p className="text-red-500 text-xs mt-1">Needs attention</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Watchlist Table */}
            <div className="lg:col-span-2 bg-card border border-border rounded-lg">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">My Watchlist</h2>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">All</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">Starred</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">Low Risk</button>
                  <button className="px-3 py-1.5 bg-background text-muted-foreground text-xs rounded-lg hover:text-foreground transition-colors">High Risk</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider w-8"></th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Token</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">24h Change</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Market Cap</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Trust</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Risk</th>
                      <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {watchlistTokens.map((token) => (
                      <tr key={token.id} className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <button className={`${token.starred ? 'text-yellow-500' : 'text-muted-foreground'} hover:text-yellow-500 transition-colors`}>
                            <Star className={`w-4 h-4 ${token.starred ? 'fill-current' : ''}`} />
                          </button>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                              {token.name.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-foreground">{token.name}</p>
                                {token.verified && (
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{token.symbol}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-foreground">{token.price}</p>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            {token.isPositive ? (
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-500" />
                            )}
                            <span className={token.isPositive ? 'text-green-500' : 'text-red-500'}>
                              {token.change24h}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-foreground">{token.marketCap}</p>
                        </td>
                        <td className="p-4">
                          <span className={`font-bold ${getTrustScoreColor(token.trustScore)}`}>
                            {token.trustScore}/100
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`text-xs px-2 py-1 rounded ${getRiskColor(token.riskLevel)}`}>
                            {token.riskLevel}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <button className={`p-1.5 rounded hover:bg-muted transition-colors ${token.alerts ? 'text-blue-500' : 'text-muted-foreground'}`}>
                              {token.alerts ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                            </button>
                            <button className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Add */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-500" />
                  Quick Add Token
                </h2>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Enter token address or name..." 
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                  />
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold">
                    Add to Watchlist
                  </button>
                </div>
              </div>

              {/* Top Gainers */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    Top Gainers
                  </h2>
                </div>
                <div className="divide-y divide-border">
                  {watchlistTokens
                    .filter(t => t.isPositive)
                    .sort((a, b) => parseFloat(b.change24h) - parseFloat(a.change24h))
                    .slice(0, 3)
                    .map((token) => (
                      <div key={token.id} className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                            {token.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{token.name}</p>
                            <p className="text-xs text-muted-foreground">{token.symbol}</p>
                          </div>
                        </div>
                        <span className="text-green-500 font-semibold">{token.change24h}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Risk Alerts */}
              <div className="bg-card border border-red-500/30 rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-red-500 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Risk Alerts
                  </h2>
                </div>
                <div className="p-4 space-y-3">
                  {watchlistTokens
                    .filter(t => t.riskLevel === "HIGH RISK")
                    .map((token) => (
                      <div key={token.id} className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-foreground">{token.name}</p>
                          <p className="text-xs text-red-500">Trust Score: {token.trustScore}/100</p>
                        </div>
                        <button className="p-1.5 hover:bg-red-500/20 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    ))}
                  {watchlistTokens.filter(t => t.riskLevel === "HIGH RISK").length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No high risk tokens</p>
                  )}
                </div>
              </div>

              {/* Watchlist Summary */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Summary</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="text-sm text-foreground font-semibold">$856.2M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Trust Score</span>
                    <span className="text-sm text-green-500 font-semibold">65.5/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Verified Tokens</span>
                    <span className="text-sm text-foreground font-semibold">{watchlistTokens.filter(t => t.verified).length}/{watchlistTokens.length}</span>
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
