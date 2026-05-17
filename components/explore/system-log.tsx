"use client"

import { Terminal, CheckCircle2 } from "lucide-react"

const logEntries = [
  { time: "14:02:45", message: "> INITIATING SMART CONTRACT AUDIT...", status: "normal" },
  { time: "14:02:46", message: "> SCANNING FOR MINT FUNCTIONS... NOT FOUND", status: "normal" },
  { time: "14:02:47", message: "> CHECKING HONEYPOT SIGNATURES... CLEAR", status: "normal" },
  { time: "14:02:48", message: "> ANALYZING LIQUIDITY LOCK TX... VERIFIED (12 MONTHS)", status: "highlight" },
  { time: "14:02:49", message: "> NO ACTIVE WARNINGS DETECTED. CONTRACT IS CLEAN.", status: "success" },
]

export function SystemLog() {
  return (
    <div className="rounded-xl bg-card border border-border p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider">SYSTEM_LOG // SECURITY_SCAN</span>
        </div>
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Log Entries */}
      <div className="font-mono text-sm space-y-2">
        {logEntries.map((entry, index) => (
          <div key={index} className="flex items-start gap-2">
            {entry.status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-success">
                  [{entry.time}] {entry.message}
                </span>
              </>
            ) : (
              <span
                className={
                  entry.status === "highlight"
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                [{entry.time}] {entry.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
