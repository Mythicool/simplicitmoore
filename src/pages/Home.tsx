import { useNavigate } from 'react-router-dom'
import LiquidGlassCard from '../components/LiquidGlassCard'
import LiquidGlassSection from '../components/LiquidGlassSection'
import PrimaryCTA from '../components/PrimaryCTA'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-30"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <LiquidGlassSection className="max-w-4xl mx-auto animate-slide-in">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-gradient">Technical Excellence</span>
                            <br />
                            <span className="text-white">Simplified</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-steel-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Moore's premier computer repair shop and business IT partner.
                            From quick fixes to complete managed services—we deliver precision without complexity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <PrimaryCTA to="/repairs" variant="primary">
                                Computer Repair
                            </PrimaryCTA>
                            <PrimaryCTA to="/business-it" variant="secondary">
                                Business IT Support
                            </PrimaryCTA>
                            <PrimaryCTA to="/contact" variant="secondary">
                                Get a Free Quote
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <LiquidGlassCard className="text-center" hover>
                            <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
                            <div className="text-steel-400">Years Experience</div>
                        </LiquidGlassCard>
                        <LiquidGlassCard className="text-center" hover>
                            <div className="text-4xl font-bold text-neon-cyan mb-2">1000+</div>
                            <div className="text-steel-400">Repairs Completed</div>
                        </LiquidGlassCard>
                        <LiquidGlassCard className="text-center" hover>
                            <div className="text-4xl font-bold text-neon-cyan mb-2">4.9★</div>
                            <div className="text-steel-400">Customer Rating</div>
                        </LiquidGlassCard>
                        <LiquidGlassCard className="text-center" hover>
                            <div className="text-4xl font-bold text-neon-cyan mb-2">24hr</div>
                            <div className="text-steel-400">Average Turnaround</div>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Expertise You Can Trust
                        </h2>
                        <p className="text-xl text-steel-300 max-w-2xl mx-auto">
                            Serving Moore, OKC, and Norman with professional-grade tech solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <LiquidGlassCard
                            hover
                            neonBorder
                            className="cursor-pointer"
                            onClick={() => navigate('/repairs')}
                        >
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Computer Repair</h3>
                            <p className="text-steel-300 mb-6">
                                Fast, professional repair for laptops, desktops, and Macs. Screen replacements,
                                upgrades, virus removal, and data recovery.
                            </p>
                            <div className="text-neon-cyan font-semibold hover:underline">
                                View Services →
                            </div>
                        </LiquidGlassCard>

                        <LiquidGlassCard
                            hover
                            neonBorder
                            className="cursor-pointer"
                            onClick={() => navigate('/business-it')}
                        >
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Business IT Support</h3>
                            <p className="text-steel-300 mb-6">
                                Managed IT services for growing businesses. Proactive monitoring, security,
                                backups, and on-demand support.
                            </p>
                            <div className="text-neon-cyan font-semibold hover:underline">
                                Learn More →
                            </div>
                        </LiquidGlassCard>

                        <LiquidGlassCard
                            hover
                            neonBorder
                            className="cursor-pointer"
                            onClick={() => navigate('/services')}
                        >
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Device Sales & More</h3>
                            <p className="text-steel-300 mb-6">
                                Quality devices, upgrades, home office setups, and hardware installations.
                                Everything you need in one place.
                            </p>
                            <div className="text-neon-cyan font-semibold hover:underline">
                                Browse Services →
                            </div>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassSection>
                        <h2 className="text-4xl font-bold text-white mb-12 text-center">
                            Why Moore Trusts SimplicIT
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Local & Reliable</h4>
                                    <p className="text-steel-300">
                                        Based right here in Moore. We're your neighbors, serving the community with pride.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Certified Technicians</h4>
                                    <p className="text-steel-300">
                                        Factory-trained experts with years of experience across all major brands.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h4>
                                    <p className="text-steel-300">
                                        No hidden fees. Free diagnostics. You'll know the cost before we start.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Fast Turnaround</h4>
                                    <p className="text-steel-300">
                                        Most repairs completed within 24 hours. Same-day service available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <LiquidGlassCard neonBorder className="p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-steel-300 mb-8">
                            Book a free diagnostic or consultation today. Let's solve your tech challenges together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PrimaryCTA to="/contact" variant="primary">
                                Schedule Diagnostic
                            </PrimaryCTA>
                            <PrimaryCTA to="/pricing" variant="secondary">
                                View Pricing
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassCard>
                </div>
            </section>
        </div>
    )
}
