import ServiceCard from '../components/ServiceCard'
import LiquidGlassSection from '../components/LiquidGlassSection'
import LiquidGlassCard from '../components/LiquidGlassCard'
import PrimaryCTA from '../components/PrimaryCTA'

export default function ComputerRepairs() {
    const services = [
        {
            title: 'Laptop Repair',
            description: 'Expert laptop repair for all makes and models. From hinge replacements to motherboard diagnostics.',
            features: ['Screen replacement', 'Keyboard repair', 'Battery replacement', 'Power jack repair']
        },
        {
            title: 'Desktop Repair',
            description: 'Complete desktop PC service and repair. Upgrades, component replacement, and performance optimization.',
            features: ['Hardware upgrades', 'Component testing', 'Power supply replacement', 'Cooling system repair']
        },
        {
            title: 'Mac Repair',
            description: 'Authorized service for MacBook, iMac, and Mac Mini. Professional repairs with genuine parts.',
            features: ['MacBook screen repair', 'Logic board repair', 'SSD upgrades', 'macOS troubleshooting']
        },
        {
            title: 'Screen Replacement',
            description: 'High-quality screen replacements for laptops and all-in-ones. Fast turnaround, perfect fit.',
            features: ['LCD replacement', 'Touchscreen repair', 'Color calibration', 'Warranty included']
        },
        {
            title: 'Storage Upgrades',
            description: 'Boost your system with SSD upgrades and storage expansion. Faster boot, better performance.',
            features: ['HDD to SSD migration', 'Data transfer included', 'Storage expansion', 'RAID configuration']
        },
        {
            title: 'RAM Upgrades',
            description: 'Memory upgrades for better multitasking and performance. We\'ll find the right match for your system.',
            features: ['Compatibility testing', 'Quality modules', 'Installation included', 'Performance optimization']
        },
        {
            title: 'Virus & Malware Removal',
            description: 'Complete malware cleanup and system security hardening. Get your PC back to normal.',
            features: ['Deep system scan', 'Malware removal', 'Security software setup', 'Prevention training']
        },
        {
            title: 'System Optimization',
            description: 'Slow computer? We\'ll diagnose and fix performance issues to get you back up to speed.',
            features: ['Startup optimization', 'Driver updates', 'Software cleanup', 'Registry cleaning']
        },
        {
            title: 'Data Recovery',
            description: 'Professional data recovery from failed drives, corrupted systems, and accidental deletion.',
            features: ['Failed drive recovery', 'Formatted drive recovery', 'Photo & document recovery', 'Emergency service available']
        },
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                            Fast, Professional Computer Repair
                            <br />
                            <span className="text-gradient">Done Right</span>
                        </h1>
                        <p className="text-xl text-steel-300 max-w-3xl mx-auto mb-8">
                            Expert repairs for laptops, desktops, and Macs. Serving Moore, OKC, and Norman
                            with honest service, transparent pricing, and fast turnaround.
                        </p>
                        <PrimaryCTA to="/contact" variant="primary">
                            Book a Free Diagnostic
                        </PrimaryCTA>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Repair Services</h2>
                        <p className="text-xl text-steel-300">
                            Professional solutions for every computer problem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassSection>
                        <h2 className="text-4xl font-bold text-white mb-12 text-center">
                            Transparent Pricing
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <LiquidGlassCard hover>
                                <h3 className="text-2xl font-bold text-white mb-2">Diagnostic</h3>
                                <div className="text-4xl font-bold text-neon-cyan mb-4">FREE</div>
                                <p className="text-steel-300">
                                    Complete system analysis and repair quote at no charge. No obligation.
                                </p>
                            </LiquidGlassCard>

                            <LiquidGlassCard hover>
                                <h3 className="text-2xl font-bold text-white mb-2">Standard Repair</h3>
                                <div className="text-4xl font-bold text-neon-cyan mb-1">$79</div>
                                <div className="text-steel-400 text-sm mb-4">+ parts if needed</div>
                                <p className="text-steel-300">
                                    Most software issues, virus removal, optimization, and simple hardware fixes.
                                </p>
                            </LiquidGlassCard>

                            <LiquidGlassCard hover>
                                <h3 className="text-2xl font-bold text-white mb-2">Advanced Repair</h3>
                                <div className="text-4xl font-bold text-neon-cyan mb-1">$149</div>
                                <div className="text-steel-400 text-sm mb-4">+ parts if needed</div>
                                <p className="text-steel-300">
                                    Component replacement, motherboard repair, data recovery, and complex diagnostics.
                                </p>
                            </LiquidGlassCard>
                        </div>

                        <div className="text-center">
                            <p className="text-steel-400 mb-6">
                                * Parts quoted separately. You approve all costs before we begin work.
                            </p>
                            <PrimaryCTA to="/pricing" variant="secondary">
                                View Full Pricing
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassSection>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Why Choose SimplicIT for Repairs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <LiquidGlassCard className="text-center" hover neonBorder>
                            <div className="text-5xl mb-4">🔧</div>
                            <h3 className="text-xl font-bold text-white mb-3">Expert Technicians</h3>
                            <p className="text-steel-300 text-sm">
                                Certified professionals with 10+ years experience across all platforms
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center" hover neonBorder>
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-3">Fast Turnaround</h3>
                            <p className="text-steel-300 text-sm">
                                Most repairs completed within 24 hours. Same-day service available
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center" hover neonBorder>
                            <div className="text-5xl mb-4">💎</div>
                            <h3 className="text-xl font-bold text-white mb-3">Quality Parts</h3>
                            <p className="text-steel-300 text-sm">
                                OEM and high-quality aftermarket parts with warranty coverage
                            </p>
                        </LiquidGlassCard>

                        <LiquidGlassCard className="text-center" hover neonBorder>
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-white mb-3">90-Day Warranty</h3>
                            <p className="text-steel-300 text-sm">
                                All repairs backed by our comprehensive 90-day warranty
                            </p>
                        </LiquidGlassCard>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Simple Repair Process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center text-2xl font-bold text-neon-cyan mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Bring It In</h3>
                            <p className="text-steel-400">
                                Drop off your device at our Moore location or contact us for pickup
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center text-2xl font-bold text-neon-cyan mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Free Diagnostic</h3>
                            <p className="text-steel-400">
                                We'll diagnose the issue and provide a detailed quote
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center text-2xl font-bold text-neon-cyan mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Expert Repair</h3>
                            <p className="text-steel-400">
                                Once approved, we get to work with quality parts and precision
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center text-2xl font-bold text-neon-cyan mx-auto mb-4">
                                4
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Pick Up</h3>
                            <p className="text-steel-400">
                                We'll notify you when ready. Usually within 24 hours!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <LiquidGlassCard neonBorder className="p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Let's Fix Your Computer Today
                        </h2>
                        <p className="text-xl text-steel-300 mb-8">
                            Free diagnostic, honest pricing, and expert service you can trust.
                            <br />
                            Same-day appointments available.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PrimaryCTA to="/contact" variant="primary">
                                Book Free Diagnostic
                            </PrimaryCTA>
                            <PrimaryCTA href="tel:+1234567890" variant="secondary">
                                Call (123) 456-7890
                            </PrimaryCTA>
                        </div>
                    </LiquidGlassCard>
                </div>
            </section>
        </div>
    )
}
