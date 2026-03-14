import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { LiveScoringSection } from "@/components/live-scoring-section"
import { EmailSignupSection } from "@/components/email-signup-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LiveScoringSection />
      <EmailSignupSection />
      <Footer />
    </main>
  )
}
