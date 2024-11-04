import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import "./globals.css";
import Providers from "@/components/wrappers.tsx/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Redoxx",
  description: "Fullstack Web Developer",
};

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito_sans.variable} font-Nunito antialiased py-12`}>
        <Providers>
          <Navbar />
          <main className="container max-w-3xl mx-auto min-h-[calc(100vh-154px)]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
  