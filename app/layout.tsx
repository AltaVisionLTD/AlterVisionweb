  import type { Metadata ,Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO & Metadata
export const metadata: Metadata = {
  title: "Alta Vision | Engineering Scalable Products That Create Real Impact",
  description: "Alta Vision is a product-led software studio designing, building, and scaling reliable digital systems. We partner with startups, growing businesses, and organizations to engineer production-ready solutions.",
  keywords: [
    "Alta Vision", "Software Studio", "Product Engineering", "Software Development",
    "Scalable Systems", "Digital Transformation", "MVP Development", "Technical Architecture",
    "Construction Technology", "INKINGI", "Africa Software Company"
  ],
  authors: [{ name: "Alta Vision Team", url: "https://altavision.com" }],
  openGraph: {
    title: "Alta Vision | Engineering Scalable Products That Create Real Impact",
    description: "Product-led software studio designing, building, and scaling reliable digital systems with security, scalability, and long-term architecture in mind.",
    url: "https://altavision.com",
    siteName: "Alta Vision",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alta Vision - Engineering Excellence",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alta Vision | Engineering Scalable Products",
    description: "Product-led software studio building reliable digital systems. Engineering Your Vision into Reality.",
    site: "@altavision",
    creator: "@altavision",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  category: "technology",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const themeColor = "#063A33";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alta Vision",
    "alternateName": "Alta Vision Studio",
    "url": "https://altavision.com",
    "logo": "https://altavision.com/logo.png",
    "description": "Product-led software studio engineering scalable, secure, and reliable digital systems for startups, growing businesses, and organizations.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Africa",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Inquiries",
      "email": "info@altavision.com",
      "availableLanguage": ["English", "French"]
    },
    "sameAs": [
      "https://twitter.com/altavision",
      "https://www.linkedin.com/company/altavision",
      "https://github.com/altavision"
    ],
    "areaServed": "Global",
    "serviceType": [
      "Product Strategy & Architecture",
      "Custom Software Development",
      "Web & Mobile Applications",
      "Digital Transformation",
      "Technical Consulting"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alta Vision",
    "image": "https://altavision.com/logo.png",
    "@id": "https://altavision.com",
    "url": "https://altavision.com",
    "email": "info@altavision.com",
    "priceRange": "Contact for pricing",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Africa",
      "addressCountry": "Global"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Extra meta tags for SEO and accessibility */}
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://altavision.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}