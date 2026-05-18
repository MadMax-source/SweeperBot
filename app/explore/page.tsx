import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { TerminalHeader } from '@/components/explore/terminal-header';
import { ExploreTokenHeader } from '@/components/explore/explore-token-header';
import { SystemTrustScore } from '@/components/explore/system-trust-score';
import { TelemetryData } from '@/components/explore/telemetry-data';
import { SystemLog } from '@/components/explore/system-log';
import { ExploreFooter } from '@/components/explore/explore-footer';

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="explore" />

      {/* Main Content */}
      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />

        <div className="flex-1 p-6 space-y-5">
          {/* Terminal Header */}
          <TerminalHeader />

          {/* Token Header */}
          <ExploreTokenHeader />

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-5">
            {/* Left Column - Trust Score */}
            <div className="col-span-4">
              <SystemTrustScore />
            </div>

            {/* Right Column - Telemetry Data */}
            <div className="col-span-8">
              <TelemetryData />
            </div>
          </div>

          {/* System Log */}
          <SystemLog />
        </div>

        {/* Footer */}
        <ExploreFooter />
      </main>
    </div>
  );
}
