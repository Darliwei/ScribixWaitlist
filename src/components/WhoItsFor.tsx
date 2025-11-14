const WhoItsFor = () => {
  const personas = [
    {
      title: 'Meme Creators',
      description: 'Viral content that hits different',
    },
    {
      title: 'Web3 Founders',
      description: 'Crypto-native content that resonates',
    },
    {
      title: 'Ghostwriters',
      description: 'Scale your client work effortlessly',
    },
    {
      title: 'Influencers',
      description: 'Consistent, engaging content daily',
    },
    {
      title: 'Solo Creators',
      description: 'Your personal content assistant',
    },
  ]

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-center mb-4">
          <span className="text-gradient">Built for Creators</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-dark-card/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              {/* Circular icon with glowing border */}
              <div className="mb-4 w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-teal via-neon-purple to-neon-blue p-[2px] group-hover:shadow-lg group-hover:shadow-neon-teal/50 transition-all">
                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-base font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                {persona.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
