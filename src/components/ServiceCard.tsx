import { ReactNode } from 'react'

interface ServiceCardProps {
    title: string
    description: string
    icon?: ReactNode
    features?: string[]
    className?: string
}

export default function ServiceCard({
    title,
    description,
    icon,
    features,
    className = ''
}: ServiceCardProps) {
    return (
        <div
            className={`
        liquid-glass rounded-2xl p-8 
        border border-steel-700/30
        hover:border-neon-cyan/40 
        transition-all duration-300
        hover:shadow-neon-sm
        group
        ${className}
      `}
        >
            {icon && (
                <div className="mb-6 text-neon-cyan text-4xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            )}

            <h3 className="text-2xl font-bold mb-4 text-steel-50 group-hover:text-white transition-colors">
                {title}
            </h3>

            <p className="text-steel-300 mb-6 leading-relaxed">
                {description}
            </p>

            {features && features.length > 0 && (
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start text-steel-400 text-sm">
                            <span className="text-neon-cyan mr-2 mt-1">●</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
