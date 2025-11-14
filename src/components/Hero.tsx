import { FormEvent } from 'react'
import WaitlistForm from './WaitlistForm'

interface HeroProps {
  email: string
  setEmail: (email: string) => void
  onSubmit: (e: FormEvent) => void
  isSubmitting?: boolean
  message?: { type: 'success' | 'error'; text: string } | null
}

const Hero = ({ email, setEmail, onSubmit, isSubmitting = false, message = null }: HeroProps) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Star Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 text-neon-teal drop-shadow-[0_0_15px_rgba(0,245,255,0.6)]"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L14.09 8.26L22 9.27L17 14.14L18.18 22.02L12 18.77L5.82 22.02L7 14.14L2 9.27L9.91 8.26L12 2Z" />
            </svg>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-neon-purple blur-xl opacity-50 animate-pulse-slow"></div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">Generate Genius</span>
          <br />
          <span className="text-white">Posts with One Click</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: '400' }}>
          Scribix is your AI assistant for Twitter threads, viral shitposts, and niche content creation.
        </p>

        <WaitlistForm 
          email={email} 
          setEmail={setEmail} 
          onSubmit={onSubmit}
          size="lg"
          showEnvelope={true}
          buttonText="Join Waitlist"
          showArrow={true}
          placeholder="your@email.com"
          isSubmitting={isSubmitting}
          message={message}
        />
      </div>
    </section>
  )
}

export default Hero
