import CTA from "../components/landing/CTA"
import HowItWorks from "../components/landing/HowItWorks"
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero"
import Stats from "../components/landing/Stats"
import Features from "../components/landing/Features"
import Footer from "../components/landing/Footer"

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