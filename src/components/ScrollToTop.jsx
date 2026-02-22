import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Check scroll position to toggle visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Animation variants for the colorful dots
    const blastVariants = {
        hidden: { scale: 0, opacity: 0 },
        hover: (custom) => ({
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            x: custom.x,
            y: custom.y,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: custom.delay
            }
        })
    }

    // Array of scattered dots for the colorful blast effect on hover
    const dots = [
        { id: 1, color: 'bg-emerald-400', size: 'w-2 h-2', pos: { top: '-5px', left: '10px' }, custom: { x: -6, y: -10, delay: 0.1 } },
        { id: 2, color: 'bg-sky-400', size: 'w-3 h-3', pos: { top: '5px', right: '-8px' }, custom: { x: 12, y: -6, delay: 0.3 } },
        { id: 3, color: 'bg-purple-400', size: 'w-2.5 h-2.5', pos: { bottom: '0px', right: '-10px' }, custom: { x: 10, y: 8, delay: 0.2 } },
        { id: 4, color: 'bg-indigo-400', size: 'w-2 h-2', pos: { bottom: '-8px', left: '5px' }, custom: { x: -8, y: 10, delay: 0.5 } },
        { id: 5, color: 'bg-pink-400', size: 'w-1.5 h-1.5', pos: { top: '15px', left: '-12px' }, custom: { x: -12, y: 4, delay: 0.4 } },
        { id: 6, color: 'bg-amber-400', size: 'w-2 h-2', pos: { bottom: '10px', left: '-8px' }, custom: { x: -10, y: 6, delay: 0.15 } },
    ]

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    variants={{
                        hidden: { opacity: 0, scale: 0.5, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
                        exit: { opacity: 0, scale: 0.5, y: 20 },
                        hover: { scale: 1.1, translateY: -5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-sky-600 via-sky-400 to-indigo-400 text-white cursor-pointer hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] transition-shadow duration-300 isolate"
                >
                    {/* The scattered dot color blast effect (runs during "hover" variant) */}
                    {dots.map((dot) => (
                        <motion.div
                            key={dot.id}
                            variants={blastVariants}
                            custom={dot.custom}
                            className={`absolute rounded-full ${dot.color} ${dot.size} -z-10`}
                            style={dot.pos}
                        />
                    ))}

                    {/* Smooth inner gradient flare on hover */}
                    <div className="absolute inset-0 rounded-full bg-sky-300 opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 -z-10" />

                    <FaArrowUp className="text-xl relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
