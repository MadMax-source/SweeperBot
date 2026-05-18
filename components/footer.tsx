"use client"

import { motion } from 'framer-motion';

export function Footer() {
  const links = [
    { label: 'TERMS', href: '#' },
    { label: 'SECURITY', href: '#' },
    { label: 'PRIVACY', href: '#' },
    { label: 'DOCS', href: '#' },
    { label: 'SUPPORT', href: '#' },
  ];

  return (
    <motion.footer 
      className="border-t border-border py-4 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; 2024 MEME SWEEPER // SECURING SOLANA
        </motion.span>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          {links.map((link, index) => (
            <motion.a 
              key={link.label}
              href={link.href} 
              className="hover:text-white transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, color: '#fff' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
