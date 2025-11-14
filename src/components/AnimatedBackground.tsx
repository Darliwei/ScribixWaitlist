const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glowing network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#B026FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Animated lines */}
        <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
          <path d="M0,100 Q200,50 400,100 T800,100" className="animate-pulse-slow">
            <animate attributeName="d" values="M0,100 Q200,50 400,100 T800,100;M0,150 Q200,100 400,150 T800,150;M0,100 Q200,50 400,100 T800,100" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M0,300 Q300,250 600,300 T1200,300" className="animate-pulse-slow" opacity="0.6">
            <animate attributeName="d" values="M0,300 Q300,250 600,300 T1200,300;M0,350 Q300,300 600,350 T1200,350;M0,300 Q300,250 600,300 T1200,300" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,500 Q400,450 800,500 T1600,500" className="animate-pulse-slow" opacity="0.4">
            <animate attributeName="d" values="M0,500 Q400,450 800,500 T1600,500;M0,550 Q400,500 800,550 T1600,550;M0,500 Q400,450 800,500 T1600,500" dur="12s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Connection nodes */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i * 150) % 1200}`}
            cy={`${100 + (i % 5) * 200}`}
            r="3"
            fill="#00F5FF"
            opacity="0.6"
            className="animate-pulse-slow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-teal rounded-full animate-float opacity-30"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-teal/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl" />
    </div>
  )
}

export default AnimatedBackground
