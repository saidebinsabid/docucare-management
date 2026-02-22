import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DoctorShowcase from './components/DoctorShowcase'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loading])

  return (
    <BrowserRouter>
      {/* Preloader overlay with exit animation */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-[#0f172a] ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <DoctorShowcase />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
