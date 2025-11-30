import { ReactNode } from 'react'

interface LiquidGlassSectionProps {
    children: ReactNode
    className?: string
    fullWidth?: boolean
}

export default function LiquidGlassSection({
    children,
    className = '',
    fullWidth = false
}: LiquidGlassSectionProps) {
    return (
        <section
            className={`
        liquid-glass 
        ${fullWidth ? 'rounded-none' : 'rounded-3xl'} 
        p-12 md:p-16 shadow-glass-lg
        ${className}
      `}
        >
            {children}
        </section>
    )
}
