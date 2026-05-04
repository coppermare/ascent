import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
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

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.location.pathname==='/'&&!sessionStorage.getItem('preloader_done')){var s=document.createElement('style');s.textContent='#preloader-overlay{position:fixed;inset:0;z-index:9999;background:radial-gradient(ellipse at 25% 65%,rgba(90,79,207,0.38) 0%,#000 62%)}';document.head.appendChild(s);var d=document.createElement('div');d.id='preloader-overlay';document.body.appendChild(d);}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PreloaderLoader />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
