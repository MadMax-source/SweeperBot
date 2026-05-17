"use client"

import { Lock, Calendar } from "lucide-react"

export function RiskAnalysis() {
  const radarData = [
    { label: "Liquidity", value: 88, angle: -90 },
    { label: "Market", value: 70, angle: -18 },
    { label: "Team", value: 75, angle: 54 },
    { label: "Security", value: 92, angle: 126 },
    { label: "Holder Dist.", value: 65, angle: 198 },
  ]

  const metrics = [
    { label: "VOLATILITY", value: "LOW", type: "chart" },
    { label: "LIQUIDITY LOCK", value: "12 MONTHS", icon: Lock },
    { label: "CONTRACT AGE", value: "28 DAYS", icon: Calendar },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">RISK ANALYSIS</h3>

      <div className="flex gap-6">
        {/* Risk Score */}
        <div className="flex-shrink-0">
          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="text-xs text-muted-foreground">RISK SCORE</div>
            <div className="mt-1">
              <span className="text-3xl font-bold text-primary">18</span>
              <span className="text-lg text-muted-foreground">/100</span>
            </div>
            <div className="mt-1 text-xs font-semibold text-success">LOW RISK</div>
            <div className="mt-1 text-[10px] text-muted-foreground">Minimal issues detected</div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="relative flex-1">
          <svg viewBox="0 0 200 200" className="h-40 w-40 mx-auto">
            {/* Background pentagon */}
            <polygon
              points="100,20 180,65 165,155 35,155 20,65"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
            />
            <polygon
              points="100,40 160,75 150,140 50,140 40,75"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
            />
            <polygon
              points="100,60 140,85 135,125 65,125 60,85"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
            />
            
            {/* Data polygon */}
            <polygon
              points="100,25 172,68 155,148 45,145 28,70"
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            
            {/* Data points */}
            {radarData.map((item, i) => {
              const angles = [-90, -18, 54, 126, 198]
              const radius = (item.value / 100) * 80
              const x = 100 + radius * Math.cos((angles[i] * Math.PI) / 180)
              const y = 100 + radius * Math.sin((angles[i] * Math.PI) / 180)
              return (
                <circle
                  key={item.label}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#3b82f6"
                />
              )
            })}
          </svg>

          {/* Labels */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground">
            Liquidity<br /><span className="text-primary font-semibold">88</span>
          </div>
          <div className="absolute top-8 right-0 text-[10px] text-muted-foreground text-right">
            Market<br /><span className="text-primary font-semibold">70</span>
          </div>
          <div className="absolute bottom-8 right-2 text-[10px] text-muted-foreground text-right">
            Team<br /><span className="text-primary font-semibold">75</span>
          </div>
          <div className="absolute bottom-8 left-2 text-[10px] text-muted-foreground">
            Holder Dist.<br /><span className="text-primary font-semibold">65</span>
          </div>
          <div className="absolute top-8 left-0 text-[10px] text-muted-foreground">
            Security<br /><span className="text-primary font-semibold">92</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-border bg-secondary/30 p-3">
            <div className="text-[10px] text-muted-foreground">{metric.label}</div>
            <div className="mt-1 flex items-center gap-1">
              <span className={`text-sm font-semibold ${metric.label === "LIQUIDITY LOCK" ? "text-success" : "text-white"}`}>
                {metric.value}
              </span>
              {metric.icon && <metric.icon className="h-3 w-3 text-muted-foreground" />}
            </div>
            {metric.type === "chart" && (
              <svg className="mt-1 h-4 w-full">
                <path
                  d="M0,10 Q10,8 20,9 T40,7 T60,8 T80,6"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
