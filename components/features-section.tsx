import { 
  Cpu, 
  BarChart3, 
  Smartphone, 
  Users, 
  Zap, 
  Shield 
} from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI Ball Tracking",
    description: "Advanced machine learning algorithms automatically detect and track every delivery with unprecedented accuracy."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Deep insights into batting patterns, bowling strategies, and player performance powered by real-time data analysis."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Score matches from anywhere with our intuitive mobile app. Works offline and syncs when connected."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage your entire squad, track player stats across seasons, and build comprehensive performance profiles."
  },
  {
    icon: Zap,
    title: "Live Updates",
    description: "Real-time scoring updates pushed to fans, families, and followers. Share live match links instantly."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.99% uptime. Your match data is always safe and accessible."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Features</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everything you need to score cricket
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for scorers, coaches, and cricket administrators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
