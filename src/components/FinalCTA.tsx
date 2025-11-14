import { FormEvent } from 'react'
import WaitlistForm from './WaitlistForm'

interface FinalCTAProps {
  email: string
  setEmail: (email: string) => void
  onSubmit: (e: FormEvent) => void
  isSubmitting?: boolean
  message?: { type: 'success' | 'error'; text: string } | null
}

const FinalCTA = ({ email, setEmail, onSubmit, isSubmitting = false, message = null }: FinalCTAProps) => {
  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-surface/50 to-dark-bg">
      <div className="max-w-4xl mx-auto">
        {/* Card container */}
        <div className="bg-dark-card/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Be Among the First to Try</span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">Scribix</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of creators already on the waitlist. Get exclusive early access when we launch.
          </p>

          <WaitlistForm 
            email={email} 
            setEmail={setEmail} 
            onSubmit={onSubmit}
            size="lg"
            showEnvelope={true}
            buttonText="Notify Me"
            showArrow={false}
            showPaperAirplane={true}
            placeholder="your@email.com"
            isSubmitting={isSubmitting}
            message={message}
          />

          <p className="mt-8 text-sm text-gray-400">
            Launching soon. No spam. Just smart content.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
