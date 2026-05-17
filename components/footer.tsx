"use client"

export function Footer() {
  return (
    <footer className="border-t border-border py-4 px-6">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>&copy; 2024 MEME SWEEPER // SECURING SOLANA</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">SECURITY</a>
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-white transition-colors">DOCS</a>
          <a href="#" className="hover:text-white transition-colors">SUPPORT</a>
        </div>
      </div>
    </footer>
  )
}
