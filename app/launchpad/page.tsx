'use client';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ExploreFooter } from '@/components/explore/explore-footer';
import {
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Star,
  Zap,
} from 'lucide-react';

const upcomingLaunches = [
  {
    id: 1,
    name: 'COSMIC_DOG',
    symbol: '$CDOG',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg',
    status: 'upcoming',
    launchDate: '2024-12-15',
    raised: 245000,
    hardCap: 500000,
    participants: 1247,
    trustScore: 88,
    verified: true,
  },
  {
    id: 2,
    name: 'NINJA_FROG',
    symbol: '$NFROG',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg',
    status: 'live',
    launchDate: '2024-12-10',
    raised: 380000,
    hardCap: 400000,
    participants: 2156,
    trustScore: 92,
    verified: true,
  },
  {
    id: 3,
    name: 'MOON_CAT',
    symbol: '$MCAT',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg',
    status: 'upcoming',
    launchDate: '2024-12-20',
    raised: 120000,
    hardCap: 300000,
    participants: 856,
    trustScore: 75,
    verified: false,
  },
  {
    id: 4,
    name: 'DEGEN_APE',
    symbol: '$DAPE',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4shot-Mk4G3q3pHtP4WwOWlHgYhFewNiE8Rs.jpg',
    status: 'ended',
    launchDate: '2024-12-05',
    raised: 600000,
    hardCap: 600000,
    participants: 3421,
    trustScore: 95,
    verified: true,
  },
];

const launchpadStats = [
  { label: 'Total Launches', value: '156', icon: Rocket, change: '+12 this month' },
  { label: 'Total Raised', value: '$24.5M', icon: TrendingUp, change: '+18.5%' },
  { label: 'Active Users', value: '45,230', icon: Users, change: '+2,340' },
  { label: 'Avg Trust Score', value: '84/100', icon: Shield, change: '+3.2' },
];

export default function LaunchpadPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="launchpad" />

      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />

        <div className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <Rocket className="h-7 w-7 text-primary" />
                LAUNCHPAD
              </h1>
              <p className="text-muted-foreground mt-1">
                Discover and participate in verified token launches
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90">
              <Zap className="h-4 w-4" />
              APPLY TO LAUNCH
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {launchpadStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs text-green-500">{stat.change}</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <button className="rounded-lg bg-primary/20 border border-primary px-4 py-2 text-sm font-medium text-primary">
              All Launches
            </button>
            <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Live Now
            </button>
            <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Upcoming
            </button>
            <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Ended
            </button>
          </div>

          {/* Launch Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {upcomingLaunches.map((launch) => (
              <div
                key={launch.id}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Token Image */}
                  <div className="relative">
                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                      <span className="text-2xl">🐸</span>
                    </div>
                    {launch.verified && (
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Token Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{launch.name}</h3>
                      <span className="text-sm text-orange-500">{launch.symbol}</span>
                      {launch.status === 'live' && (
                        <span className="ml-auto flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                          LIVE
                        </span>
                      )}
                      {launch.status === 'upcoming' && (
                        <span className="ml-auto flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-500">
                          <Clock className="h-3 w-3" />
                          UPCOMING
                        </span>
                      )}
                      {launch.status === 'ended' && (
                        <span className="ml-auto flex items-center gap-1 rounded-full bg-gray-500/20 px-2 py-0.5 text-xs font-medium text-gray-400">
                          ENDED
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {launch.participants.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span
                          className={
                            launch.trustScore >= 80
                              ? 'text-green-500'
                              : launch.trustScore >= 60
                                ? 'text-yellow-500'
                                : 'text-red-500'
                          }
                        >
                          {launch.trustScore}/100
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {new Date(launch.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="text-white font-medium">
                      ${(launch.raised / 1000).toFixed(0)}K / ${(launch.hardCap / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400 transition-all"
                      style={{ width: `${(launch.raised / launch.hardCap) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-right">
                    {((launch.raised / launch.hardCap) * 100).toFixed(1)}% filled
                  </p>
                </div>

                {/* Action Button */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-primary/10 border border-primary/30 py-2.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <ExploreFooter />
      </main>
    </div>
  );
}
