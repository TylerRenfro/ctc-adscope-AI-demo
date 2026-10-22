export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Google Ads Account",
      description: "Securely link your Google Ads account with just a few clicks. We use OAuth 2.0 for maximum security.",
      icon: "🔗",
      details: ["OAuth 2.0 authentication", "Read/write permissions", "Instant sync"]
    },
    {
      number: "02", 
      title: "Set Your Optimization Rules",
      description: "Define when and how you want campaigns adjusted based on weather, time, device, and network conditions.",
      icon: "⚙️",
      details: ["Custom rule builder", "Multiple conditions", "Preview mode"]
    },
    {
      number: "03",
      title: "AI Monitors & Optimizes",
      description: "Our AI continuously monitors conditions and automatically adjusts your campaigns to maximize performance.",
      icon: "🤖",
      details: ["24/7 monitoring", "Real-time adjustments", "Performance tracking"]
    },
    {
      number: "04",
      title: "Track Results & ROI",
      description: "Get detailed analytics showing how automation improved your campaigns and increased your return on investment.",
      icon: "📈",
      details: ["Performance dashboard", "ROI tracking", "Detailed reporting"]
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Content would go here - keeping the component structure */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Get started with AdScope in minutes and see results immediately.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
