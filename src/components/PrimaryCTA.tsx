import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PrimaryCTAProps {
    children: ReactNode
    to?: string
    href?: string
    onClick?: () => void
    className?: string
    variant?: 'primary' | 'secondary'
}

export default function PrimaryCTA({
    children,
    to,
    href,
    onClick,
    className = '',
    variant = 'primary'
}: PrimaryCTAProps) {
    const baseStyles = `
    inline-flex items-center justify-center px-8 py-4 
    rounded-full font-semibold text-lg
    transition-all duration-300 
    group relative overflow-hidden
  `

    const variants = {
        primary: `
      bg-gradient-to-r from-neon-cyan to-neon-blue 
      text-obsidian-950 
      shadow-neon hover:shadow-neon-lg 
      hover:scale-105
    `,
        secondary: `
      liquid-glass border-2 border-neon-cyan/50 
      text-steel-100 
      hover:border-neon-cyan hover:shadow-neon-sm
      hover:bg-white/5
    `
    }

    const classes = `${baseStyles} ${variants[variant]} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes}>
                <span className="relative z-10">{children}</span>
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes}>
                <span className="relative z-10">{children}</span>
            </a>
        )
    }

    return (
        <button onClick={onClick} className={classes}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}
