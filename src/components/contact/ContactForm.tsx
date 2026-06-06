"use client";

import { useState, useCallback } from "react";
import { Icon } from "@iconify/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import ReCAPTCHA from "@/components/contact/ReCAPTCHA";

const enquiryTypes = [
  "Partner Enquiry",
  "Workforce Demand",
  "Talent Network",
  "Compliance Question",
  "Media / Press",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    enquiryType: "",
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation check (in addition to HTML5 browser-level checks)
    if (!form.enquiryType || !form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }

    if (!recaptchaToken) {
      setError("Please check the reCAPTCHA box to verify you are human.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred while sending your message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
      // Reset reCAPTCHA widget on error so they can tick it again
      if ((window as any).grecaptcha) {
        try {
          (window as any).grecaptcha.reset();
        } catch (e) {}
      }
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-brand-gray/25 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-navy transition-colors";

  return (
    <section className="bg-brand-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-24">

          {/* Left — contact details */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                Start the Conversation
              </p>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:hello@originworkforce.africa"
                  className="flex items-start gap-4 text-md text-brand-navy hover:text-brand-gold transition-colors duration-200"
                >
                  <Icon icon="lucide:mail" width={18} className="shrink-0 text-brand-gold mt-0.5" />
                  hello@originworkforce.africa
                </a>
                <a
                  href="tel:+254701850850"
                  className="flex items-start gap-4 text-md text-brand-navy hover:text-brand-gold transition-colors duration-200"
                >
                  <Icon icon="lucide:phone" width={18} className="shrink-0 text-brand-gold mt-0.5" />
                  +254 701 850 850
                </a>
                <div className="flex items-start gap-4 text-md text-brand-navy">
                  <Icon icon="lucide:map-pin" width={18} className="shrink-0 text-brand-gold mt-0.5" />
                  <span>
                    The Westwood Office, 6th Floor 6A, Comply Guide Advisory,
                    Westlands, Nairobi, Kenya.
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col gap-4 py-12 text-center">
                <Icon icon="lucide:check-circle" width={48} className="mx-auto text-brand-gold" />
                <h3 className="text-2xl font-semibold text-brand-navy">Message sent</h3>
                <p className="text-brand-gray">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                {/* Error Banner */}
                {error && (
                  <div className="flex items-center gap-3 border border-red-500/20 bg-red-50/50 p-4 text-sm text-red-800 rounded">
                    <Icon icon="lucide:alert-circle" width={18} className="shrink-0 text-red-500" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Enquiry type */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                    What is this enquiry about?
                  </label>
                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select enquiry type</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about what you are looking for and how we can help."
                    rows={6}
                    required
                    className={inputClass}
                  />
                </div>

                {/* reCAPTCHA widget */}
                <div className="my-2">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-start bg-brand-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="lucide:loader-2" className="animate-spin" width={14} />
                      Sending...
                    </>
                  ) : (
                    "Contact Origin Workforce"
                  )}
                </button>

              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
