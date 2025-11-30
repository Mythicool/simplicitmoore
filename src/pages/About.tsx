import LiquidGlassCard from '../components/LiquidGlassCard'
import LiquidGlassSection from '../components/LiquidGlassSection'
import PrimaryCTA from '../components/PrimaryCTA'

export default function About() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                        Where <span className="text-gradient">Simplicity</span>
                        <br />
                        Meets Technical Precision
                    </h1>
                    <p className="text-xl text-steel-300 max-w-3xl mx-auto">
                        SimplicIT was founded on a simple principle: technology should empower, not frustrate.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassSection>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>

                            <div className="space-y-6 text-steel-300 text-lg leading-relaxed">
                                <p>
                                    SimplicIT started in Moore, Oklahoma with a mission to bring enterprise-level
                                    technical expertise to our local community—without the complexity, jargon, or inflated prices
                                    that often come with it.
                                </p>

                                <p>
                                    What began as a one-person computer repair shop has grown into a trusted technology
                                    partner for hundreds of homes and businesses across the Moore, OKC, and Norman metro area.
                                    But our values haven't changed: honest service, transparent pricing, and a genuine
                                    commitment to solving problems the right way.
                                </p>

                                <p>
                                    We're not a faceless corporate helpdesk. We're your neighbors. We shop at the same
                                    stores, eat at the same restaurants, and care deeply about this community. When you
                                    work with SimplicIT, you're working with people who take pride in keeping Moore running smoothly.
                                </p>
                            </div>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <LiquidGlassCard hover neonBorder>
                            <div className="text-5xl mb-6 text-center">🎯</div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Simplicity First</h3>
                            <p className="text-steel-300">
                                Technology should make life easier, not harder. We cut through complexity and
                                provide straightforward solutions that just work.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-5xl mb-6 text-center">💎</div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quality Without Compromise</h3>
                            <p className="text-steel-300">
                                We use the best parts, employ certified technicians, and stand behind every
                                repair with comprehensive warranties. No shortcuts.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-5xl mb-6 text-center">🤝</div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Trust & Transparency</h3>
                            <p className="text-steel-300">
                                You'll always know what we're doing and why. Clear quotes, honest assessments,
                                and no surprise fees.
                            </p>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Expert Technicians, Local Service
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <LiquidGlassCard className="text-center">
                            <div className="text-neon-cyan text-5xl mb-4">🔧</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Certified Pros</h4>
                            <p className="text-steel-400 text-sm">
                                CompTIA, Microsoft, and Apple certified technicians
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center">
                            <div className="text-neon-cyan text-5xl mb-4">📍</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Moore Based</h4>
                            <p className="text-steel-400 text-sm">
                                Proudly serving our local community
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center">
                            <div className="text-neon-cyan text-5xl mb-4">⚡</div>
                            <h4 className="text-xl font-semibold text-white mb-2">10+ Years</h4>
                            <p className="text-steel-400 text-sm">
                                Decade of experience solving tech problems
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center">
                            <div className="text-neon-cyan text-5xl mb-4">❤️</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Community First</h4>
                            <p className="text-steel-400 text-sm">
                                Supporting local businesses and families
                            </p>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassSection>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Visit Us in Moore
                            </h2>
                            <p className="text-xl text-steel-300 mb-8">
                                Serving Moore, Oklahoma City, Norman, and the surrounding metro area
                            </p>
                            <div className="space-y-2 text-steel-300 mb-8">
                                <p>Moore, OK 73160</p>
                                <p>Monday - Friday: 9am - 6pm</p>
                                <p>Saturday: 10am - 4pm</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <PrimaryCTA to="/contact" variant="primary">
                                    Contact Us
                                </PrimaryCTA>
                                <PrimaryCTA href="tel:+1234567890" variant="secondary">
                                    (123) 456-7890
                                </PrimaryCTA>
                            </div>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>
        </div>
    )
}
