import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }) {
    const liquidRef = useRef(null)
    const textRef = useRef(null)
    const glowRef = useRef(null)

    useEffect(() => {
        // GSAP Timeline for liquid fill and counter
        const tl = gsap.timeline({
            onComplete: () => {
                // Short delay before triggering exit animation
                setTimeout(onComplete, 600)
            }
        })

        // 1. Fill liquid and update text counter simultaneously
        tl.to(liquidRef.current, {
            height: '100%',
            duration: 2.5,
            ease: 'power2.inOut',
        }, 'start')
            .to(
                { val: 0 },
                {
                    val: 100,
                    duration: 2.5,
                    ease: 'power2.inOut',
                    onUpdate: function () {
                        if (textRef.current) {
                            textRef.current.innerHTML = Math.round(this.targets()[0].val)
                        }
                    }
                },
                'start'
            )

            // 2. Smooth localized blink behind the syringe
            .to('.color-blast', {
                scale: 1.1,
                opacity: 0.4,
                duration: 0.8,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
            }, '-=0.1')

        return () => tl.kill()
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a] overflow-hidden"
        >
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_50%)]" />

            <div className="relative z-10 flex items-center justify-center gap-10 md:gap-16 scale-90 md:scale-100 p-8">

                {/* Syringe Assembly */}
                <div className="flex flex-col items-center relative rounded-full transition-shadow" ref={glowRef}>

                    {/* Localized Syringe Background Blast */}
                    <div className="absolute top-10 bottom-24 -left-4 -right-4 bg-indigo-500 blur-2xl opacity-0 color-blast z-0" />

                    {/* Plunger Top */}
                    <div className="w-14 h-2.5 bg-slate-300 rounded-t-md shadow-inner z-10" />

                    {/* Plunger Rod */}
                    <div className="w-5 h-12 bg-gradient-to-b from-slate-200 to-slate-400 border-x border-slate-500 z-10 relative">
                        {/* Indentations for grip */}
                        <div className="absolute top-2 left-1 right-1 h-px bg-slate-500/30" />
                        <div className="absolute top-4 left-1 right-1 h-px bg-slate-500/30" />
                        <div className="absolute top-6 left-1 right-1 h-px bg-slate-500/30" />
                    </div>

                    {/* Plunger Rubber Base */}
                    <div className="w-12 h-3.5 bg-slate-800 rounded-sm z-10 mb-[-2px] border-y border-slate-600 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />

                    {/* Syringe Barrel */}
                    <div className="w-16 h-56 md:h-64 border-2 border-white/20 rounded-md bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col justify-end shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">

                        {/* Measurement Marks (CSS mapping) */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-between py-6 z-20 pointer-events-none opacity-60">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex flex-col gap-2.5">
                                    <div className="w-3.5 h-px bg-white" />
                                    <div className="w-1.5 h-px bg-white/60" />
                                    <div className="w-1.5 h-px bg-white/60" />
                                    <div className="w-1.5 h-px bg-white/60" />
                                </div>
                            ))}
                            <div className="w-3.5 h-px bg-white" />
                        </div>

                        {/* Liquid Fill Element controlled via GSAP */}
                        <div
                            ref={liquidRef}
                            className="w-full h-0 relative z-10 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-600 via-sky-400 to-indigo-400 shadow-[0_0_30px_rgba(14,165,233,0.6)]" />
                            {/* Liquid top reflection / meniscus */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/50 backdrop-blur-sm shadow-[0_2px_5px_rgba(255,255,255,0.5)]" />

                            {/* Animated Internal Bubbles */}
                            <div className="absolute bottom-6 left-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-float" />
                            <div className="absolute bottom-16 right-3 w-1 h-1 bg-white/30 rounded-full animate-float-delay" />
                            <div className="absolute bottom-32 left-4 w-2 h-2 bg-white/20 rounded-full animate-float-delay-2" />
                        </div>
                    </div>

                    {/* Syringe Hub/Tip */}
                    <div className="w-6 h-4 bg-gradient-to-b from-white/20 to-white/5 border-x border-b border-white/20 rounded-b-md backdrop-blur-sm z-10" />

                    {/* Needle Base (Luer slip) */}
                    <div className="w-2.5 h-3 bg-sky-200/40 mt-[-1px] z-10 backdrop-blur-sm border border-white/10" />

                    {/* Needle */}
                    <div className="w-0.5 h-12 bg-gradient-to-b from-slate-300 to-transparent z-0 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />

                    {/* Final Drip at Needle Tip */}
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-0 blur-[1px] shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                </div>

                {/* Numeric Counter Details */}
                <div className="w-36 flex flex-col pt-12">
                    <div className="text-sky-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-1">
                        Setting up
                    </div>
                    <div className="text-6xl md:text-8xl font-extrabold text-white font-['Plus_Jakarta_Sans'] flex items-baseline leading-none">
                        <span ref={textRef}>0</span>
                        <span className="text-3xl md:text-4xl text-slate-500 font-medium ml-1">%</span>
                    </div>
                    <div className="text-slate-400 text-xs mt-3 leading-relaxed border-l-2 border-indigo-500/30 pl-3">
                        Preparing your health profile<br />
                        and connecting doctors...
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
