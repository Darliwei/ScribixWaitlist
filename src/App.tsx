import { useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import WhoItsFor from "./components/WhoItsFor";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdI5symTfyuIYGXzkcP9GrZ9d2Fc8SrUJCa4zKoaqWQPQWCFQ/formResponse";
const EMAIL_FIELD_ID = "entry.305895715";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append(EMAIL_FIELD_ID, email);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Google Forms doesn't allow CORS, so we use no-cors mode
        body: formData,
      });

      // With no-cors mode, we can't check the response status
      // If no error is thrown, we assume success
      setMessage({
        type: "success",
        text: "Thanks for joining! We'll notify you when Scribix launches.",
      });
      setEmail("");

      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <AnimatedBackground />
      <Hero
        email={email}
        setEmail={setEmail}
        onSubmit={handleEmailSubmit}
        isSubmitting={isSubmitting}
        message={message}
      />
      <HowItWorks />
      <KeyFeatures />
      <WhoItsFor />
      <FinalCTA
        email={email}
        setEmail={setEmail}
        onSubmit={handleEmailSubmit}
        isSubmitting={isSubmitting}
        message={message}
      />
      <Footer />
    </div>
  );
}

export default App;
