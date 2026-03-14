"use client"

import { useEffect, useState } from "react"
import { Circle } from "lucide-react"

export function LiveScoringSection() {
  const [currentBall, setCurrentBall] = useState(0)
  const balls = ["1", "0", "4", "W", "2", "6"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBall((prev) => (prev + 1) % balls.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-scoring" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Live Preview</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Experience real-time scoring
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how CricAI transforms match data into beautiful, live scorecards
          </p>
        </div>

        {/* Scorecard Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-background border border-border overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-accent text-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">LIVE</span>
              </div>
              <span className="text-sm text-muted-foreground">T20 Match • Oval Ground</span>
            </div>

            {/* Score */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Team 1 */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">Mumbai Tigers</h3>
                  <div className="mt-2 flex items-baseline gap-2 justify-center md:justify-start">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">186</span>
                    <span className="text-xl text-muted-foreground">/7</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Overs: 18.3</p>
                </div>

                {/* VS */}
                <div className="px-6 py-3 rounded-full bg-secondary">
                  <span className="text-sm font-medium text-muted-foreground">VS</span>
                </div>

                {/* Team 2 */}
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-xl font-bold text-foreground">Delhi Knights</h3>
                  <div className="mt-2 flex items-baseline gap-2 justify-center md:justify-end">
                    <span className="text-4xl md:text-5xl font-bold text-muted-foreground">142</span>
                    <span className="text-xl text-muted-foreground">/10</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Overs: 19.2</p>
                </div>
              </div>

              {/* Current Over */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Current Over</span>
                  <span className="text-sm text-muted-foreground">Over 19</span>
                </div>
                <div className="flex items-center gap-3">
                  {balls.map((ball, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        index === currentBall
                          ? "scale-110 ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : ""
                      } ${
                        ball === "W"
                          ? "bg-accent text-accent-foreground"
                          : ball === "4" || ball === "6"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {ball}
                    </div>
                  ))}
                </div>
              </div>

              {/* Batsmen */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Striker</span>
                      <p className="font-semibold text-foreground">Virat K.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">67*</p>
                      <span className="text-xs text-muted-foreground">42 balls • SR 159.52</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Non-Striker</span>
                      <p className="font-semibold text-foreground">Rohit S.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">34*</p>
                      <span className="text-xs text-muted-foreground">28 balls • SR 121.43</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
