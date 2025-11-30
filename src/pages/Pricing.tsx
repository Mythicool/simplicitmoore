import PricingCard from '../components/PricingCard'
import LiquidGlassCard from '../components/LiquidGlassCard'
import PrimaryCTA from '../components/PrimaryCTA'

export default function Pricing() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                        <span className="text-gradient">Transparent Pricing</span>
                        <br />
                        No Hidden Fees
                    </h1>
                    <p className="text-xl text-steel-300 max-w-3xl mx-auto">
                        Clear, honest pricing for all our services. You'll know the cost before we start work.
                    </p>
                </div>
            </section>

            {/* Computer Repair Pricing */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Computer Repair
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <LiquidGlassCard hover>
                            <h3 className="text-2xl font-bold text-white mb-2">Diagnostic</h3>
                            <div className="text-5xl font-bold text-neon-cyan mb-4">FREE</div>
                            <p className="text-steel-300 mb-6">
                                Complete analysis of the problem with a detailed repair quote. No charge, no obligation.
                            </p>
                            <ul className="space-y-2 text-steel-400 text-sm">
                                <li>✓ Full system assessment</li>
                                <li>✓ Written quote</li>
                                <li>✓ Expert recommendations</li>
                            </ul>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h3 className="text-2xl font-bold text-white mb-2">Standard Repair</h3>
                            <div className="text-5xl font-bold text-neon-cyan mb-1">$79</div>
                            <div className="text-steel-400 text-sm mb-4">+ parts if needed</div>
                            <p className="text-steel-300 mb-6">
                                Software issues, virus removal, optimization, and simple hardware fixes.
                            </p>
                            <ul className="space-y-2 text-steel-400 text-sm">
                                <li>✓ Software troubleshooting</li>
                                <li>✓ Virus/malware removal</li>
                                <li>✓ Performance optimization</li>
                                <li>✓ Driver updates</li>
                            </ul>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h3 className="text-2xl font-bold text-white mb-2">Advanced Repair</h3>
                            <div className="text-5xl font-bold text-neon-cyan mb-1">$149</div>
                            <div className="text-steel-400 text-sm mb-4">+ parts if needed</div>
                            <p className="text-steel-300 mb-6">
                                Component replacement, motherboard work, data recovery, complex diagnostics.
                            </p>
                            <ul className="space-y-2 text-steel-400 text-sm">
                                <li>✓ Hardware replacement</li>
                                <li>✓ Motherboard repair</li>
                                <li>✓ Data recovery</li>
                                <li>✓ Advanced diagnostics</li>
                            </ul>
                        </LiquidGlassCard>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <LiquidGlassCard>
                            <h3 className="text-xl font-bold text-white mb-4">Common Parts Pricing</h3>
                            <div className="space-y-3 text-steel-300">
                                <div className="flex justify-between">
                                    <span>Screen replacement (laptop)</span>
                                    <span className="text-neon-cyan">$150-$350</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>SSD upgrade (includes install)</span>
                                    <span className="text-neon-cyan">$120-$300</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>RAM upgrade</span>
                                    <span className="text-neon-cyan">$60-$200</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Battery replacement</span>
                                    <span className="text-neon-cyan">$80-$150</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Keyboard replacement</span>
                                    <span className="text-neon-cyan">$100-$180</span>
                                </div>
                            </div>
                        </LiquidGlassCard>

                        <LiquidGlassCard neonBorder>
                            <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
                            <ul className="space-y-3 text-steel-300">
                                <li className="flex items-start">
                                    <span className="text-neon-cyan mr-2">✓</span>
                                    <span>90-day warranty on all repairs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-cyan mr-2">✓</span>
                                    <span>Quality OEM or high-grade parts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-cyan mr-2">✓</span>
                                    <span>Expert installation & testing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-cyan mr-2">✓</span>
                                    <span>Same-day service available</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-cyan mr-2">✓</span>
                                    <span>Free pickup/delivery (local)</span>
                                </li>
                            </ul>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* MSP Pricing */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-4 text-center">
                        Managed IT Services
                    </h2>
                    <p className="text-xl text-steel-300 mb-12 text-center">
                        Per-user monthly pricing with no long-term contracts required
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard
                            tier="Essentials"
                            price="$99"
                            period="/user/mo"
                            description="Core IT management for small teams"
                            features={[
                                '24/7 network monitoring',
                                'Automated backups',
                                'Security patch management',
                                'Email support',
                                'Monthly reporting',
                                'Remote assistance'
                            ]}
                        />

                        <PricingCard
                            tier="Professional"
                            price="$149"
                            period="/user/mo"
                            description="Comprehensive support for growing businesses"
                            features={[
                                'Everything in Essentials',
                                'Priority phone support',
                                'Advanced security tools',
                                'Compliance assistance',
                                'Quarterly IT planning',
                                '2 on-site visits/year',
                                'Hardware lifecycle planning'
                            ]}
                            highlighted
                        />

                        <PricingCard
                            tier="Enterprise"
                            price="Custom"
                            period=""
                            description="Full white-glove IT management"
                            features={[
                                'Everything in Professional',
                                'Dedicated account manager',
                                'Custom SLA agreements',
                                'Unlimited on-site support',
                                'Strategic IT consulting',
                                'Hardware procurement',
                                'Project management'
                            ]}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-steel-400 mb-6">
                            * Minimum 5 users for managed services. Volume discounts available for 20+ users.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Additional Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">Home Office Setup</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$150</div>
                            <p className="text-steel-400 text-sm">Complete workstation setup and configuration</p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">Network Installation</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$200+</div>
                            <p className="text-steel-400 text-sm">Router, switch, and WiFi configuration</p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">Data Migration</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$99</div>
                            <p className="text-steel-400 text-sm">Transfer data between computers</p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">Printer Setup</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$60</div>
                            <p className="text-steel-400 text-sm">Install and configure printers/scanners</p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">Remote Support Session</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$50</div>
                            <p className="text-steel-400 text-sm">Per 30-minute session</p>
                        </LiquidGlassCard>

                        <LiquidGlassCard hover>
                            <h4 className="text-lg font-semibold text-white mb-2">One-on-One Training</h4>
                            <div className="text-2xl font-bold text-neon-cyan mb-2">$75/hr</div>
                            <p className="text-steel-400 text-sm">Personalized software/system training</p>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <LiquidGlassCard neonBorder className="p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-steel-300 mb-8">
                            Free diagnostic for repairs. Free consultation for managed services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PrimaryCTA to="/contact" variant="primary">
                                Schedule Service
                            </PrimaryCTA>
                            <PrimaryCTA href="tel:+1234567890" variant="secondary">
                                Call for Quote
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassCard>
                </div>
            </section>
        </div>
    )
}
