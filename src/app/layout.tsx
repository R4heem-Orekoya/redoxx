import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import "./prism.css"

export const metadata: Metadata = {
   title: "Raheem Orekoya - Frontend Web Developer",
   description: "Raheem Orekoya is a skilled frontend web developer specializing in modern technologies like React, Next.js, Node.js, Hono.js and TypeScript.",
   keywords: [
      "Raheem Orekoya",
      "Babatunde Orekoya",
      "Orekoya Babatunde",
      "Redoxx",
      "Redoxx Code",
      "Orekoya Babatunde Raheem",
      "Babatunde Raheem Orekoya",
      "Fullstack Web Developer",
      "Fullstack Engineer",
      "Frontend Web Developer",
      "Frontend Developer",
      "Frontend Engineer",
      "React Developer",
      "Node.js Developer",
      "JavaScript Developer",
      "JavaScript Developer",
      "Next.js Developer",
      "Web Developer in Nigeria",
      "Best Web Developer in Nigeria",
      "Modern Web Development",
      "Custom Web Applications"
   ],
   openGraph: {
      type: "website",
      title: "Raheem Orekoya - Frontend Web Developer",
      description: "Discover Raheem Orekoya's expertise in frontend web development, creating dynamic web applications with React, Node.js, Hono.js and TypeScript.",
      url: process.env.NEXT_PUBLIC_SITE_DOMAIN,
      images: [
         {
            url: process.env.NEXT_PUBLIC_OG_IMAGE!,
            width: 1200,
            height: 630,
            alt: "Raheem Orekoya - Frontend Web Developer"
         }
      ]
   },
   twitter: {
      card: "summary_large_image",
      title: "Raheem Orekoya - Frontend Web Developer",
      description: "Discover Raheem Orekoya's expertise in frontend web development, creating dynamic web applications with React, Node.js, and TypeScript.",
      images: [process.env.NEXT_PUBLIC_OG_IMAGE!]
   }
};

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
   )
}