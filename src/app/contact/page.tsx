import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Origin Workforce",
  },
  description:
    "Get in touch with Origin Workforce — whether you are testing a new source market, expanding a corridor, or looking for a reliable origin-side execution partner.",
  alternates: { canonical: "https://originworkforce.africa/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
