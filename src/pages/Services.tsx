import { useNavigate } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import PrimaryCTA from '../components/PrimaryCTA'

export default function Services() {
    const navigate = useNavigate()

    const allServices = [
        {
            category: 'Computer Repair',
            icon: '💻',
            services: [
                'Laptop & Desktop Repair',
                'Mac Repair & Service',
                'Screen Replacement',
                'Hardware Upgrades',
                'Virus & Malware Removal',
                'System Optimization',
                'Data Recovery'
            ],
            link: '/repairs'
        },
        {
            category: 'Business IT Support',
            icon: '🏢',
            services: [
                'Managed IT Services',
                '24/7 Network Monitoring',
                'Security Management',
                'Cloud Backup Solutions',
                'IT Consulting',
                'Strategic Planning'
            ],
            link: '/business-it'
        },
        {
            category: 'Upgrades & Enhancements',
            icon: '⚡',
            services: [
                'SSD Upgrades',
                'RAM Installation',
                'Graphics Card Upgrades',
                'Storage Expansion',
                'Cooling System Upgrades',
                'Performance Tuning'
            ],
            link: '/pricing'
        },
        {
            category: 'Device Sales',
            icon: '🛒',
            services: [
                'New & Refurbished PCs',
                'Business Laptops',
                'Networking Equipment',
                'Peripherals & Accessories',
                'Custom PC Builds',
                'Hardware Sourcing'
            ],
            link: '/contact'
        },
        {
            category: 'Installation Services',
            icon: '🔧',
            services: [
                'Home Office Setup',
                'Network Installation',
                'Printer Setup',
                'Smart Home Integration',
                'Cable Management',
                'Workstation Configuration'
            ],
            link: '/contact'
        },
        {
            category: 'Training & Support',
            icon: '📚',
            services: [
                'One-on-One Training',
                'Software Tutorials',
                'Remote Support',
                'Email & Phone Support',
                'System Documentation',
                'Best Practices Consulting'
            ],
            link: '/contact'
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                        Complete Tech Solutions
                        <br />
                        <span className="text-gradient">All in One Place</span>
                    </h1>
                    <p className="text-xl text-steel-300 max-w-3xl mx-auto">
                        From quick repairs to complete IT management, SimplicIT is your one-stop shop
                        for all technology needs in Moore, OKC, and Norman.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <div key={index} onClick={() => navigate(service.link)} className="cursor-pointer">
                                <ServiceCard
                                    icon={<span className="text-5xl">{service.icon}</span>}
                                    title={service.category}
                                    description={`Professional ${service.category.toLowerCase()} services tailored to your needs.`}
                                    features={service.services}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Not Sure What You Need?
                    </h2>
                    <p className="text-xl text-steel-300 mb-8">
                        Contact us for a free consultation. We'll help you find the right solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrimaryCTA to="/contact" variant="primary">
                            Get Free Consultation
                        </PrimaryCTA>
                        <PrimaryCTA to="/pricing" variant="secondary">
                            View Pricing
                        </PrimaryCTA>
                    </div>
                </div>
            </section>
        </div>
    )
}
