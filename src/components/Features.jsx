import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    FiCalendar, FiFileText, FiMessageSquare, FiDollarSign,
    FiBarChart2, FiVideo
} from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: FiCalendar,
        title: 'Smart Scheduling',
        description: 'AI-powered appointment booking with automatic reminders, rescheduling, and real-time doctor availability.',
        color: 'text-sky-400',
        border: 'border-sky-400/20',
        bg: 'bg-sky-400/10',
        glow: 'hover:shadow-sky-500/10',
    },
    {
        icon: FiFileText,
        title: 'Digital Health Records',
        description: 'Centralized, encrypted medical records — lab results, prescriptions, diagnoses, imaging — all in one place.',
        color: 'text-indigo-400',
        border: 'border-indigo-400/20',
        bg: 'bg-indigo-400/10',
        glow: 'hover:shadow-indigo-500/10',
    },
    {
        icon: FiMessageSquare,
        title: 'Secure Messaging',
        description: 'End-to-end encrypted chat between patients and doctors with file sharing and prescription requests.',
        color: 'text-emerald-400',
        border: 'border-emerald-400/20',
        bg: 'bg-emerald-400/10',
        glow: 'hover:shadow-emerald-500/10',
    },
    {
        icon: FiDollarSign,
        title: 'Billing & Insurance',
        description: 'Streamlined billing, insurance verification, and payment processing — transparent and hassle-free.',
        color: 'text-yellow-400',
        border: 'border-yellow-400/20',
        bg: 'bg-yellow-400/10',
        glow: 'hover:shadow-yellow-500/10',
    },
    {
        icon: FiBarChart2,
        title: 'Analytics Dashboard',
        description: 'Rich health analytics and insights for doctors — track patient trends and outcomes over time.',
        color: 'text-purple-400',
        border: 'border-purple-400/20',
        bg: 'bg-purple-400/10',
        glow: 'hover:shadow-purple-500/10',
    },
    {
        icon: FiVideo,
        title: 'Telemedicine',
        description: 'HD video consultations from anywhere in the world with screen sharing and session recording capabilities.',
        color: 'text-pink-400',
        border: 'border-pink-400/20',
        bg: 'bg-pink-400/10',
        glow: 'hover:shadow-pink-500/10',
    },
]

export default function Features() {
    const sectionRef = useRef(null)

    useEffect(() => {
        // Only animate the header with GSAP — cards use Framer Motion whileInView
        const ctx = gsap.context(() => {
            gsap.from('.features-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="features" ref={sectionRef} className="relative py-24 lg:py-32 section-gradient">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="features-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20"
                    >
                        Everything You Need
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-5"
                    >
                        Powerful Features for
                        <br />
                        <span className="gradient-text">Modern Healthcare</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        From scheduling to telemedicine, DocuCare brings every tool doctors and patients need into a single, beautifully designed platform.
                    </motion.p>
                </div>

                {/* Feature cards grid — Framer Motion whileInView (React-safe, no StrictMode issues) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                            whileHover={{ y: -6, transition: { duration: 0.22 } }}
                            className={`group glass-card border ${feature.border} rounded-2xl p-7 cursor-default hover:shadow-2xl ${feature.glow} transition-shadow duration-300 relative overflow-hidden`}
                        >
                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} border ${feature.border} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`${feature.color} text-2xl`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-white text-xl font-bold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>

                                {/* Learn more */}
                                <div className={`mt-5 flex items-center gap-1 ${feature.color} text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    Learn more
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
