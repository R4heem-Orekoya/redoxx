import type { Metadata } from "next";
import TanstackQueryProvider from "@/components/wrappers.tsx/TanstackQuery";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redoxx",
  description: "Fullstack Web Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="dark font-Montserrat antialiased relative bg-neutral-950 text-white">
        <main className="w-[min(900px,90%)] mx-auto py-20">
          <TanstackQueryProvider>
            {children}
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
  