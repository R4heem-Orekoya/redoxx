import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/wrappers.tsx/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Redoxx",
  description: "Fullstack Web Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-Montserrat antialiased py-12">
        <Providers>
          <Navbar />
          <main className="container max-w-3xl mx-auto">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
  