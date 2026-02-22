import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        name: 'Rebecca Thompson',
        role: 'Patient — Cardiac Care',
        quote: "DocuCare completely changed how I manage my healthcare. Booking appointments with my cardiologist takes seconds, and I can access all my test results instantly. It's an absolute game-changer.",
        rating: 5,
        initials: 'RT',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        name: 'Dr. Marcus Chen',
        role: 'Cardiologist, 12 Years',
        quote: "As a doctor, DocuCare has transformed my practice. The patient management tools, digital prescriptions, and scheduling system have cut my admin time by 60%. I can focus on what matters — my patients.",
        rating: 5,
        initials: 'MC',
        gradient: 'from-sky-500 to-blue-500',
    },
    {
        name: 'Priya Nair',
        role: 'Patient — Dermatology',
        quote: "I was skeptical about online healthcare, but DocuCare won me over completely. The video consultations are seamless and my dermatologist sent my prescription digitally within minutes of our call.",
        rating: 5,
        initials: 'PN',
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        name: 'Dr. Fatima Al-Rashid',
        role: 'Neurologist, Hospital Head',
        quote: "The analytics dashboard gives me insights I never had before. I can track patient outcomes, identify patterns, and improve care quality systematically. DocuCare is the future of medical practice.",
        rating: 5,
        initials: 'FA',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        name: 'David Okafor',
        role: 'Patient — Family Care',
        quote: "Managing healthcare for my entire family used to be a nightmare. Now, DocuCare keeps all our records, appointments, and medications organized in one place. I genuinely can't imagine going back.",
        rating: 5,
        initials: 'DO',
        gradient: 'from-orange-500 to-amber-500',
    },
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)
    const sectionRef = useRef(null)

    const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
    const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.testimonial-header', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
                y: 40, opacity: 0, duration: 0.8,
            })
            gsap.from('.testimonial-carousel', {
                scrollTrigger: { trigger: '.testimonial-carousel', start: 'top 80%' },
                y: 50, opacity: 0, duration: 0.8, delay: 0.2,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="testimonials" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0f172a]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="testimonial-header text-center mb-16">
                    <span className="inline-block text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                        What They Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
                        Loved by
                        <span className="gradient-text"> Patients & Doctors</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Real stories from the people who trust DocuCare every day for their healthcare needs.
                    </p>
                </div>

                {/* Main Carousel */}
                <div className="testimonial-carousel max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="glass-card border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                            >
                                {/* Quote icon */}
                                <FaQuoteLeft className="text-sky-400/20 text-7xl absolute -top-2 -left-2" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                                        <FiStar key={i} className="text-yellow-400 text-lg" fill="currentColor" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                                    "{testimonials[current].quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center`}>
                                        <span className="text-white font-bold text-lg">{testimonials[current].initials}</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">{testimonials[current].name}</div>
                                        <div className="text-slate-400 text-sm">{testimonials[current].role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8">
                            {/* Dot indicators */}
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`transition-all duration-300 rounded-full cursor-pointer ${i === current
                                                ? 'w-8 h-2 gradient-bg'
                                                : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Prev / Next buttons */}
                            <div className="flex gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={prev}
                                    className="w-11 h-11 glass-card border border-white/10 hover:border-sky-400/30 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                                >
                                    <FiChevronLeft />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={next}
                                    className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center text-white cursor-pointer"
                                >
                                    <FiChevronRight />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating summary */}
                <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
                    {[
                        { label: 'App Store', rating: '4.9', icon: '★' },
                        { label: 'Google Play', rating: '4.8', icon: '★' },
                        { label: 'Trustpilot', rating: '4.9', icon: '★' },
                    ].map((r) => (
                        <div key={r.label} className="glass-card border border-white/5 rounded-2xl p-4 text-center">
                            <div className="text-yellow-400 text-xl font-bold">{r.icon} {r.rating}</div>
                            <div className="text-slate-400 text-xs mt-1">{r.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
