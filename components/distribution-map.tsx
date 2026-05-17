"use client"

export function DistributionMap() {
  const segments = [
    { label: "LP Locked", percentage: 40, color: "#3b82f6" },
    { label: "Presale", percentage: 30, color: "#ff6b00" },
    { label: "Team", percentage: 20, color: "#64748b" },
    { label: "Marketing", percentage: 10, color: "#ef4444" },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">DISTRIBUTION MAP</h3>
        <span className="text-xs text-muted-foreground">TOTAL SUPPLY: 1,000,000,000</span>
      </div>

      {/* Distribution Bar */}
      <div className="flex h-6 w-full overflow-hidden rounded-lg">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="h-full transition-all"
            style={{
              width: `${segment.percentage}%`,
              backgroundColor: segment.color,
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-4">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2 text-xs">
            <div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-muted-foreground">
              {segment.label} ({segment.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
