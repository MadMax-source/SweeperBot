'use client';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ExploreFooter } from '@/components/explore/explore-footer';
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Users,
  Coins,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const portfolioData = [
  { name: 'PEPE_SOL', value: 45, color: '#3b82f6' },
  { name: 'DOGE AI', value: 25, color: '#22c55e' },
  { name: 'WIF HAT', value: 15, color: '#f97316' },
  { name: 'Others', value: 15, color: '#6b7280' },
];

const performanceData = [
  { month: 'Jan', profit: 12500, loss: -3200 },
  { month: 'Feb', profit: 18200, loss: -5100 },
  { month: 'Mar', profit: 8900, loss: -2800 },
  { month: 'Apr', profit: 24500, loss: -4200 },
  { month: 'May', profit: 31200, loss: -6800 },
  { month: 'Jun', profit: 28400, loss: -3900 },
];

const topPerformers = [
  {
    name: 'PEPE_SOL',
    symbol: '$PEPESOL',
    gain: '+245.8%',
    value: '$12,450',
    color: 'bg-green-500',
  },
  { name: 'DOGE AI', symbol: '$DOGEAI', gain: '+189.2%', value: '$8,920', color: 'bg-green-500' },
  { name: 'BONK 2.0', symbol: '$BONK2', gain: '+156.4%', value: '$5,680', color: 'bg-green-500' },
  { name: 'WIF HAT', symbol: '$WIF', gain: '+98.7%', value: '$3,240', color: 'bg-green-500' },
];

const recentActivity = [
  { type: 'buy', token: 'PEPE_SOL', amount: '500,000', value: '$245', time: '2m ago' },
  { type: 'sell', token: 'RUG PULL', amount: '1,000,000', value: '$0.50', time: '15m ago' },
  { type: 'buy', token: 'DOGE AI', amount: '250,000', value: '$890', time: '1h ago' },
  { type: 'alert', token: 'SCAM TOKEN', amount: '-', value: 'Avoided', time: '2h ago' },
  { type: 'buy', token: 'WIF HAT', amount: '100,000', value: '$420', time: '5h ago' },
];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Track your portfolio performance and trading insights
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">Total Portfolio Value</span>
                <Coins className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">$48,290</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500 text-xs">+12.5%</span>
                <span className="text-muted-foreground text-xs">vs last month</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">Total Profit/Loss</span>
                <BarChart3 className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-500">+$18,450</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500 text-xs">+8.2%</span>
                <span className="text-muted-foreground text-xs">this week</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">Rugs Avoided</span>
                <Activity className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-500 text-xs">$45,200</span>
                <span className="text-muted-foreground text-xs">saved</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">Win Rate</span>
                <PieChart className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">78.5%</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-muted-foreground text-xs">Based on 142 trades</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-card border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  PERFORMANCE_OVERVIEW
                </h3>
                <div className="flex gap-2">
                  {['1W', '1M', '3M', '1Y', 'ALL'].map((period) => (
                    <button
                      key={period}
                      className={`px-2 py-1 text-xs rounded ${
                        period === '1M'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 flex items-end gap-4 px-4">
                {performanceData.map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col gap-1">
                      <div
                        className="w-full bg-green-500/80 rounded-t"
                        style={{ height: `${data.profit / 400}px` }}
                      />
                      <div
                        className="w-full bg-red-500/80 rounded-b"
                        style={{ height: `${Math.abs(data.loss) / 100}px` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded" />
                  <span className="text-xs text-muted-foreground">Profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded" />
                  <span className="text-xs text-muted-foreground">Loss</span>
                </div>
              </div>
            </div>

            {/* Portfolio Distribution */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                <PieChart className="w-4 h-4 text-primary" />
                PORTFOLIO_DISTRIBUTION
              </h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {portfolioData.reduce((acc, item, i) => {
                      const prevTotal = portfolioData
                        .slice(0, i)
                        .reduce((sum, d) => sum + d.value, 0);
                      const strokeDasharray = `${item.value} ${100 - item.value}`;
                      const strokeDashoffset = -prevTotal;
                      acc.push(
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke={item.color}
                          strokeWidth="20"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                        />,
                      );
                      return acc;
                    }, [] as React.ReactNode[])}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">$48.2K</div>
                      <div className="text-xs text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {portfolioData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-green-500" />
                TOP_PERFORMERS
              </h3>
              <div className="space-y-3">
                {topPerformers.map((token, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-500">{i + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{token.name}</div>
                        <div className="text-xs text-muted-foreground">{token.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-500 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        {token.gain}
                      </div>
                      <div className="text-xs text-muted-foreground">{token.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-primary" />
                RECENT_ACTIVITY
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'buy'
                            ? 'bg-green-500/20'
                            : activity.type === 'sell'
                              ? 'bg-red-500/20'
                              : 'bg-yellow-500/20'
                        }`}
                      >
                        {activity.type === 'buy' ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : activity.type === 'sell' ? (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        ) : (
                          <Activity className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{activity.token}</div>
                        <div className="text-xs text-muted-foreground">
                          {activity.amount} tokens
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${
                          activity.type === 'buy'
                            ? 'text-green-500'
                            : activity.type === 'sell'
                              ? 'text-red-500'
                              : 'text-yellow-500'
                        }`}
                      >
                        {activity.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ExploreFooter />
      </main>
    </div>
  );
}
