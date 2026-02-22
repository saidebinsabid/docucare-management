import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiStar, FiMapPin, FiAward } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger)

const doctors = [
    {
        name: 'Dr. Amara Hassan',
        specialty: 'Cardiologist',
        rating: 4.9,
        reviews: 312,
        experience: '14 yrs',
        location: 'New York, NY',
        available: true,
        initials: 'AH',
        gradient: 'from-pink-500 to-rose-600',
        tag: 'Top Rated',
    },
    {
        name: 'Dr. James Nakamura',
        specialty: 'Neurologist',
        rating: 4.8,
        reviews: 267,
        experience: '11 yrs',
        location: 'San Francisco, CA',
        available: true,
        initials: 'JN',
        gradient: 'from-sky-500 to-blue-600',
        tag: 'Expert',
    },
    {
        name: 'Dr. Sofia Reyes',
        specialty: 'Dermatologist',
        rating: 5.0,
        reviews: 445,
        experience: '9 yrs',
        location: 'Miami, FL',
        available: false,
        initials: 'SR',
        gradient: 'from-violet-500 to-purple-600',
        tag: 'Perfect Rating',
    },
    {
        name: 'Dr. Omar Farouq',
        specialty: 'Orthopedic Surgeon',
        rating: 4.7,
        reviews: 189,
        experience: '18 yrs',
        location: 'Chicago, IL',
        available: true,
        initials: 'OF',
        gradient: 'from-emerald-500 to-teal-600',
        tag: 'Senior Surgeon',
    },
]

export default function DoctorShowcase() {
    const sectionRef = useRef(null)

    useEffect(() => {
        // Only header uses GSAP — cards use Framer Motion whileInView
        const ctx = gsap.context(() => {
            gsap.from('.doctor-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="doctors" ref={sectionRef} className="relative py-24 lg:py-32 section-gradient">
            {/* Decorative top separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="doctor-header text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20"
                    >
                        Our Specialists
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-5"
                    >
                        Meet Our
                        <span className="gradient-text"> Expert Doctors</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-xl mx-auto"
                    >
                        Connect with board-certified specialists across every medical discipline. Real doctors, real expertise, real care.
                    </motion.p>
                </div>

                {/* Doctor cards — Framer Motion whileInView (React-safe) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
                            whileHover={{ y: -8, transition: { duration: 0.22 } }}
                            className="group glass-card border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-sky-400/20 transition-all duration-300"
                        >
                            {/* Doctor Avatar Header */}
                            <div className={`relative h-36 bg-gradient-to-br ${doctor.gradient} flex items-center justify-center overflow-hidden`}>
                                {/* Pattern overlay */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}
                                />

                                {/* Avatar */}
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                                        <span className="text-white text-2xl font-extrabold">{doctor.initials}</span>
                                    </div>
                                </div>

                                {/* Tag */}
                                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                    <FiAward className="text-yellow-400" />
                                    {doctor.tag}
                                </div>

                                {/* Available indicator */}
                                <div className={`absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${doctor.available
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                        : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                                    {doctor.available ? 'Available' : 'Unavailable'}
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="text-white font-bold text-base leading-tight group-hover:text-sky-300 transition-colors">
                                        {doctor.name}
                                    </h3>
                                    <MdVerified className="text-sky-400 text-lg flex-shrink-0 mt-0.5" />
                                </div>

                                <div className="text-sky-400 text-sm font-medium mb-3">{doctor.specialty}</div>

                                {/* Stats row */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center gap-1">
                                        <FiStar className="text-yellow-400 text-xs" fill="currentColor" />
                                        <span className="text-white text-xs font-bold">{doctor.rating}</span>
                                        <span className="text-slate-500 text-xs">({doctor.reviews})</span>
                                    </div>
                                    <div className="w-px h-3 bg-slate-700" />
                                    <span className="text-slate-400 text-xs">{doctor.experience} exp</span>
                                </div>

                                <div className="flex items-center gap-1 text-slate-400 text-xs mb-5">
                                    <FiMapPin className="text-slate-500 text-xs flex-shrink-0" />
                                    {doctor.location}
                                </div>

                                {/* Book button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${doctor.available
                                            ? 'gradient-bg text-white shadow-lg shadow-sky-500/20 hover:opacity-90'
                                            : 'bg-slate-700/50 text-slate-400 cursor-not-allowed'
                                        }`}
                                    disabled={!doctor.available}
                                >
                                    {doctor.available ? 'Book Appointment' : 'Currently Unavailable'}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className="mt-12 text-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="glass-card border border-slate-600 hover:border-sky-400/30 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all cursor-pointer"
                    >
                        View All 200+ Specialists →
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
