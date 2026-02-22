import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FiArrowRight, FiPlay, FiCalendar, FiStar, FiUsers } from 'react-icons/fi'
import { FaShieldAlt, FaHeartbeat } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const stats = [
    { icon: FiUsers, value: '50K+', label: 'Patients Served', color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/20' },
    { icon: FiStar, value: '4.9★', label: 'Average Rating', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
    { icon: FiCalendar, value: '200+', label: 'Expert Doctors', color: 'text-indigo-400', bg: 'bg-indigo-400/10 border-indigo-400/20' },
]

export default function Hero() {
    const headlineRef = useRef(null)
    const badgeRef = useRef(null)
    const visualRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered text lines entrance
            gsap.from('.hero-line', {
                y: 60,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.3,
            })

            // Floating medical orb animation
            gsap.to('.medical-orb', {
                y: -15,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            })

            // Pulse rings
            gsap.to('.pulse-ring', {
                scale: 1.6,
                opacity: 0,
                duration: 2,
                ease: 'power2.out',
                stagger: 0.7,
                repeat: -1,
            })

            // Stats counter animation
            gsap.from('.stat-card', {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                delay: 1.0,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section id="home" className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl" />

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">

                    {/* Left — Content */}
                    <div className="relative z-10">
                        {/* Trust badge */}
                        <motion.div
                            ref={badgeRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium text-sky-300 mb-6 border border-sky-400/20"
                        >
                            <MdVerified className="text-sky-400 text-base" />
                            HIPAA Compliant & ISO Certified Healthcare Platform
                        </motion.div>

                        {/* Main headline */}
                        <div ref={headlineRef} className="overflow-hidden mb-6">
                            <div className="hero-line text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-6xl font-extrabold leading-tight text-white">
                                Taking Care of
                            </div>
                            <div className="hero-line text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-6xl font-extrabold leading-tight">
                                <span className="gradient-text">What Matters</span>
                            </div>
                            <div className="hero-line text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-6xl font-extrabold leading-tight text-white">
                                Most.
                            </div>
                        </div>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
                        >
                            Because your health comes first. DocuCare brings world-class doctors and seamless care directly to you, so you can focus on simply feeling better.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(14,165,233,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-sky-500/20 cursor-pointer"
                            >
                                Book Appointment
                                <FiArrowRight className="text-lg" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-2 glass-card text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:border-sky-400/30 transition-all cursor-pointer"
                            >
                                <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                                    <FiPlay className="text-xs ml-0.5" />
                                </span>
                                View Demo
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`stat-card glass-card border rounded-2xl p-3 text-center ${stat.bg}`}
                                >
                                    <stat.icon className={`${stat.color} text-xl mx-auto mb-1`} />
                                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <div ref={visualRef} className="relative hidden lg:flex items-center justify-center">
                        {/* Main circle visual */}
                        <div className="relative w-[420px] h-[420px]">
                            {/* Pulse rings */}
                            <div className="pulse-ring absolute inset-0 rounded-full border-2 border-sky-400/30" />
                            <div className="pulse-ring absolute inset-8 rounded-full border-2 border-indigo-400/20" />

                            {/* Main orb */}
                            <div className="medical-orb absolute inset-12 rounded-full gradient-bg flex items-center justify-center shadow-2xl animate-pulse-glow">
                                <FaHeartbeat className="text-white text-7xl" />
                            </div>

                            {/* Orbiting cards */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                                className="absolute inset-0"
                            >
                                {/* Card 1 — top */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                                        className="glass-card border border-sky-400/20 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl whitespace-nowrap"
                                    >
                                        <div className="w-8 h-8 bg-sky-400/20 rounded-lg flex items-center justify-center">
                                            <FiCalendar className="text-sky-400" />
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-semibold">Appointment</div>
                                            <div className="text-slate-400 text-[10px]">Tomorrow, 10:30 AM</div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Card 2 — right */}
                                <div className="absolute top-1/2 -right-8 -translate-y-1/2">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                                        className="glass-card border border-green-400/20 rounded-2xl px-4 py-3 shadow-xl"
                                    >
                                        <div className="text-green-400 text-xs font-semibold mb-1">Patient Health</div>
                                        <div className="flex items-end gap-1 h-8">
                                            {[3, 5, 4, 7, 5, 8, 6, 9].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="w-2 bg-green-400/60 rounded-sm"
                                                    style={{ height: `${h * 4}px` }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Card 3 — bottom */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                                        className="glass-card border border-indigo-400/20 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl whitespace-nowrap"
                                    >
                                        <div className="w-8 h-8 bg-indigo-400/20 rounded-lg flex items-center justify-center">
                                            <FaShieldAlt className="text-indigo-400" />
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-semibold">Secure Records</div>
                                            <div className="text-slate-400 text-[10px]">256-bit Encrypted</div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Card 4 — left */}
                                <div className="absolute top-1/2 -left-12 -translate-y-1/2">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                                        className="glass-card border border-yellow-400/20 rounded-2xl px-4 py-3 shadow-xl"
                                    >
                                        <div className="flex items-center gap-1 mb-1">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                                            <div className="text-white text-[10px] font-semibold">Dr. Amara</div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <FiStar key={s} className="text-yellow-400 text-[10px]" fill="currentColor" />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-sky-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
