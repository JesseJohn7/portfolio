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
  title: "Billionaire Dev — Portfolio of Jesse John",
  description:
    "The official portfolio of Jesse John, a software developer and architect building modern, high-performance applications and digital experiences.",
  keywords: [
    "Billionaire Dev",
    "Jesse John",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Web Developer in Nigeria",
    "Jesse John Portfolio",
  ],
  authors: [{ name: "Jesse John" }],
  openGraph: {
    title: "Billionaire Dev — Jesse John's Portfolio",
    description:
      "Explore the projects, skills, and journey of Jesse John — a passionate software developer and architect crafting digital experiences that matter.",
    url: "https://billionaire-dev.vercel.app",
    siteName: "Billionaire Dev",
    images: [
      {
        url: "/og-image.jpg", // replace with your actual image in /public
        width: 1200,
        height: 630,
        alt: "Billionaire Dev — Jesse John's Portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billionaire Dev — Jesse John",
    description:
      "Portfolio of Jesse John, a software developer and architect passionate about building scalable, elegant applications.",
    creator: "@yourXhandle", // replace if you have a Twitter/X handle
    images: ["/og-image.jpg"], // replace with your actual image in /public
  },
  alternates: {
    canonical: "https://billionaire-dev.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Replace the content value with your real verification code from Google Search Console */}
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
