const HowItWorks = () => {
  const steps = [
    {
      title: 'Pick Your Niche',
      description: 'Choose from Crypto, Tech, Fitness, Marketing, and more specialized niches.',
      icon: '🎯',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Choose Your Tone',
      description: 'Select from Witty, Serious, Sarcastic, Professional, or Custom voice.',
      icon: '✨',
      gradient: 'from-teal-400 to-blue-500',
    },
    {
      title: 'Generate Instantly',
      description: 'Get tweets, threads, or shitposts in seconds. Copy, edit, or regenerate.',
      icon: '⚡',
      gradient: 'from-purple-500 to-blue-600',
    },
  ]

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-gradient">How It Works</span>
        </h2>

        <div className="relative mt-16">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
            <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-neon-teal/30 via-neon-teal/50 to-neon-teal/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-dark-card/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-teal/50 group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,245,255,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {/* Icon in gradient square */}
                <div className={`mb-6 w-14 h-14 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-teal transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
