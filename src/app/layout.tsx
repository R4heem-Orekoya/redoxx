import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import "./prism.css"

export const metadata: Metadata = {
   title: "Raheem Orekoya - Frontend Engineer",
   description: "Raheem Orekoya is a skilled Frontend Engineer specializing in modern technologies like React, Next.js, Node.js, Hono.js and TypeScript.",
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
};

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
})

const fira = JetBrains_Mono({
   subsets: ['latin'],
   variable: '--font-jetbrain',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${inter.variable} ${fira.variable} antialiased`}>{children}</body>
      </html>
   )
}