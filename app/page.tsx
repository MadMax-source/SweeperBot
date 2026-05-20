'use client';

import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { TokenHeader } from '@/components/token-header';
import { TrustScore } from '@/components/trust-score';
import { RiskAnalysis } from '@/components/risk-analysis';
import { MarketOverview } from '@/components/market-overview';
import { DistributionMap } from '@/components/distribution-map';
import { StatsGrid } from '@/components/stats-grid';
import { LiveAlerts } from '@/components/live-alerts';
import { RecentScans } from '@/components/recent-scans';
import { Watchlist } from '@/components/watchlist';
import { Footer } from '@/components/footer';
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/motion-wrapper';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:ml-[220px]">
        <Header />

        <main className="flex-1 p-4 sm:p-6 space-y-6">
          {/* Token Header */}
          <MotionWrapper direction="down" delay={0}>
            <TokenHeader />
          </MotionWrapper>

          {/* Main Grid */}
          <StaggerContainer className="grid grid-cols-12 gap-6" staggerDelay={0.15}>
            {/* Left Column - Trust Score */}
            <StaggerItem direction="left" className="col-span-12 lg:col-span-3">
              <TrustScore />
            </StaggerItem>

            {/* Middle Column - Risk Analysis */}
            <StaggerItem direction="up" className="col-span-12 lg:col-span-5">
              <RiskAnalysis />
            </StaggerItem>

            {/* Right Column - Market Overview */}
            <StaggerItem direction="right" className="col-span-12 lg:col-span-4">
              <MarketOverview />
            </StaggerItem>
          </StaggerContainer>

          {/* Distribution Map + Live Alerts Row */}
          <StaggerContainer
            className="grid grid-cols-12 gap-6"
            staggerDelay={0.1}
            delayChildren={0.2}
          >
            <StaggerItem direction="left" className="col-span-12 lg:col-span-8">
              <DistributionMap />
            </StaggerItem>
            <StaggerItem direction="right" className="col-span-12 lg:col-span-4 lg:row-span-2">
              <LiveAlerts />
            </StaggerItem>
          </StaggerContainer>

          {/* Stats Grid */}
          <MotionWrapper direction="up" delay={0.1}>
            <StatsGrid />
          </MotionWrapper>

          {/* Recent Scans + Watchlist Row */}
          <StaggerContainer className="grid grid-cols-12 gap-6" staggerDelay={0.15}>
            <StaggerItem direction="left" className="col-span-12 lg:col-span-8">
              <RecentScans />
            </StaggerItem>
            <StaggerItem direction="right" className="col-span-12 lg:col-span-4">
              <Watchlist />
            </StaggerItem>
          </StaggerContainer>
        </main>

        <MotionWrapper direction="up" delay={0.1}>
          <Footer />
        </MotionWrapper>
      </div>
    </div>
  );
}
