const KeyFeatures = () => {
  const features = [
    {
      title: 'Multi-Niche Support',
      description: 'Crypto, Tech, Marketing, Fitness, and 20+ specialized niches',
      icon: '👥',
    },
    {
      title: 'Tone Customization',
      description: 'Witty, serious, sarcastic, professional - match your brand voice',
      icon: '💬',
    },
    {
      title: 'All Content Types',
      description: 'Short tweets, long threads, announcements, and viral shitposts',
      icon: '🐦',
    },
    {
      title: 'AI Voice Learning',
      description: 'Pro feature: AI learns and mimics your unique writing style',
      icon: '⚡',
      comingSoon: true,
    },
    {
      title: 'Trending Topics',
      description: 'Stay relevant with AI-powered trend analysis and suggestions',
      icon: '📈',
      comingSoon: true,
    },
    {
      title: 'Future: Scheduling',
      description: 'Coming soon: calendar integration and voice cloning features',
      icon: '✈️',
      comingSoon: true,
    },
  ]

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-gradient">Key Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-dark-card/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300 group"
            >
              {/* Icon in light blue square */}
              <div className="mb-4 w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon-purple transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {feature.comingSoon && (
                <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold text-neon-purple bg-neon-purple/10 rounded">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
