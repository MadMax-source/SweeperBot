'use client';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ExploreFooter } from '@/components/explore/explore-footer';
import {
  Bell,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  X,
  Filter,
  Settings,
  Trash2,
  ExternalLink,
  Clock,
  TrendingDown,
  ShieldAlert,
  Wallet,
  Droplets,
} from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Rug Pull Detected',
    message: 'SCAM_TOKEN liquidity has been completely removed. 100% of LP drained.',
    token: 'SCAM_TOKEN',
    timestamp: '2m ago',
    read: false,
    category: 'security',
  },
  {
    id: 2,
    type: 'critical',
    title: 'High Sell Tax Detected',
    message: 'PEPE_FAKE has increased sell tax to 99%. Avoid trading.',
    token: 'PEPE_FAKE',
    timestamp: '5m ago',
    read: false,
    category: 'security',
  },
  {
    id: 3,
    type: 'warning',
    title: 'Large Wallet Dump',
    message: 'Whale wallet sold 15% of DOGE_AI supply. Price impact: -23%',
    token: 'DOGE_AI',
    timestamp: '12m ago',
    read: false,
    category: 'whale',
  },
  {
    id: 4,
    type: 'warning',
    title: 'Liquidity Unlock Soon',
    message: 'WIF_HAT liquidity lock expires in 24 hours. Monitor closely.',
    token: 'WIF_HAT',
    timestamp: '25m ago',
    read: true,
    category: 'liquidity',
  },
  {
    id: 5,
    type: 'info',
    title: 'New Whale Entry',
    message: 'Large wallet purchased $245K worth of CYBER_BONK',
    token: 'CYBER_BONK',
    timestamp: '1h ago',
    read: true,
    category: 'whale',
  },
  {
    id: 6,
    type: 'success',
    title: 'Contract Verified',
    message: 'SAFE_MOON contract has been verified on explorer',
    token: 'SAFE_MOON',
    timestamp: '2h ago',
    read: true,
    category: 'security',
  },
  {
    id: 7,
    type: 'warning',
    title: 'Unusual Trading Pattern',
    message: 'PEPE_SOL showing abnormal buy/sell ratio. Possible manipulation.',
    token: 'PEPE_SOL',
    timestamp: '3h ago',
    read: true,
    category: 'trading',
  },
  {
    id: 8,
    type: 'info',
    title: 'Watchlist Price Alert',
    message: 'BONK_INU reached your target price of $0.00001',
    token: 'BONK_INU',
    timestamp: '4h ago',
    read: true,
    category: 'watchlist',
  },
];

const alertStats = {
  total: 127,
  unread: 12,
  critical: 3,
  warning: 24,
  resolved: 89,
};

function getAlertIcon(type: string) {
  switch (type) {
    case 'critical':
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-orange-500" />;
    case 'info':
      return <Info className="w-5 h-5 text-blue-500" />;
    case 'success':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    default:
      return <Bell className="w-5 h-5 text-muted-foreground" />;
  }
}

function getAlertBg(type: string) {
  switch (type) {
    case 'critical':
      return 'bg-red-500/10 border-red-500/30';
    case 'warning':
      return 'bg-orange-500/10 border-orange-500/30';
    case 'info':
      return 'bg-blue-500/10 border-blue-500/30';
    case 'success':
      return 'bg-green-500/10 border-green-500/30';
    default:
      return 'bg-muted border-border';
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case 'security':
      return <ShieldAlert className="w-4 h-4" />;
    case 'whale':
      return <Wallet className="w-4 h-4" />;
    case 'liquidity':
      return <Droplets className="w-4 h-4" />;
    case 'trading':
      return <TrendingDown className="w-4 h-4" />;
    default:
      return <Bell className="w-4 h-4" />;
  }
}

export default function AlertsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 p-6 overflow-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Bell className="w-6 h-6 text-blue-500" />
                ALERTS
                <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-sm rounded-full">
                  {alertStats.unread}
                </span>
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Real-time security and market alerts for your tracked tokens
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                <Settings className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Settings</span>
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Total Alerts</p>
              <p className="text-2xl font-bold text-foreground mt-1">{alertStats.total}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Unread</p>
              <p className="text-2xl font-bold text-blue-500 mt-1">{alertStats.unread}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Critical</p>
              <p className="text-2xl font-bold text-red-500 mt-1">{alertStats.critical}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Warning</p>
              <p className="text-2xl font-bold text-orange-500 mt-1">{alertStats.warning}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Resolved</p>
              <p className="text-2xl font-bold text-green-500 mt-1">{alertStats.resolved}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Alerts List */}
            <div className="lg:col-span-2 space-y-4">
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mb-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg">All</button>
                <button className="px-4 py-2 bg-card text-muted-foreground text-sm rounded-lg hover:text-foreground transition-colors">
                  Critical
                </button>
                <button className="px-4 py-2 bg-card text-muted-foreground text-sm rounded-lg hover:text-foreground transition-colors">
                  Warnings
                </button>
                <button className="px-4 py-2 bg-card text-muted-foreground text-sm rounded-lg hover:text-foreground transition-colors">
                  Info
                </button>
                <button className="px-4 py-2 bg-card text-muted-foreground text-sm rounded-lg hover:text-foreground transition-colors">
                  Unread
                </button>
              </div>

              {/* Alert Items */}
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${getAlertBg(alert.type)} ${!alert.read ? 'ring-1 ring-blue-500/50' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{alert.title}</h3>
                          {!alert.read && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {getCategoryIcon(alert.category)}
                            {alert.category}
                          </span>
                          <span className="text-xs text-blue-500 font-mono">{alert.token}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {alert.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors group">
                        <X className="w-4 h-4 text-muted-foreground group-hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More */}
              <button className="w-full py-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                Load More Alerts
              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Alert Settings */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Alert Preferences
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-foreground">Security Alerts</span>
                    </div>
                    <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-foreground">Whale Movements</span>
                    </div>
                    <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-foreground">Liquidity Changes</span>
                    </div>
                    <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-foreground">Price Alerts</span>
                    </div>
                    <div className="w-10 h-5 bg-muted rounded-full relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Critical Summary */}
              <div className="bg-card border border-red-500/30 rounded-lg">
                <div className="p-4 border-b border-border">
                  <h2 className="text-sm font-semibold text-red-500 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Critical Alerts
                  </h2>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">SCAM_TOKEN</p>
                      <p className="text-xs text-red-500">Rug Pull Detected</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">PEPE_FAKE</p>
                      <p className="text-xs text-red-500">99% Sell Tax</p>
                    </div>
                    <span className="text-xs text-muted-foreground">5m ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">MOON_SCAM</p>
                      <p className="text-xs text-red-500">Honeypot Detected</p>
                    </div>
                    <span className="text-xs text-muted-foreground">18m ago</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                    Mark All as Read
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-card border border-border hover:bg-muted text-foreground rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                    Clear All Alerts
                  </button>
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
