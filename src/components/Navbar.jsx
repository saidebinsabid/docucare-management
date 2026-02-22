import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaHeartbeat } from 'react-icons/fa'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#cta' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href) => {
        const id = href.replace('#', '')
        setActiveLink(id)
        setMobileOpen(false)
        const el = document.getElementById(id === 'home' ? 'home' : id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? 'glass-card shadow-xl shadow-black/30 border-white/10'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleNavClick('#home')}
                    >
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                                <FaHeartbeat className="text-white text-lg" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                        </div>
                        <span className="text-xl font-bold font-['Plus_Jakarta_Sans'] tracking-wide">
                            <span className="text-white">DOCU</span>
                            <span className="gradient-text">CARE</span>
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${activeLink === link.href.replace('#', '')
                                    ? 'text-sky-400 bg-sky-400/10'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleNavClick('#cta')}
                            className="hidden md:block gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20 cursor-pointer"
                        >
                            Get Started
                        </motion.button>

                        <button
                            id="mobile-menu-toggle"
                            className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-card border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => handleNavClick('#cta')}
                                className="mt-2 gradient-bg text-white text-sm font-semibold px-5 py-3 rounded-xl cursor-pointer"
                            >
                                Get Started Free
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
