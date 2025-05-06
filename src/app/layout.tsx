import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Providers from "@/components/wrappers.tsx/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raheem Orekoya - Fullstack Web Developer | React, Node.js, and More",
  description: "Raheem Orekoya is a skilled fullstack web developer specializing in modern technologies like React, Next.js, Node.js, Hono.js and TypeScript. Explore high-performance web solutions and robust APIs tailored to meet your needs.",
  keywords: [
    "Raheem Orekoya",
    "Babatunde Orekoya",
    "Orekoya Babatunde",
    "Redoxx",
    "Redoxx Code",
    "Orekoya Babatunde Raheem",
    "Babatunde Raheem Orekoya",
    "Fullstack Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Web Developer in Nigeria",
    "Modern Web Development",
    "Custom Web Applications"
  ],
  openGraph: {
    type: "website",
    title: "Raheem Orekoya - Fullstack Web Developer",
    description: "Discover Raheem Orekoya's expertise in fullstack web development, creating dynamic web applications with React, Node.js, Hono.js and TypeScript.",
    url: process.env.NEXT_PUBLIC_SITE_DOMAIN,
    images: [
      {
        url: process.env.NEXT_PUBLIC_OG_IMAGE!,
        width: 1200,
        height: 630,
        alt: "Raheem Orekoya - Fullstack Web Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Raheem Orekoya - Fullstack Web Developer",
    description: "Discover Raheem Orekoya's expertise in fullstack web development, creating dynamic web applications with React, Node.js, and TypeScript.",
    images: [process.env.NEXT_PUBLIC_OG_IMAGE!]
  }
};

const nunito_sans = Inter({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito_sans.variable} font-Nunito antialiased py-24`}>
        <Providers>
          <Navbar />
          <div className="container max-w-3xl max-sm:px-6 mx-auto">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
  