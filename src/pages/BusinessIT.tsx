import PricingCard from '../components/PricingCard'
import LiquidGlassCard from '../components/LiquidGlassCard'
import LiquidGlassSection from '../components/LiquidGlassSection'
import PrimaryCTA from '../components/PrimaryCTA'

export default function BusinessIT() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                        Managed IT Services for
                        <br />
                        <span className="text-gradient">Growing Businesses</span>
                    </h1>
                    <p className="text-xl text-steel-300 max-w-3xl mx-auto mb-8">
                        Proactive IT support that scales with your business. Monitoring, security,
                        backups, and on-demand help—all for one simple monthly price.
                    </p>
                    <PrimaryCTA to="/contact" variant="primary">
                        Get a Free IT Assessment
                    </PrimaryCTA>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Complete IT Management
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
                            <p className="text-steel-300">
                                Continuous network and server monitoring. We catch issues before they become problems.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Security Management</h3>
                            <p className="text-steel-300">
                                Firewall configuration, antivirus management, and vulnerability scanning to keep you protected.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">💾</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Automated Backups</h3>
                            <p className="text-steel-300">
                                Daily backups with cloud redundancy. Your data is safe and recoverable.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">🔄</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Patch Management</h3>
                            <p className="text-steel-300">
                                Automatic software updates and security patches deployed without disruption.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-2xl font-bold text-white mb-4">On-Demand Support</h3>
                            <p className="text-steel-300">
                                Phone, email, and remote support when you need it. No ticket limits.
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover neonBorder>
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Strategic Planning</h3>
                            <p className="text-steel-300">
                                Technology roadmaps and growth planning to keep your IT aligned with business goals.
                            </p>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* MSP Tiers */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-4 text-center">
                        Choose Your Support Level
                    </h2>
                    <p className="text-xl text-steel-300 mb-12 text-center">
                        Flexible plans that grow with your business
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard
                            tier="Essentials"
                            price="$99"
                            period="/user/month"
                            description="Perfect for small teams just getting started with managed IT."
                            features={[
                                '24/7 network monitoring',
                                'Automated backups',
                                'Security updates',
                                'Email support',
                                'Monthly reporting'
                            ]}
                            ctaText="Start Essentials"
                        />

                        <PricingCard
                            tier="Professional"
                            price="$149"
                            period="/user/month"
                            description="Comprehensive support for growing businesses with complex needs."
                            features={[
                                'Everything in Essentials',
                                'Priority phone support',
                                'Advanced security tools',
                                'Quarterly IT planning',
                                'On-site visits (2/year)',
                                'Compliance assistance'
                            ]}
                            highlighted
                            ctaText="Start Professional"
                        />

                        <PricingCard
                            tier="Enterprise"
                            price="Custom"
                            period=""
                            description="Fully managed IT for established businesses requiring complete coverage."
                            features={[
                                'Everything in Professional',
                                'Dedicated account manager',
                                'Custom SLA agreements',
                                'Unlimited on-site visits',
                                'Hardware procurement',
                                'Strategic IT consulting'
                            ]}
                            ctaText="Contact Sales"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-steel-400">
                            All plans include no-contract options. Cancel anytime with 30-day notice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassSection>
                        <h2 className="text-4xl font-bold text-white mb-12 text-center">
                            Why Businesses Choose SimplicIT
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Local Partnership</h4>
                                    <p className="text-steel-300">
                                        We're based in Moore and committed to our local business community. You'll know your tech team personally.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Proactive, Not Reactive</h4>
                                    <p className="text-steel-300">
                                        We prevent problems before they impact your business. Less downtime, more productivity.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Predictable Costs</h4>
                                    <p className="text-steel-300">
                                        No surprise invoices. One flat monthly rate with transparent pricing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h4>
                                    <p className="text-steel-300">
                                        Start small and grow. Our systems and support scale seamlessly with your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <LiquidGlassCard neonBorder className="p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Partner With SimplicIT
                        </h2>
                        <p className="text-xl text-steel-300 mb-8">
                            Let's discuss how managed IT can transform your business operations.
                            <br />
                            Free consultation and IT assessment—no obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PrimaryCTA to="/contact" variant="primary">
                                Schedule Consultation
                            </PrimaryCTA>
                            <PrimaryCTA href="tel:+1234567890" variant="secondary">
                                Call Us Today
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassCard>
                </div>
            </section>
        </div>
    )
}
