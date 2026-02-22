import { motion } from 'framer-motion'
import { FaHeartbeat, FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'

const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Changelog', 'API Docs'],
    Doctors: ['Find a Specialist', 'Book Appointment', 'Telemedicine', 'Emergency Care', 'Prescriptions'],
    Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA Notice', 'Accessibility'],
}

const socials = [
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaFacebook, label: 'Facebook', href: '#' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-[#0a0f1e] border-t border-slate-800">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                                <FaHeartbeat className="text-white text-lg" />
                            </div>
                            <span className="text-xl font-bold font-['Plus_Jakarta_Sans'] tracking-wide">
                                <span className="text-white">DOCU</span>
                                <span className="gradient-text">CARE</span>
                            </span>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Transforming doctor-patient relationships through smart, secure, and accessible healthcare technology.
                        </p>

                        {/* Newsletter mini */}
                        <div className="flex gap-2 max-w-xs">
                            <input
                                type="email"
                                placeholder="Subscribe to updates"
                                className="flex-1 glass-card border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 outline-none focus:border-sky-400/40 transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0 cursor-pointer"
                            >
                                <FiArrowRight className="text-sm" />
                            </motion.button>
                        </div>

                        {/* Contact */}
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <FiMail className="text-sky-400 flex-shrink-0" />
                                hello@docucare.health
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <FiPhone className="text-sky-400 flex-shrink-0" />
                                +1 (800) 123-CARE
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <FiMapPin className="text-sky-400 flex-shrink-0" />
                                123 Health Ave, New York, NY 10001
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 my-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} DocuCare Health Technologies, Inc. All rights reserved.
                        </p>
                        <span className="hidden sm:inline text-slate-700 mx-2">•</span>
                        <p className="text-slate-400 text-sm flex items-center gap-1.5">
                            Created with <FaHeartbeat className="text-sky-400 text-xs animate-pulse" /> by
                            <a href="https://saide-bin-sabid.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-sky-400 transition-colors duration-300">
                                Saide Bin Sabid
                            </a>
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-3">
                        {['HIPAA', 'ISO 27001', 'SOC 2'].map((badge) => (
                            <span
                                key={badge}
                                className="text-[10px] font-bold text-slate-400 border border-slate-700 px-2.5 py-1 rounded-full"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-2.5">
                        {socials.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -1 }}
                                className="w-8 h-8 glass-card border border-white/10 hover:border-sky-400/30 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors"
                            >
                                <social.icon className="text-sm" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
