"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Loader2 } from "lucide-react"

export function EmailSignupSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setStatus("loading")
    // Simulate API call
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <section id="signup" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Early Access</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Be the first to experience CricAI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our waitlist and get exclusive early access when we launch. Plus, receive 3 months free on any paid plan.
          </p>

          <div className="mt-10">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{"You're on the list! We'll be in touch soon."}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <p className="mt-4 text-sm text-muted-foreground">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by cricket organizations worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              <span className="text-lg font-bold text-foreground">ICC</span>
              <span className="text-lg font-bold text-foreground">BCCI</span>
              <span className="text-lg font-bold text-foreground">ECB</span>
              <span className="text-lg font-bold text-foreground">CA</span>
              <span className="text-lg font-bold text-foreground">PCB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
