"use client"

import { Terminal } from "lucide-react"

interface TerminalHeaderProps {
  command?: string
}

export function TerminalHeader({ command = "view_target --id=PEPE_SOL" }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-card/50 border border-border px-4 py-3">
      <Terminal className="h-4 w-4 text-muted-foreground" />
      <span className="font-mono text-sm text-muted-foreground">root@sweeper_os:~#</span>
      <span className="font-mono text-sm text-white">{command}</span>
    </div>
  )
}
