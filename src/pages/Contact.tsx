import { useState } from 'react'
import LiquidGlassCard from '../components/LiquidGlassCard'
import LiquidGlassSection from '../components/LiquidGlassSection'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'computer-repair',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We\'ll be in touch soon.')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-gradient"></div>
                <div className="absolute inset-0 bg-neon-glow opacity-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
                        Let's <span className="text-gradient">Get Started</span>
                    </h1>
                    <p className="text-xl text-steel-300 max-w-3xl mx-auto">
                        Reach out for a free diagnostic, consultation, or quote. We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-20 bg-obsidian-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <LiquidGlassCard neonBorder>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                            📞
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                            <a href="tel:+1234567890" className="text-steel-300 hover:text-neon-cyan transition-colors">
                                                (123) 456-7890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                            ✉️
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                                            <a href="mailto:info@simplicit.com" className="text-steel-300 hover:text-neon-cyan transition-colors">
                                                info@simplicit.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                            📍
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                                            <p className="text-steel-300">
                                                Moore, OK 73160
                                                <br />
                                                Serving Moore, OKC, Norman
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl">
                                            ⏰
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                                            <p className="text-steel-300">
                                                Monday - Friday: 9am - 6pm
                                                <br />
                                                Saturday: 10am - 4pm
                                                <br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </LiquidGlassCard>

                            {/* Quick Actions */}
                            <LiquidGlassCard>
                                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+1234567890"
                                        className="block px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20 transition-colors text-center font-semibold"
                                    >
                                        📞 Call Now
                                    </a>
                                    <a
                                        href="mailto:info@simplicit.com"
                                        className="block px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20 transition-colors text-center font-semibold"
                                    >
                                        ✉️ Send Email
                                    </a>
                                </div>
                            </LiquidGlassCard>
                        </div>

                        {/* Contact Form */}
                        <LiquidGlassSection>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-steel-300 mb-2 font-medium">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-steel-700/50 text-white placeholder-steel-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-steel-300 mb-2 font-medium">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-steel-700/50 text-white placeholder-steel-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-steel-300 mb-2 font-medium">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-steel-700/50 text-white placeholder-steel-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-colors"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-steel-300 mb-2 font-medium">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-steel-700/50 text-white focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-colors"
                                    >
                                        <option value="computer-repair">Computer Repair</option>
                                        <option value="laptop-repair">Laptop Repair</option>
                                        <option value="mac-repair">Mac Repair</option>
                                        <option value="upgrade">Hardware Upgrade</option>
                                        <option value="msp">Managed IT Services</option>
                                        <option value="consultation">Free Consultation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-steel-300 mb-2 font-medium">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-obsidian-800/50 border border-steel-700/50 text-white placeholder-steel-500 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-colors resize-none"
                                        placeholder="Tell us about your tech challenge..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-obsidian-950 font-semibold text-lg shadow-neon hover:shadow-neon-lg hover:scale-105 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </LiquidGlassSection>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <LiquidGlassCard className="overflow-hidden" neonBorder>
                        <div className="bg-obsidian-800/50 h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📍</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Moore, Oklahoma</h3>
                                <p className="text-steel-400">
                                    Serving Moore, OKC, Norman, and surrounding areas
                                </p>
                            </div>
                        </div>
                    </LiquidGlassCard>
                </div>
            </section>
        </div>
    )
}
