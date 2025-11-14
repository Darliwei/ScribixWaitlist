import { FormEvent } from "react";

interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: FormEvent) => void;
  size?: "sm" | "md" | "lg";
  showEnvelope?: boolean;
  buttonText?: string;
  showArrow?: boolean;
  showPaperAirplane?: boolean;
  placeholder?: string;
  isSubmitting?: boolean;
  message?: { type: "success" | "error"; text: string } | null;
}

const WaitlistForm = ({
  email,
  setEmail,
  onSubmit,
  size = "md",
  showEnvelope = false,
  buttonText = "Join the Waitlist",
  showArrow = false,
  showPaperAirplane = false,
  placeholder = "Enter your email",
  isSubmitting = false,
  message = null,
}: WaitlistFormProps) => {
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  const inputSizeClasses = {
    sm: "px-4 py-3 text-sm pl-10",
    md: "px-5 py-4 text-base pl-12",
    lg: "px-6 py-4 text-base pl-12",
  };

  const buttonSizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-4 text-base",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto`}>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          {showEnvelope && (
            <div
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-white ${iconSizeClasses[size]} pointer-events-none`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={isSubmitting}
            className={`w-full ${inputSizeClasses[size]} bg-dark-card/80 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-teal focus:border-transparent placeholder-gray-400 transition-all hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ fontWeight: "400", color: "#ffffff" }}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonSizeClasses[size]} bg-gradient-to-r from-neon-teal to-neon-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-teal/50 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          style={{ fontWeight: "600" }}
        >
          {isSubmitting ? "Submitting..." : buttonText}
          {!isSubmitting && showArrow && (
            <svg
              className={iconSizeClasses[size]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
          {!isSubmitting && showPaperAirplane && (
            <svg
              className={iconSizeClasses[size]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          )}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${
            message.type === "success"
              ? "bg-neon-teal/10 border border-neon-teal/30 text-neon-teal"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
