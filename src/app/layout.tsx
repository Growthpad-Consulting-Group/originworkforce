import type { Metadata } from "next";
import { Figtree, Crimson_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://originworkforce.africa"),
  title: {
    default: "Origin Workforce | Global Workforce Mobility from Africa",
    template: "%s | Origin Workforce",
  },
  description:
    "Origin Workforce helps global recruiters, staffing firms, and labour mobility operators source, screen, prepare, and mobilise workforce talent from Africa.",
  keywords: [
    "workforce mobility Africa",
    "origin recruitment Kenya",
    "international labour supply Africa",
    "candidate sourcing Nairobi",
    "workforce compliance Africa",
    "global staffing Africa",
    "labour migration Kenya",
    "candidate sourcing Nairobi",
  ],
  authors: [{ name: "Origin Workforce", url: "https://originworkforce.africa" }],
  creator: "Origin Workforce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://originworkforce.africa",
    siteName: "Origin Workforce",
    title: "Origin Workforce | Global Workforce Mobility from Africa",
    description:
      "Origin Workforce helps global recruiters, staffing firms, and labour mobility operators source, screen, prepare, and mobilise workforce talent from Africa.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Origin Workforce | Global Workforce Mobility from Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Origin Workforce | Global Workforce Mobility from Africa",
    description:
      "Origin Workforce helps global recruiters, staffing firms, and labour mobility operators source, screen, prepare, and mobilise workforce talent from Africa.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-ZHXWCRHBJN";

  return (
    <html
      lang="en"
      className={`${figtree.variable} ${crimsonPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
