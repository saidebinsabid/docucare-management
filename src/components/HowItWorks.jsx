import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiUserPlus, FiCalendar, FiVideo } from 'react-icons/fi'
import { MdCheckCircle } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: '01',
        icon: FiUserPlus,
        title: 'Create Your Profile',
        description: 'Sign up in under 2 minutes. Add your medical history, insurance info, and preferences securely.',
        color: 'text-sky-400',
        gradientFrom: 'from-sky-500',
        gradientTo: 'to-sky-400',
        border: 'border-sky-400/30',
        bg: 'bg-sky-400/10',
        highlights: ['Free lifetime account', 'HIPAA compliant', 'Instant verification'],
    },
    {
        number: '02',
        icon: FiCalendar,
        title: 'Find & Book a Doctor',
        description: 'Browse verified specialists by specialty, location, or availability. Book in real-time with instant confirmation.',
        color: 'text-indigo-400',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-purple-500',
        border: 'border-indigo-400/30',
        bg: 'bg-indigo-400/10',
        highlights: ['200+ verified doctors', 'Same-day booking', 'Smart reminders'],
    },
    {
        number: '03',
        icon: FiVideo,
        title: 'Consult & Get Care',
        description: 'Meet your doctor via HD video call or in-person. Receive prescriptions, records, and follow-up care digitally.',
        color: 'text-emerald-400',
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-500',
        border: 'border-emerald-400/30',
        bg: 'bg-emerald-400/10',
        highlights: ['HD video calls', 'Digital prescriptions', 'Health tracking'],
    },
]

export default function HowItWorks() {
    const sectionRef = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the connector line drawing
            gsap.from('.connector-line', {
                scrollTrigger: {
                    trigger: '.steps-container',
                    start: 'top 70%',
                },
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 1.2,
                ease: 'power2.inOut',
            })

            gsap.from('.step-item', {
                scrollTrigger: {
                    trigger: '.steps-container',
                    start: 'top 72%',
                },
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: 'power3.out',
            })

            gsap.from('.how-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 78%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="how-it-works" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#0f172a]">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="how-header text-center mb-16">
                    <span className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-indigo-400/10 border border-indigo-400/20">
                        Simple Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
                        How DocuCare
                        <span className="gradient-text"> Works</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Getting started with better healthcare has never been easier. Three simple steps to transform your experience.
                    </p>
                </div>

                {/* Steps */}
                <div className="steps-container relative">
                    {/* Desktop connector line */}
                    <div className="hidden lg:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
                        <div className="connector-line h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 rounded-full" />
                        {/* Dots on line */}
                        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                            <div
                                key={i}
                                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"
                                style={{ left: `${(i + 1) * 12}%` }}
                            />
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, i) => (
                            <div key={step.number} className="step-item relative">
                                {/* Step number button */}
                                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-6">
                                    <div className="relative flex-shrink-0">
                                        <div className={`w-[3.5rem] h-[3.5rem] rounded-2xl bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} flex items-center justify-center shadow-xl relative z-10`}>
                                            <step.icon className="text-white text-2xl" />
                                        </div>
                                        <span className={`absolute -top-2 -right-2 w-5 h-5 text-[10px] font-bold ${step.color} bg-[#0f172a] border ${step.border} rounded-full flex items-center justify-center`}>
                                            {i + 1}
                                        </span>
                                    </div>

                                    <div className="lg:text-center">
                                        <div className={`text-xs font-bold ${step.color} tracking-widest uppercase mb-2`}>
                                            Step {step.number}
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm mb-4">{step.description}</p>

                                        {/* Highlights */}
                                        <ul className="space-y-2 lg:text-left">
                                            {step.highlights.map(h => (
                                                <li key={h} className="flex items-center gap-2 text-slate-300 text-sm">
                                                    <MdCheckCircle className={`${step.color} text-base flex-shrink-0`} />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
