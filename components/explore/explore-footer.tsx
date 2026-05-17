"use client"

export function ExploreFooter() {
  return (
    <footer className="border-t border-border py-4 px-6">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>&copy; 2024 MEME SWEEPER // SECURING SOLANA</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">TELEGRAM</a>
          <a href="#" className="hover:text-white transition-colors">DISCORD</a>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">SECURITY</a>
        </div>
      </div>
    </footer>
  )
}
