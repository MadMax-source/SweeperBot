"use client"

import { Terminal } from "lucide-react"

const distributionData = [
  { label: "LP", percentage: 40, color: "#3b82f6" },
  { label: "Presale", percentage: 30, color: "#f97316" },
  { label: "Team", percentage: 20, color: "#64748b" },
  { label: "Mktg", percentage: 10, color: "#f472b6" },
]

export function TelemetryData() {
  return (
    <div className="rounded-xl bg-card border border-border p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Terminal className="h-4 w-4 text-muted-foreground" />
        <span className="font-mono text-xs text-muted-foreground tracking-wider">TELEMETRY_DATA</span>
      </div>

      {/* Risk Score & Whale Concentration */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Risk Score */}
        <div className="rounded-lg bg-secondary/30 border border-border p-4">
          <span className="text-xs text-muted-foreground font-medium">RISK SCORE</span>
          <div className="mt-2">
            <span className="text-3xl font-bold text-success">18</span>
            <span className="text-lg text-success">/100</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-warning" />
            <span className="text-xs text-muted-foreground">ELEVATED VOLATILITY</span>
          </div>
        </div>

        {/* Whale Concentration */}
        <div className="rounded-lg bg-secondary/30 border border-border p-4">
          <span className="text-xs text-muted-foreground font-medium">WHALE CONCENTRATION</span>
          <div className="mt-2">
            <span className="text-3xl font-bold text-white">12.4</span>
            <span className="text-lg text-white">%</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">TOP 10 HOLDERS</span>
          </div>
        </div>
      </div>

      {/* Distribution Map */}
      <div className="rounded-lg bg-secondary/30 border border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground font-medium tracking-wider">DISTRIBUTION_MAP</span>
          <span className="text-xs text-muted-foreground">
            TOTAL: <span className="text-primary font-bold">1B</span>
          </span>
        </div>

        {/* Distribution Bar */}
        <div className="flex h-4 rounded-full overflow-hidden mb-4">
          {distributionData.map((item) => (
            <div
              key={item.label}
              style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
              className="first:rounded-l-full last:rounded-r-full"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between">
          {distributionData.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">
                {item.label} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
