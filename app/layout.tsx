import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billionaire Dev - Jesse John | Senior Developer & Software Architect | jesse_can_code",
  description:
    "Billionaire Dev - Portfolio of Jesse John, a senior full-stack developer and software architect. Specializing in modern web development, scalable applications, and digital innovation. Discover projects, expertise, and the journey of jesse_can_code.",
  keywords: [
    "Billionaire Dev",
    "Jesse John",
    "Developer",
    "Software Developer",
    "Senior Developer",
    "Full Stack Developer",
    "Software Architect",
    "jesse_can_code",
    "jesse_john developer",
    "Modern Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Development Portfolio",
    "Developer Portfolio",
    "Jesse John Portfolio",
    "High-Performance Applications",
    "Digital Experiences",
    "Scalable Web Applications",
    "Software Engineer",
    "Technical Architect",
    "Billionaire Developer",
    "Tech Visionary",
  ],
  authors: [{ name: "Jesse John", url: "https://billionaire-dev.vercel.app" }],
  creator: "Jesse John",
  publisher: "Jesse John",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Billionaire Dev - Jesse John | Senior Developer & Software Architect",
    description:
      "Explore the portfolio of Jesse John (jesse_can_code) - a senior full-stack developer and software architect crafting high-performance, scalable digital experiences.",
    url: "https://billionaire-dev.vercel.app",
    siteName: "Billionaire Dev",
    images: [
      {
        url: "https://billionaire-dev.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Billionaire Dev - Jesse John's Portfolio",
      },
      {
        url: "https://billionaire-dev.vercel.app/og-image.jpg",
        width: 800,
        height: 420,
        alt: "Jesse John - Senior Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billionaire Dev - Jesse John | Senior Developer",
    description:
      "Portfolio of Jesse John (jesse_can_code) - Senior full-stack developer crafting scalable applications and digital innovation.",
    creator: "@jesse_can_code",
    images: ["https://billionaire-dev.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://billionaire-dev.vercel.app",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Jesse John" />
        
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jesse John",
              url: "https://billionaire-dev.vercel.app",
              image: "https://billionaire-dev.vercel.app/og-image.jpg",
              sameAs: [
                "https://github.com",
                "https://twitter.com/jesse_can_code",
                "https://linkedin.com",
              ],
              jobTitle: "Senior Full-Stack Developer & Software Architect",
              description:
                "Billionaire Dev - Senior software developer specializing in modern web development and scalable applications",
              knowsAbout: [
                "Full-Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Software Architecture",
                "Web Development",
              ],
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Billionaire Dev",
              url: "https://billionaire-dev.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://billionaire-dev.vercel.app?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
