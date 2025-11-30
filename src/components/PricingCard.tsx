interface PricingCardProps {
    tier: string
    price: string
    period?: string
    description: string
    features: string[]
    highlighted?: boolean
    ctaText?: string
    onCTAClick?: () => void
}

export default function PricingCard({
    tier,
    price,
    period = '/month',
    description,
    features,
    highlighted = false,
    ctaText = 'Get Started',
    onCTAClick
}: PricingCardProps) {
    return (
        <div
            className={`
        liquid-glass rounded-3xl p-8 
        transition-all duration-300
        ${highlighted
                    ? 'border-2 border-neon-cyan shadow-neon scale-105'
                    : 'border border-steel-700/30 hover:border-neon-cyan/30 hover:shadow-neon-sm'
                }
      `}
        >
            {highlighted && (
                <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-xs font-semibold mb-4">
                    MOST POPULAR
                </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>

            <div className="mb-4">
                <span className="text-5xl font-bold text-white">{price}</span>
                {period && <span className="text-steel-400 text-lg">{period}</span>}
            </div>

            <p className="text-steel-300 mb-8 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-steel-300">
                        <svg
                            className="w-5 h-5 text-neon-cyan mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onCTAClick}
                className={`
          w-full py-4 rounded-full font-semibold
          transition-all duration-300
          ${highlighted
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-obsidian-950 shadow-neon hover:shadow-neon-lg hover:scale-105'
                        : 'border-2 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan'
                    }
        `}
            >
                {ctaText}
            </button>
        </div>
    )
}
