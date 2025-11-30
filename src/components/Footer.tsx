import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-obsidian-900 border-t border-steel-800/30 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-neon-sm">
                                <span className="text-obsidian-950 font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold text-white">
                                Simplic<span className="text-neon-cyan">IT</span>
                            </span>
                        </div>
                        <p className="text-steel-400 text-sm leading-relaxed">
                            Moore's premier computer repair and business IT support. Simplicity meets technical precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">Home</Link></li>
                            <li><Link to="/repairs" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">Computer Repair</Link></li>
                            <li><Link to="/business-it" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">Business IT</Link></li>
                            <li><Link to="/services" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">All Services</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/pricing" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">Pricing</Link></li>
                            <li><Link to="/contact" className="text-steel-400 hover:text-neon-cyan transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-steel-400 text-sm">
                            <li>Moore, OK 73160</li>
                            <li>Serving Moore, OKC, Norman</li>
                            <li className="pt-2">
                                <a href="tel:+1234567890" className="hover:text-neon-cyan transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@simplicit.com" className="hover:text-neon-cyan transition-colors">
                                    info@simplicit.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Geometric Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-700/50 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-steel-500 text-sm">
                        © {currentYear} SimplicIT. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-steel-500 text-sm">
                        <span className="text-neon-cyan/70">●</span>
                        <span>Trusted Local Tech Experts</span>
                        <span className="text-neon-cyan/70">●</span>
                        <span>Professional IT Solutions</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
