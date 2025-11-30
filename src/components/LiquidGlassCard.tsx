import { ReactNode } from 'react'

interface LiquidGlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    neonBorder?: boolean
}

export default function LiquidGlassCard({
    children,
    className = '',
    hover = false,
    neonBorder = false
}: LiquidGlassCardProps) {
    return (
        <div
            className={`
        liquid-glass rounded-2xl p-6 shadow-glass
        ${hover ? 'liquid-glass-hover' : ''}
        ${neonBorder ? 'border-neon-cyan/40 shadow-neon-sm' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}
