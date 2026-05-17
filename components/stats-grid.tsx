"use client"

interface StatCardProps {
  label: string
  value: string
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
      <svg className="mt-2 h-6 w-full opacity-50">
        <path
          d="M0,15 Q10,12 20,14 T40,10 T60,12 T80,8 T100,10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export function StatsGrid() {
  const stats = [
    { label: "TOKENS SCANNED", value: "12,540" },
    { label: "RUGS DETECTED", value: "342" },
    { label: "SCAMS BLOCKED", value: "1,102" },
    { label: "USERS PROTECTED", value: "8,932" },
    { label: "PROJECTS MONITORED", value: "1,248" },
  ]

  return (
    <div className="grid grid-cols-5 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}
