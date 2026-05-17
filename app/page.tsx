import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { TokenHeader } from "@/components/token-header"
import { TrustScore } from "@/components/trust-score"
import { RiskAnalysis } from "@/components/risk-analysis"
import { MarketOverview } from "@/components/market-overview"
import { DistributionMap } from "@/components/distribution-map"
import { StatsGrid } from "@/components/stats-grid"
import { LiveAlerts } from "@/components/live-alerts"
import { RecentScans } from "@/components/recent-scans"
import { Watchlist } from "@/components/watchlist"
import { Footer } from "@/components/footer"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col ml-[220px]">
        <Header />

        <main className="flex-1 p-6 space-y-6">
          {/* Token Header */}
          <TokenHeader />

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Trust Score */}
            <div className="col-span-3">
              <TrustScore />
            </div>

            {/* Middle Column - Risk Analysis */}
            <div className="col-span-5">
              <RiskAnalysis />
            </div>

            {/* Right Column - Market Overview */}
            <div className="col-span-4">
              <MarketOverview />
            </div>
          </div>

          {/* Distribution Map + Live Alerts Row */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <DistributionMap />
            </div>
            <div className="col-span-4 row-span-2">
              <LiveAlerts />
            </div>
          </div>

          {/* Stats Grid */}
          <StatsGrid />

          {/* Recent Scans + Watchlist Row */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <RecentScans />
            </div>
            <div className="col-span-4">
              <Watchlist />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
