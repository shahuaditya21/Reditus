import CTA from "../components/CTA"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Features from "../components/Features"
import Footer from "../components/Footer"

export default function Home() {
  return (
        <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-emerald-50">
    <Navbar />
    <Hero />
    <Stats />
    <HowItWorks />
    <Features />
    <CTA />
    <Footer />
    </div>
  )
}