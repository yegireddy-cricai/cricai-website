export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Match",
      description: "Set up your match in seconds. Add teams, select format, and invite scorers."
    },
    {
      number: "02",
      title: "Score Live",
      description: "Tap to record runs, wickets, and extras. Our AI assists with smart suggestions."
    },
    {
      number: "03",
      title: "Share Instantly",
      description: "Your scores are live. Share links with fans or embed on your website."
    },
    {
      number: "04",
      title: "Analyze & Improve",
      description: "Review detailed analytics, wagon wheels, and player performance insights."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">How It Works</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Simple scoring, powerful results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our intuitive workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-primary flex items-center justify-center mb-4 z-10">
                  <span className="text-primary font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
