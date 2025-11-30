import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/repairs', label: 'Computer Repair' },
        { path: '/business-it', label: 'Business IT' },
        { path: '/services', label: 'Services' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${scrolled
                    ? 'bg-obsidian-900/80 backdrop-blur-xl shadow-glass border-b border-white/5'
                    : 'bg-transparent'
                }
      `}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-neon-sm group-hover:shadow-neon transition-shadow">
                            <span className="text-obsidian-950 font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold text-white">
                            Simplic<span className="text-neon-cyan">IT</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${location.pathname === link.path
                                        ? 'text-neon-cyan bg-white/5'
                                        : 'text-steel-300 hover:text-white hover:bg-white/5'
                                    }
                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-steel-300 hover:text-white"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
