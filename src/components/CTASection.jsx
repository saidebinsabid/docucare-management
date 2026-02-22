import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiCheck, FiMail } from 'react-icons/fi'
import { MdSecurity } from 'react-icons/md'
import { FaHeartbeat } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const perks = [
    'Free 30-day trial, no credit card required',
    'Full access to all premium features',
    'Dedicated onboarding support',
    'Cancel anytime, no questions asked',
]

export default function CTASection() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) return
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <section id="cta" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
            {/* Decorative separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Background gradient */}
            <div className="absolute inset-0 bg-[#0f172a]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-indigo-900/20 to-purple-900/30" />
                {/* Animated blobs */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full animate-blob" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full animate-blob" style={{ animationDelay: '4s' }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="cta-content text-center">
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-bg mb-8 shadow-2xl shadow-sky-500/30 animate-pulse-glow"
                    >
                        <FaHeartbeat className="text-white text-4xl" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Start Your Health
                        <br />
                        <span className="gradient-text">Journey Today</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join over 50,000 patients and 200 doctors already transforming healthcare with DocuCare. It's free to get started.
                    </p>

                    {/* Email form */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
                            <div className="relative flex-1">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    id="cta-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full glass-card border border-white/10 focus:border-sky-400/50 rounded-xl pl-11 pr-4 py-4 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400/20"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(14,165,233,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                disabled={loading}
                                className="flex items-center justify-center gap-2 gradient-bg text-white font-semibold px-7 py-4 rounded-xl text-sm shadow-lg shadow-sky-500/20 cursor-pointer whitespace-nowrap disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Get Started Free
                                        <FiArrowRight />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="glass-card border border-emerald-400/30 rounded-2xl py-6 px-8 max-w-xl mx-auto mb-8 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <FiCheck className="text-emerald-400 text-2xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold">You're on the list!</div>
                                <div className="text-slate-400 text-sm">We'll send your access link to <span className="text-sky-400">{email}</span></div>
                            </div>
                        </motion.div>
                    )}

                    {/* Perks */}
                    <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
                        {perks.map((perk) => (
                            <div key={perk} className="flex items-center gap-2.5 text-slate-300 text-sm">
                                <div className="w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center flex-shrink-0">
                                    <FiCheck className="text-sky-400 text-xs" />
                                </div>
                                {perk}
                            </div>
                        ))}
                    </div>

                    {/* Security note */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-xs">
                        <MdSecurity className="text-slate-400" />
                        Your data is protected with 256-bit SSL encryption. We respect your privacy.
                    </div>
                </div>
            </div>
        </section>
    )
}
