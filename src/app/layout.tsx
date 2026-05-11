import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PreloaderLoader } from "@/components/PreloaderLoader";
import { getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "Ascent — Growth sprints for Series A and B companies";
const defaultDescription =
  "Ascent is an AI growth agency for Series A and B startups. Signal audits, growth sprints, and retainer partnerships built around data, not guesswork.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ascent",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Ascent — Growth sprints for Series A and B companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og_image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ascent",
  url: getSiteUrl(),
  description: defaultDescription,
  logo: `${getSiteUrl()}/logo_primary.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${getSiteUrl()}/contact`,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`min-h-full flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <PreloaderLoader />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
