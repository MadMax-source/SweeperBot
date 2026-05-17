"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ExploreFooter } from "@/components/explore/explore-footer"
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight,
  Copy,
  ExternalLink,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Trash2
} from "lucide-react"

const trackedWallets = [
  {
    id: 1,
    label: "Whale Alpha",
    address: "7xKXt...9Fj2",
    fullAddress: "7xKXtG8ZdR9uVmE3n4p5qWcXyBa9Fj2",
    balance: "$2,450,000",
    change24h: "+12.5%",
    isPositive: true,
    lastActivity: "2m ago",
    status: "active",
    tags: ["Whale", "Smart Money"]
  },
  {
    id: 2,
    label: "Dev Wallet",
    address: "3mNp5...K8x1",
    fullAddress: "3mNp5rTvWqL2sBn6hYcDjEfUa7K8x1",
    balance: "$890,000",
    change24h: "-3.2%",
    isPositive: false,
    lastActivity: "15m ago",
    status: "warning",
    tags: ["Developer", "High Risk"]
  },
  {
    id: 3,
    label: "LP Provider",
    address: "9kLm2...P4v7",
    fullAddress: "9kLm2xNrFsG5tYj8wZcQeHbUa3P4v7",
    balance: "$1,200,000",
    change24h: "+5.8%",
    isPositive: true,
    lastActivity: "1h ago",
    status: "active",
    tags: ["Liquidity"]
  },
  {
    id: 4,
    label: "Suspicious Wallet",
    address: "5jHn8...R2m9",
    fullAddress: "5jHn8vCpXkW4qDf6sYtNbMaLe1R2m9",
    balance: "$450,000",
    change24h: "-18.4%",
    isPositive: false,
    lastActivity: "5m ago",
    status: "danger",
    tags: ["Flagged", "Rug Risk"]
  },
]

const recentTransactions = [
  { type: "out", amount: "500,000 PEPE", usdValue: "$12,500", wallet: "Whale Alpha", time: "2m ago", to: "DEX Swap" },
  { type: "in", amount: "1.2M DOGE", usdValue: "$45,000", wallet: "LP Provider", time: "8m ago", to: "Liquidity Add" },
  { type: "out", amount: "2.5M BONK", usdValue: "$8,900", wallet: "Suspicious Wallet", time: "12m ago", to: "Unknown" },
  { type: "in", amount: "800K WIF", usdValue: "$28,000", wallet: "Dev Wallet", time: "25m ago", to: "Team Vest" },
  { type: "out", amount: "10M PEPE", usdValue: "$250,000", wallet: "Whale Alpha", time: "1h ago", to: "CEX Deposit" },
]

const walletAlerts = [
  { wallet: "Suspicious Wallet", message: "Large outflow detected - 18% of holdings moved", severity: "critical", time: "5m ago" },
  { wallet: "Dev Wallet", message: "First transaction in 30 days", severity: "warning", time: "15m ago" },
  { wallet: "Whale Alpha", message: "CEX deposit detected", severity: "info", time: "1h ago" },
]

export default function WalletTrackerPage() {
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
                <Wallet className="w-6 h-6 text-blue-500" />
                WALLET_TRACKER
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Monitor wallet activities and detect suspicious movements</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              Add Wallet
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Tracked Wallets</p>
              <p className="text-2xl font-bold text-foreground mt-1">24</p>
              <p className="text-green-500 text-xs mt-1">+3 this week</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Total Value</p>
              <p className="text-2xl font-bold text-foreground mt-1">$4.99M</p>
              <p className="text-green-500 text-xs mt-1">+8.2% 24h</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Active Alerts</p>
              <p className="text-2xl font-bold text-orange-500 mt-1">7</p>
              <p className="text-muted-foreground text-xs mt-1">2 critical</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Transactions (24h)</p>
              <p className="text-2xl font-bold text-foreground mt-1">156</p>
              <p className="text-muted-foreground text-xs mt-1">$2.1M volume</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tracked Wallets List */}
            <div className="lg:col-span-2 bg-card border border-border rounded-lg">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Tracked Wallets</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search wallets..." 
                      className="bg-background border border-border rounded-lg pl-9 pr-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <button className="p-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div className="divide-y divide-border">
                {trackedWallets.map((wallet) => (
                  <div key={wallet.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          wallet.status === 'active' ? 'bg-green-500/20' : 
                          wallet.status === 'warning' ? 'bg-orange-500/20' : 'bg-red-500/20'
                        }`}>
                          <Wallet className={`w-5 h-5 ${
                            wallet.status === 'active' ? 'text-green-500' : 
                            wallet.status === 'warning' ? 'text-orange-500' : 'text-red-500'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-foreground">{wallet.label}</p>
                            {wallet.tags.map((tag) => (
                              <span key={tag} className={`text-xs px-2 py-0.5 rounded ${
                                tag === 'Whale' ? 'bg-blue-500/20 text-blue-400' :
                                tag === 'Smart Money' ? 'bg-green-500/20 text-green-400' :
                                tag === 'High Risk' || tag === 'Rug Risk' ? 'bg-red-500/20 text-red-400' :
                                tag === 'Flagged' ? 'bg-orange-500/20 text-orange-400' :
                                'bg-muted text-muted-foreground'
                              }`}>{tag}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-muted-foreground font-mono">{wallet.address}</p>
                            <button className="text-muted-foreground hover:text-foreground">
                              <Copy className="w-3 h-3" />
                            </button>
                            <button className="text-muted-foreground hover:text-foreground">
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{wallet.balance}</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          {wallet.isPositive ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500" />
                          )}
                          <span className={wallet.isPositive ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>
                            {wallet.change24h}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {wallet.lastActivity}
                        </span>
                        <button className="p-1.5 hover:bg-red-500/20 rounded transition-colors group">
                          <Trash2 className="w-4 h-4 text-muted-foreground group-hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Wallet Alerts */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Wallet Alerts</h2>
                </div>
                <div className="divide-y divide-border">
                  {walletAlerts.map((alert, idx) => (
                    <div key={idx} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          alert.severity === 'critical' ? 'bg-red-500/20' :
                          alert.severity === 'warning' ? 'bg-orange-500/20' : 'bg-blue-500/20'
                        }`}>
                          <AlertTriangle className={`w-4 h-4 ${
                            alert.severity === 'critical' ? 'text-red-500' :
                            alert.severity === 'warning' ? 'text-orange-500' : 'text-blue-500'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{alert.wallet}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Recent Transactions</h2>
                </div>
                <div className="divide-y divide-border max-h-[300px] overflow-auto">
                  {recentTransactions.map((tx, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === 'in' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          {tx.type === 'in' ? (
                            <ArrowDownRight className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{tx.amount}</p>
                          <p className="text-xs text-muted-foreground">{tx.wallet}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{tx.usdValue}</p>
                        <p className="text-xs text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                  ))}
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
