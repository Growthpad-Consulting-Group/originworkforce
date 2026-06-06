"use client";

import { useEffect, useRef } from "react";

interface ReCAPTCHAProps {
  sitekey: string;
  onChange: (token: string | null) => void;
}

export default function ReCAPTCHA({ sitekey, onChange }: ReCAPTCHAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);

  // Keep callback ref updated
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    // 1. Declare the global callback functions
    (window as any).onRecaptchaSuccess = (token: string) => {
      onChangeRef.current(token);
    };
    (window as any).onRecaptchaExpired = () => {
      onChangeRef.current(null);
    };

    const renderRecaptcha = () => {
      if ((window as any).grecaptcha && containerRef.current) {
        try {
          // Clear container before rendering to prevent duplicate widgets
          containerRef.current.innerHTML = "";
          
          (window as any).grecaptcha.render(containerRef.current, {
            sitekey: sitekey,
            callback: "onRecaptchaSuccess",
            "expired-callback": "onRecaptchaExpired",
          });
        } catch (error) {
          console.warn("reCAPTCHA rendering error (already rendered?):", error);
        }
      }
    };

    // 2. Load the script if not already loaded
    if (!document.getElementById("recaptcha-script")) {
      // Set the onload callback on the window
      (window as any).onRecaptchaLoad = () => {
        renderRecaptcha();
      };
      
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // If script is already loaded (from a previous page visit), render directly
      if ((window as any).grecaptcha) {
        renderRecaptcha();
      } else {
        // script exists but grecaptcha not yet initialized, check periodically
        const checkInterval = setInterval(() => {
          if ((window as any).grecaptcha) {
            renderRecaptcha();
            clearInterval(checkInterval);
          }
        }, 100);
        return () => clearInterval(checkInterval);
      }
    }

    return () => {
      // Cleanup to prevent DOM leaks when navigating away
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [sitekey]);

  return <div ref={containerRef} className="g-recaptcha" />;
}
